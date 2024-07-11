<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/CreateUser', function () {
    return Inertia::render('CreateUser');
});

Route::get('/user', [UserController::class, 'index'])->name('user.index');
Route::post('/user', [UserController::class, 'store']);
Route::get('/user/edit/{id}', [UserController::class, 'edit']);
Route::put('/user/{id}', [UserController::class, 'update']);
Route::delete('/user/{id}', [UserController::class, 'destroy']);