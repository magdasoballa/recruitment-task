<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['title', 'user_id', 'completed'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
{
    return $this->hasMany(Comment::class); 
}
}
