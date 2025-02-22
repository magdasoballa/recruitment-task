<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Caregiver;

class CaregiverSeeder extends Seeder
{
    public function run(): void
    {
        Caregiver::create([
            'name' => 'John Doe',
            'age' => 25,
            'experience_years' => 1,
            'languages' => json_encode(['eng'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
            'rating' => 4.8
        ]);
        Caregiver::create([
            'name' => 'Jane Smith',
            'age' => 29,
            'experience_years' => 5,
            'languages' => json_encode(['eng', 'pl'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
            'rating' => 4.5
        ]);
        Caregiver::create([
            'name' => 'Anna Kowalska',
            'age' => 49,
            'experience_years' => 10,
            'languages' => json_encode(['de', 'pl'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
            'rating' => 4.5
        ]);

    }
}
