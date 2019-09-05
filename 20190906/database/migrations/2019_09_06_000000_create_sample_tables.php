<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSampleTables extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('statuses',
            function(Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('name');
                $table->string('color')->default('#ff0000');
            });

        Schema::create('categories',
            function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('name');
            });

        Schema::create('tasks',
            function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('subject');
                $table->unsignedBigInteger('status_id')->nullable()->default(null);
                $table->foreign('status_id')->references('id')->on('statuses');
                $table->unsignedBigInteger('category_id')->nullable()->default(null);
                $table->foreign('category_id')->references('id')->on('categories');
                $table->date('due_date')->nullable()->default(null);
                $table->timestamps();
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('tasks');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('statuses');
    }
}
