<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("get-users", function() {

    return response()->json([
        'users' => DB::table('gabriel_biasom.users')->get()
    ]);
});

Route::post("create-user", function(Request $request) {

    $newUser = DB::table('gabriel_biasom.users')->insert([
        'username' => $request->username,
        'password' => $request->password,
        'status' => $request->status
    ]);

    if ($newUser == true) {
        return response()->json([
            'message' => 'Usuário cadastrado com sucesso!',
            'error' => false
        ]);
    } else {
        return response()->json([
            'message' => 'Usuário não cadastrado!',
            'error' => true
        ]);
    }

});

Route::get('search/{username}/{password}', function($username, $password){
    // echo $username;
    // echo $password;

    return DB::table('gabriel_biasom.users')
    ->where('username', $username)
    ->where('password', $password)
    ->first();
});

Route::post('update/{id}', function(Request $request, $id){
    $update = DB::table('gabriel_biasom.users')
    ->where('id', $id)
    ->update([
        'username' => $request->username,
        'status' => $request->status
    ]);

    if($update) {
        return response()->json([
            'error' => false,
            'message' => "Usuário editado com sucesso"
        ]);
    }
    else{
        return response()->json([
            'error' => true,
            'message' => "Usuário não editado"
        ]);
    }
});




