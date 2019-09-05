<?php

namespace App\Http\Controllers;

use App\Category;
use App\Status;
use App\Task;

class HomeController extends Controller {
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index() {
        \DB::enableQueryLog();
        $tasks = Task::orderBy('due_date', 'asc')->get();
        $statuses = []; // Status::all();
        $categories = []; // Category::all();

        return view('home', compact(['tasks', 'statuses', 'categories']));
    }
}
