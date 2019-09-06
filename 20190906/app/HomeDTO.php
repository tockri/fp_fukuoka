<?php


namespace App;

class HomeDTO {
    use Immutable;
    private $groupingKey;
    private $groups;

    public function __construct(array $tasks, $groupingKey) {
        $this->groups = self::makeGroups($tasks, $groupingKey);
        $this->groupingKey = $groupingKey;
    }

    private static function makeGroups(array $tasks, $key) {
        $groups = [];
        foreach($tasks as $task) {
            $gid = $key === 'status' ? $task->status_id
                : ($key === 'category' ? $task->category_id
                    : '');
            if (!isset($groups[$gid])) {
                $groups[$gid] = [];
            }
            array_push($groups[$gid], $task);
        }
        return $groups;
    }
}
