<?php

namespace App;


class StatusDTO {
    use Immutable;
    private $id;
    private $name;

    public function __construct($status) {
        $this->id = $status->id;
        $this->name = $status->name;
    }
}

class CategoryDTO {
    use Immutable;
    private $id;
    private $name;

    public function __construct($category) {
        $this->id = $category->id;
        $this->name = $category->name;
    }
}

class TaskDTO {
    use Immutable;
    private $id;
    private $subject;
    private $status_id;
    private $category_id;
    private $due_date;
    private $status;
    private $category;

    public function __construct($task, StatusDTO $status, CategoryDTO $category) {
        $this->id = $task->id;
        $this->subject = $task->subject;
        $this->due_date = $task->due_date;
        $this->status_id = $task->status_id;
        $this->category_id = $task->category_id;
        if ($this->category_id === $category->id) {
            $this->category = $category;
        }
        if ($this->status_id === $status->id) {
            $this->status = $status;
        }
    }
}

