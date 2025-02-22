<?php

use App\Http\Controllers\CaregiverController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SurveyController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\CommentController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/tasks', [TaskController::class, 'index'])->middleware(['auth'])->name('tasks.index');
    Route::get('/tasks/create', [TaskController::class, 'create'])->name('tasks.create');
    Route::post('/tasks', [TaskController::class, 'store'])->name('tasks.store');
    Route::get('/tasks/{task}/edit', [TaskController::class, 'edit'])->name('tasks.edit');
    Route::patch('/tasks/{task}/toggle-completion', [TaskController::class, 'toggleCompletion'])->name('tasks.toggleCompletion');
    Route::put('/tasks/{task}', [TaskController::class, 'update'])->name('tasks.update');
    Route::delete('/tasks/{task}', [TaskController::class, 'destroy'])->name('tasks.destroy');
    Route::patch('/tasks/{task}', [TaskController::class, 'update'])->name('tasks.update');

    Route::get('/login', function () {
        return Inertia::render('Auth/Login');
    })->name('login');
    Route::post('/tasks/{task}/comments', [CommentController::class, 'store'])->name('tasks.comments.store');
    Route::get('/survey', function () {
        return Inertia::render('Survey');
    })->name('survey');
    Route::middleware('auth')->group(function () {
        Route::get('/survey', [SurveyController::class, 'index'])->name('survey');
        Route::post('/survey', [SurveyController::class, 'store'])->name('survey.store');
    });
    Route::get('/survey/{id}/edit', [SurveyController::class, 'edit'])->name('survey.edit');
    Route::put('/survey/{id}', [SurveyController::class, 'update'])->name('survey.update');
    Route::get('/caregivers', [CaregiverController::class, 'index'])->name('caregivers.index');

});

require __DIR__.'/auth.php';
