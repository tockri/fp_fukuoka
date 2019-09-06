<?php

namespace Tests;

use App\Category;
use App\Status;
use App\Task;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase {
    use CreatesApplication;

    /**
     * @param $id
     * @param $name
     * @return Status
     */
    function status($id, $name) {
        return (object) [
            'id' => $id,
            'name' => $name,
        ];
    }

    /**
     * @param $id
     * @param $name
     * @return Category
     */
    function category($id, $name) {
        return (object) [
            'id' => $id,
            'name' => $name,
        ];
    }

    /**
     * @param $id
     * @param $subject
     * @param $statusId
     * @param $categoryId
     * @param $dueDate
     * @return Task
     */
    function task($id, $subject, $statusId, $categoryId, $dueDate) {
        $t = new Task();
        $t->id = $id;
        $t->subject = $subject;
        $t->status_id = $statusId;
        $t->category_id = $categoryId;
        $t->due_date = $dueDate;
        return $t;
    }
}
