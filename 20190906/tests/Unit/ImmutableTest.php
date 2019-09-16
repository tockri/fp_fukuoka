<?php
namespace Tests\Unit;

use App\Util\Immutable;
use Tests\TestCase;

class ImmutableTest extends TestCase {
    function testImmutable() {
        $some = new SomeClass("foo1", "bar1");
        $this->assertEquals("foo1", $some->foo);
        $this->assertEquals("bar1", $some->bar);
        $this->assertThrow(function() use ($some) {
            $some->baz = "baz";
        }, "定義していないプロパティを変更できてしまう");
        $this->assertThrow(function() use ($some) {
            $some->foo = "foo";
        }, "イミュータブルオブジェクトを変更できてしまう");
    }

    function testCopy() {
        $some = new SomeClass("foo1", "bar1");
        $some2 = $some->copy(["foo" => "foo2", "bar" => "bar2"]);
        $this->assertEquals("foo1", $some->foo);
        $this->assertEquals("bar1", $some->bar);
        $this->assertEquals("foo2", $some2->foo);
        $this->assertEquals("bar2", $some2->bar);
    }
}

class SomeClass {
    use Immutable;

    private $foo;
    private $bar;
    public function __construct($foo, $bar) {
        $this->foo = $foo;
        $this->bar = $bar;
    }
}
