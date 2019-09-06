<?php


namespace App;


class TaskDTOBuilder {
    private static function find(array $records, $id) {
        if (isset($records) && isset($id)) {
            foreach ($records as $record) {
                if ($record->id === $id) {
                    return $record;
                }
            }
        }
        return null;
    }

    /**
     * @param object $task
     * @param array $statuses
     * @param array $categories
     * @return TaskDTO
     */
    static function build($task, array $statuses, array $categories) {
        return new TaskDTO($task,
            new StatusDTO(self::find($statuses, $task->status_id)),
            new CategoryDTO(self::find($categories, $task->category_id)));
    }

    static function buildAll(array $tasks, array $statuses, array $categories) {
        return array_map(function ($task) use ($statuses, $categories) {
            return self::build($task, $statuses, $categories);
        },
            $tasks);
    }
}
