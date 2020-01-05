<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
            'email' => 'admin@gmail.com',
            'name' => 'Ibroh24',
            'password' => bcrypt('password'),
            'type' => 'admin',
            'image' => asset('images/avatar.png'),
        ]);
    }
}
