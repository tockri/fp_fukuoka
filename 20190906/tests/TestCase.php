<?php

namespace Tests;

use App\Models\Category;
use App\Models\Status;
use App\Models\Task;
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
        return (object)[
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
        return (object) [
            'id' => $id,
            'subject' => $subject,
            'status_id' => $statusId,
            'category_id' => $categoryId,
            'due_date' => $dueDate
        ];
    }

    function assertThrow($lambda, $errorMessage) {
        try {
            $lambda();
        } catch (\Throwable $ex) {
            return;
        }
        $this->fail("Exception not thrown.  " . $errorMessage);
    }
}
