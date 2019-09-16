<?php
namespace App\Util;

class ArrayUtil {
    private function __construct() {
    }

    static function array_find($callback, array $array) {
        foreach ($array as $key => $value) {
            if ($callback($value, $key) === true) {
                return $value;
            }
        }
        return null;
    }

}

