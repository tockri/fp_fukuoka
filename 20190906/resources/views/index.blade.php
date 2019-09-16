@extends('layouts.app')

@section('content')
  <div class="container">
    <div class="mt-lg-3">
      <div class="row">
        <div class="col-sm-2">
          <a href="?group=status">ステータス</a>
        </div>
        <div class="col-sm-2">
          <a href="?group=category">カテゴリー</a>
        </div>
        <div class="col-sm-2">
          <a href="?">解除</a>
        </div>
      </div>
    </div>
    <div class="mt-lg-3">
      @foreach($data->groups as $group)
        @if($group->head->getName())
          <h2>{{$data->groupingLabel}} : {{$group->head->getName()}}</h2>
        @endif
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
        @foreach($group->tasks as $task)
          <tr>
            <td>{{$task->subject}}</td>
            <td>{{$task->status->name}}</td>
            <td>{{$task->category->name}}</td>
            <td>{{$task->due_date}}</td>
          </tr>
        @endforeach
        </tbody>
      </table>
      @endforeach
    </div>
  </div>
@endsection
