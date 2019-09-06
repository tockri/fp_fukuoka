<?php


namespace Tests\Unit;


use App\HomeDTO;
use App\TaskDTOBuilder;
use Tests\TestCase;

class HomeDTOTest extends TestCase {
    function testMake() {
        $statuses = [
            $this->status(1, "Open"),
            $this->status(2, "In Progress"),
            $this->status(3, "Close")
        ];
        $categories = [
            $this->category(1, "C1"),
            $this->category(2, "C2"),
            $this->category(3, "C3")
        ];

        $tasks = [
            $this->task(1, "Task1", 1, 2, "2020-12-01"),
            $this->task(2, "Task2", 2, 3, "2020-12-01"),
            $this->task(3, "Task3", 1, 3, "2020-12-01"),

        ];
        $taskDtos = TaskDTOBuilder::buildAll($tasks, $statuses, $categories);
        $dto = new HomeDTO($taskDtos, 'category');

        $this->assertEquals('category', $dto->groupingKey);
    }
}
