<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function index()
    {
        $peoples = [
            ['name' => 'John Doe', 'age' => 20],
            ['name' => 'Jane Doe', 'age' => 25],
            ['name' => 'Johnny Doe', 'age' => 30],
        ];

        return response()->json([
            'message' => 'Hello World!',
            'peoples' => $peoples,
        ]);
    }
}
