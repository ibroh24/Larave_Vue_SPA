<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class UserController extends Controller
{
   
    public function index()
    {
        return User::latest()->paginate(10);
        // return User::all();
    }

   
    public function store(Request $request)
    {
        // return ['We got your data'];
        $this->validate($request, [
            'name' => 'required|max:50',
            'email' => 'required|email|max:50|unique:users',
            'password' => 'required|max:40'

        ]);
        $userData = new User([
            'name' => $request->name,
            'email'  => $request->email,
            'password' => bcrypt($request->password),
            'bio' => $request->bio,
            'type' => $request->type,
        ]);

        $userData->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
