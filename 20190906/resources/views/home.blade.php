@extends('layouts.app')

@section('content')
<div class="container">
  <div class="mt-lg-3">
    <div>
    @foreach($statuses as $status)
      {{$status->name}} ,
    @endforeach
    </div>
    <div>
      @foreach($categories as $cat)
        {{$cat->name}} ,
      @endforeach
    </div>
  <table class="table table-bordered">
    <thead>
    <tr>
      <th>タスク</th>
      <th>ステータス</th>
      <th>カテゴリー</th>
      <th>期日</th>
    </tr>
    </thead>
    <tbody>
    @foreach($tasks as $task)
      <tr>
        <td>{{$task->subject}}</td>
        <td>{{$task->status->name}}</td>
        <td>{{$task->category->name}}</td>
        <td>{{$task->due_date}}</td>
      </tr>
    @endforeach
    </tbody>
  </table>
  </div>
</div>
  @php
    dd(\DB::getQueryLog());
  @endphp
@endsection
