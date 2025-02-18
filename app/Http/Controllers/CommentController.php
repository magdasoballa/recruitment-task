<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(Request $request, $taskId)
    {
        $request->validate([
            'content' => 'required|string|max:255',
        ]);

        $task = Task::findOrFail($taskId);
        $task->comments()->create([
            'content' => $request->content,
            'user_id' => Auth::id(),
        ]);

        return redirect()->route('tasks.index'); 
    }
}