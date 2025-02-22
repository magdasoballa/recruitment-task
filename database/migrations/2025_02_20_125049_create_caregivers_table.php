<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('caregivers', function (Blueprint $table) {
            $table->string('name')->after('id');
            $table->integer('age')->after('name');
            $table->integer('experience_years')->after('age');
            $table->json('languages')->after('experience_years');
            $table->float('rating')->after('languages')->default(0);
            $table->string('specialization')->nullable()->after('rating');
            $table->text('availability')->nullable()->after('specialization');
            $table->string('location')->nullable()->after('availability');
            $table->json('reviews')->nullable()->after('location');
            $table->json('additional_skills')->nullable()->after('reviews');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('caregivers');
    }
};
