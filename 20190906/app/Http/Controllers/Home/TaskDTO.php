<?php

namespace App\Http\Controllers\Home;

use App\Models\Category;
use App\Models\Status;
use App\Util\ArrayUtil;
use App\Util\Immutable;
use Carbon\Traits\Date;

interface GroupHead {
    function getId();
    function getName();
}

class NoGrouping implements GroupHead {
    function getId() {
        return 0;
    }
    function getName() {
        return '';
    }
}

trait GroupHeadImpl {
    function getId() {
        return $this->id;
    }
    function getName() {
        return $this->name;
    }
}

class StatusDTO implements GroupHead {
    use Immutable;
    use GroupHeadImpl;
    /** @var int */
    private $id;
    /** @var string */
    private $name;

    /**
     * StatusDTO constructor.
     * @param $status Status
     */
    public function __construct($status) {
        $this->id = $status->id;
        $this->name = $status->name;
    }

    /**
     * @param array $statuses
     * @return array of StatusDTO
     */
    public static function buildArray(array $statuses) {
        return array_map(function($s) {return new StatusDTO($s);}, $statuses);
    }
}

class CategoryDTO implements GroupHead {
    use Immutable;
    use GroupHeadImpl;
    /** @var int */
    private $id;
    /** @var string */
    private $name;

    /**
     * CategoryDTO constructor.
     * @param $category Category
     */
    public function __construct($category) {
        $this->id = $category->id;
        $this->name = $category->name;
    }
    /**
     * @param array $categories
     * @return array of CategoryDTO
     */
    public static function buildArray(array $categories) {
        return array_map(function($c) {return new CategoryDTO($c);}, $categories);
    }
}

class TaskDTO {
    use Immutable;
    /** @var int */
    private $id;
    /** @var string */
    private $subject;
    /** @var int */
    private $status_id;
    /** @var int */
    private $category_id;
    /** @var Date */
    private $due_date;
    /** @var StatusDTO */
    private $status;
    /** @var CategoryDTO  */
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

    public static function buildArray(array $tasks, array $statusDTOs, array $categoryDTOs) {
        return array_map(function($task) use ($statusDTOs, $categoryDTOs) {
            $status = ArrayUtil::array_find(function($s) use ($task) {return $s->id === $task->status_id;}, $statusDTOs);
            $category = ArrayUtil::array_find(function ($c) use ($task) {return $c->id === $task->category_id;}, $categoryDTOs);
            return new TaskDTO($task, $status, $category);
        }, $tasks);
    }
}

