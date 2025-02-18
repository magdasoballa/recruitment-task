<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Auth::user()->tasks; 
        return Inertia::render('Tasks/Index', [
            'tasks' => $tasks
        ]);
    }

    public function store(Request $request)
    {
        if (Auth::check()) {
            $request->validate([
                'title' => 'required|string|max:255',
            ]);

            Auth::user()->tasks()->create([
                'title' => $request->title,
            ]);

            return redirect()->route('tasks.index');
        } else {
            return redirect()->route('login');
        }
    }

    public function update(Request $request, Task $task)
    {
        if ($task->user_id !== Auth::id()) {
            abort(403);  
        }

        $task->title = $request->title; 
        $task->save();

        return redirect()->route('tasks.index');
    }

    public function destroy(Task $task)
    {
        if ($task->user_id !== Auth::id()) {
            abort(403);  
        }

        $task->delete();

        return redirect()->route('tasks.index');
    }

    public function toggleCompletion(Task $task)
    {
        if ($task->user_id !== Auth::id()) {
            abort(403);  
        }

        $task->completed = !$task->completed;
        $task->save(); 

        return redirect()->route('tasks.index');
    }
}
