<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Caregiver extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'age',
        'experience_years',
        'languages',
        'rating',
        'specialization',
        'availability',
        'location',
        'reviews',
        'additional_skills'
    ];

    protected $casts = [
        'languages' => 'array',
    ];
}
