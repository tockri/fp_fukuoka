<?php

namespace Tests\Unit;

use App\User;
use Tests\TestCase;

class UserTest extends TestCase {
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest() {
        $user = new User();
        $user->name = "test user";
        $this->assertEquals("test user", $user->name, "name isn't set");
    }
}
