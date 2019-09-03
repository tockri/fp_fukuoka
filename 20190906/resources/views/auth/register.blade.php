@extends('layouts.app')

@section('content')
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{ __('Register new user') }}</div>

          <div class="card-body">
            <form method="POST" action="{{ route('register') }}">
              @csrf

              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                <div class="col-md-6">
                  <input id="name" type="text"
                         class="form-control @error('name') is-invalid @enderror" name="name"
                         value="{{ old('name') }}"  autocomplete="name" autofocus>

                  @error('name')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
              </div>

              <div class="form-group row">
                <label for="kana" class="col-md-4 col-form-label text-md-right">{{ __('Kana') }}</label>

                <div class="col-md-6">
                  <input id="kana" type="text"
                         class="form-control @error('kana') is-invalid @enderror" name="kana"
                         value="{{ old('kana') }}" autocomplete="kana" autofocus>

                  @error('kana')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
              </div>

              <div class="form-group row">
                <label for="email"
                       class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                <div class="col-md-6">
                  <input id="email" type="email"
                         class="form-control @error('email') is-invalid @enderror" name="email"
                         value="{{ old('email') }}" autocomplete="email">

                  @error('email')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
              </div>

              <div class="form-group row">
                <label for="password"
                       class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                <div class="col-md-6">
                  <input id="password" type="password"
                         class="form-control @error('password') is-invalid @enderror" name="password"
                         value="{{ old('password') }}" autocomplete="new-password">

                  @error('password')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
              </div>

              <div class="form-group row">
                <label for="password-confirm"
                       class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                <div class="col-md-6">
                  <input id="password-confirm" type="password" class="form-control" name="password_confirmation"
                         value="{{ old('password-confirm') }}" autocomplete="new-password">
                </div>
              </div>

              <div class="form-group row">
                <label for="postal_code" class="col-md-4 col-form-label text-md-right">{{ __('Postal Code') }}</label>

                <div class="col-md-6">
                  <input id="postal_code" type="text"
                         class="form-control @error('postal_code') is-invalid @enderror" name="postal_code"
                         value="{{ old('postal_code') }}"
                         autocomplete="postal_code">

                  @error('postal_code')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
              </div>

              <div class="form-group row">
                <label for="address"
                       class="col-md-4 col-form-label text-md-right">{{ __('Address') }}</label>

                <div class="col-md-6">
                  <input id="address" type="text"
                         class="form-control @error('address') is-invalid @enderror" name="address"
                         autocomplete="address">

                  @error('address')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
              </div>

              <div class="form-group row">
                <label for="phone_number"
                       class="col-md-4 col-form-label text-md-right">{{ __('Phone Number') }}</label>

                <div class="col-md-6">
                  <input id="phone_number" type="text"
                         class="form-control @error('phone_number') is-invalid @enderror" name="phone_number"
                         autocomplete="phone_number">

                  @error('phone_number')
                  <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    {{ __('Register') }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
