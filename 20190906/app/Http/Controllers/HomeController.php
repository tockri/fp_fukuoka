<?php

namespace App\Http\Controllers;

use App\Category;
use App\HomeDTO;
use App\Status;
use App\Task;
use App\TaskDTOBuilder;
use Illuminate\Http\Request;

class HomeController extends Controller {
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $req) {
        \DB::enableQueryLog();
        $statuses = Status::all();
        $categories = Category::all();
        $tasks = Task::orderBy('due_date', 'asc')->get();
        $tasks = TaskDTOBuilder::buildAll($tasks->all(), $statuses->all(), $categories->all());

        $grouping = $req->input('group');

        $data = new HomeDTO($tasks, $grouping);
        return view('index', compact(['data', 'statuses', 'categories']));
    }
}





