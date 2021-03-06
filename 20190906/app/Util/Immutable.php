<?php

namespace App\Util;

trait Immutable {
    public function __get($name) {
        if (!property_exists($this, $name)) {
            $class = get_class($this);
            throw new \LogicException("Undefined property \"$class::$name\".");
        }
        return $this->$name;
    }

    public function __set($name, $val) {
        $class = get_class($this);
        throw new \LogicException("Cannot modify property \"$class::$name\".");
    }

    public function copy(array $nameValues) {
        $o = clone $this;
        foreach($nameValues as $name => $value) {
            if (!property_exists($o, $name)) {
                $class = get_class($o);
                throw new \LogicException("Undefined property \"$class::$name\".");
            }
            $o->$name = $value;
        }
        return $o;
    }
}
