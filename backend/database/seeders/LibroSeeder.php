<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LibroSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('libros')->insert([
            'title' => 'El Principito',
            'price' => 8500.00,
            'cat' => 'Novela',
            'image' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}