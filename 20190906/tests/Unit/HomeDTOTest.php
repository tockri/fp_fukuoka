<?php
namespace Tests\Unit;

use App\Http\Controllers\Home\CategoryDTO;
use App\Http\Controllers\Home\HomeDTO;
use App\Http\Controllers\Home\StatusDTO;
use App\Http\Controllers\Home\TaskDTO;
use Tests\TestCase;

class HomeDTOTest extends TestCase {
    private function prepare() {
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
            $this->task(2, "Task2", 2, 3, "2020-12-02"),
            $this->task(3, "Task3", 1, 3, "2020-12-03"),
            $this->task(4, "Task4", 2, 3, "2020-12-04"),
            $this->task(5, "Task5", 1, 3, "2020-12-05"),
        ];
        return [$tasks, $statuses, $categories];
    }

    function testDTOs() {
        list($tasks, $statuses, $categories) = $this->prepare();
        $statusDTOs = StatusDTO::buildArray($statuses);
        $this->assertEquals(3, count($statusDTOs));
        $this->assertEquals('StatusDTO', class_basename($statusDTOs[0]));
        $categoryDTOs = CategoryDTO::buildArray($categories);
        $this->assertEquals(3, count($categoryDTOs));
        $this->assertEquals('CategoryDTO', class_basename($categoryDTOs[0]));
        $taskDTOs = TaskDTO::buildArray($tasks, $statusDTOs, $categoryDTOs);
        $this->assertEquals(5, count($taskDTOs));
        $this->assertEquals('TaskDTO', class_basename($taskDTOs[0]));
        $this->assertEquals('CategoryDTO', class_basename($taskDTOs[0]->category));
        $this->assertEquals('StatusDTO', class_basename($taskDTOs[0]->status));
    }

    function testHomeDTO() {
        list($tasks, $statuses, $categories) = $this->prepare();
        $statusDTOs = StatusDTO::buildArray($statuses);
        $categoryDTOs = CategoryDTO::buildArray($categories);
        $taskDTOs = TaskDTO::buildArray($tasks, $statusDTOs, $categoryDTOs);
        $homeDTO = new HomeDTO($taskDTOs, $statusDTOs, $categoryDTOs, 'status');
        $this->assertEquals('ステータス', $homeDTO->groupingLabel);
        $this->assertEquals(3, count($homeDTO->groups));
        $this->assertEquals('HomeGroupDTO', class_basename($homeDTO->groups[0]));
        $this->assertEquals('StatusDTO', class_basename($homeDTO->groups[0]->head));
        $this->assertEquals($statusDTOs[0], $homeDTO->groups[0]->tasks[0]->status);
    }

    function testHomeDTO2() {

    }


}
