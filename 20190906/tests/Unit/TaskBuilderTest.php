<?php
namespace Tests\Unit;


use App\TaskDTO;
use App\StatusDTO;
use App\CategoryDTO;
use App\TaskDTOBuilder;
use Tests\TestCase;

class TaskBuilderTest extends TestCase {
    public function testInitialize() {
        $status = $this->status(1, "Open");
        $category = $this->category(2, "Cate1");
        $task = $this->task(10, "Task10", 1, 2, "2019-01-01");
        $dto = new TaskDTO($task, new StatusDTO($status), new CategoryDTO($category));
        $this->assertEquals(1, $dto->status->id);
        $this->assertEquals(2, $dto->category->id);
    }

    public function testBuild() {
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
        $task = $this->task(1, "Task1", 1, 2, "2020-12-01");
        $dto = TaskDTOBuilder::build($task, $statuses, $categories);

        $this->assertNull($task->status, "元オブジェクトが変更されている");

        $this->assertEquals("Task1", $dto->subject, "Subjectが変わってしまっている");
        $this->assertEquals("Open", $dto->status->name, "Statusが結合できてない");
        $this->assertEquals("C2", $dto->category->name, "Categoryが結合できてない");
    }
}
