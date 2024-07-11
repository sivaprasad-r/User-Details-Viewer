<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return inertia('Mainscreen', [
            'users' => $users,
        ]);
    }

    public function store(Request $request) {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'phone' => 'required'
        ], [
            'name.required' => 'Name is required',
            'email.required' => 'Email is required',
            'email.email' => 'Invalid email format',
            'email.unique' => 'Email already exists',
            'phone.required' => 'Phone is required'
        ]);
    
        User::create($data);
        return redirect()->route('user.index');
    }
    
    public function update(Request $request, $id) {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $id,
            'phone' => 'required'
        ], [
            'name.required' => 'Name is required',
            'email.required' => 'Email is required',
            'email.email' => 'Invalid email format',
            'email.unique' => 'Email already exists',
            'phone.required' => 'Phone is required'
        ]);
    
        $user = User::findOrFail($id);
        $user->update($data);
        return redirect()->route('user.index');
    }

    public function edit($id){
        $user = User::findOrFail($id);
        return inertia('EditUser', [
            'user' => $user
        ]);
    }

    public function destroy($id){
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->route('user.index');
    }
    
}
