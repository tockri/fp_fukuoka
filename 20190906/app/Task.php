<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    public function status() {
        return $this->belongsTo('App\Status');
    }
    public function category() {
        return $this->belongsTo('App\Category');
    }
}
