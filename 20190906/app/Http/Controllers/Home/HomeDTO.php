<?php
namespace App\Http\Controllers\Home;

use App\Util\Immutable;

class HomeGroupDTO {
    use Immutable;
    /** @var GroupHead */
    private $head;
    /** @var array of TaskDTO */
    private $tasks;

    public function __construct(GroupHead $head, array $tasks) {
        $this->head = $head;
        $this->tasks = $tasks;
    }
}

class HomeDTO {
    use Immutable;
    /** @var string|null  */
    private $groupingKey;
    /** @var string */
    private $groupingLabel;
    /** @var array of HomeGroupDTO */
    private $groups;
    /** @var array of StatusDTO */
    private $statuses;
    /** @var array of CategoryDTO */
    private $categories;


    /**
     * HomeDTO constructor.
     * @param array $tasks array of TaskDTO
     * @param array $statuses array of StatusDTO
     * @param array $categories array of CategoryDTO
     * @param $groupingKey string|null
     */
    public function __construct(array $tasks, array $statuses, array $categories, $groupingKey) {
        $this->groupingKey = $groupingKey;
        $this->groupingLabel = $groupingKey === 'status' ? 'ステータス'
            : ($groupingKey === 'category' ? 'カテゴリー'
                : null);
        $this->groups = self::buildGroups($tasks, $statuses, $categories, $groupingKey);
    }

    private static function buildGroup(array $tasks, GroupHead $head, $groupingKey) {
        $filtered = array_filter($tasks, function($task) use ($head, $groupingKey) {
            $gid = $groupingKey === 'status' ? $task->status_id
                : ($groupingKey === 'category' ? $task->category_id
                    : '');
            return $gid === $head->getId();
        });
        return new HomeGroupDTO($head, $filtered);
    }

    private static function buildGroups(array $tasks, array $statuses, array $categories, $groupingKey) {
        $heads = $groupingKey === 'status' ? $statuses
            : ($groupingKey === 'category' ? $categories
            : null);
        if (!is_null($heads)) {
            return array_map(function($head) use ($tasks, $groupingKey) {
                return self::buildGroup($tasks, $head, $groupingKey);
            }, $heads);
        } else {
            return [new HomeGroupDTO(new NoGrouping(), $tasks)];
        }
    }

}
