<?php

    namespace App\Services;
    use App\Models\User;

    class UserService {
        public function get($username = null) {
            if ($username){
                return User::select($username);
            } else {
                return User::selectAll();
            }
        }

        public function post() {
            $data = json_decode(file_get_contents('php://input'), true);
            return  User::insert($data);
        }

        public function put() {
            $data = (array) json_decode(file_get_contents('php://input'), TRUE);
            return User::update($data);
        }
    }