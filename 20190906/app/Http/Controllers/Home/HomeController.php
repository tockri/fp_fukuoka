<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Status;
use App\Models\Task;
use Illuminate\Http\Request;

class HomeController extends Controller {
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $req) {
        \DB::enableQueryLog();
        $statuses = StatusDTO::buildArray(Status::all()->all());
        $categories = CategoryDTO::buildArray(Category::all()->all());
        $tasks = TaskDTO::buildArray(Task::orderBy('due_date', 'asc')->get()->all(), $statuses, $categories);


        $groupingKey = $req->input('group');

        $data = new HomeDTO($tasks, $statuses, $categories, $groupingKey);
        return view('index', compact(['data', 'statuses', 'categories']));
    }
}





