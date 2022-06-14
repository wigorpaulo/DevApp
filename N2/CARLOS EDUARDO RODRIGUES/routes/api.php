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

Route:: get('get-users', function(){
    return DB::table('carlos_eduardo.users')->get();

}); 

Route::post('create-user', function(Request $request){
   $newUser = DB::table('carlos_eduardo.users')->insert([
        'username'=> $request->username,
        'password'=> $request->password,
        'status'=> $request->status
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

Route::get('search-username-password/{username}/{password}', function($username, $password){
   // echo $username;
   // echo $password;

    return DB::table('carlos_eduardo.users')
    ->select('username')
        ->where('username', $username)
        ->where('password', $password)
        ->first();

});

Route::post('updade/{id}', function(Request $request, $id){
    return DB::table('carlos_eduardo.users')
    ->where('id', $id)
    ->update([
        'username' => $request->username,
        'status' => $request->status
    ]);

});