<?php

    namespace App\Models;

    class Transaction {

        public static function select($transacao) {
            $con_string = 'host='.DBHOST.' port=5432 dbname='.DBNAME.' user='.DBUSER.' password='.DBPASS;
            $bdcon = pg_connect($con_string);

            $result = pg_query($bdcon, "select t.*, ur.value value_u from daniel_geahn.transactions t inner join daniel_geahn.user_releases ur on ur.transaction_id = t.id and ur.id = (select max(ur2.id) from daniel_geahn.user_releases ur2 where ur2.transaction_id = '".$transacao."')");
            $numrows = pg_numrows($result);
            
            if (!$numrows) {
            throw new \Exception("Nenhuma transação encontrada");
            exit;
            } else {
                return $arr = pg_fetch_array($result, NULL, PGSQL_ASSOC);
            }
        }

        public static function selectAll($user_id) {
            $con_string = 'host='.DBHOST.' port=5432 dbname='.DBNAME.' user='.DBUSER.' password='.DBPASS;
            $bdcon = pg_connect($con_string);

            $result = pg_query($bdcon, "select t.*, ur.value value_u, ur.created_at updated_u from daniel_geahn.transactions t inner join daniel_geahn.user_releases ur on ur.transaction_id = t.id and ur.id = (select max(ur2.id) from daniel_geahn.user_releases ur2 where ur2.user_id = '".$user_id."' and ur2.transaction_id = t.id)");
            $numrows = pg_numrows($result);

            if (!$numrows) {
            throw new \Exception("Nenhuma transação encontrada");
            exit;
            } else {
                return $arr = pg_fetch_all($result, PGSQL_ASSOC);
            }
        }

        public static function insert($data) {

            $user_id = $data['user_id'];
            $type = $data['type'];
            $description = $data['description'];
            $value = $data['value'];

                $con_string = 'host='.DBHOST.' port=5432 dbname='.DBNAME.' user='.DBUSER.' password='.DBPASS;
                $bdcon = pg_connect($con_string);

                $result = pg_query($bdcon, "INSERT INTO daniel_geahn.transactions (type, description, value, status) VALUES ('".$type."', '".$description."', '".$value."', '1')");

                if (!$result) {
                throw new \Exception("Falha ao inserir a Transação!");
                exit;
                }

                $result = pg_query($bdcon, "select * from daniel_geahn.transactions where id = (SELECT MAX(id) FROM daniel_geahn.transactions WHERE value = '".$value."')");
                $result = pg_fetch_assoc($result);
                $transaction_id = $result['id'];

                $result = pg_query($bdcon, "INSERT INTO daniel_geahn.user_releases (user_id, transaction_id, operation_type, value) VALUES ('".$user_id."', '".$transaction_id."', 'C', '".$value."')");

                if (!$result) {
                throw new \Exception("Falha ao inserir a Relação!");
                exit;
                } else {
                    return $data;
                }
            
        }

        public static function update($data) {
            
            $user_id = json_decode($data['user_id']);
            $value = $data['value'];
            $transaction_id = $data['transaction_id'];

            $con_string = 'host='.DBHOST.' port=5432 dbname='.DBNAME.' user='.DBUSER.' password='.DBPASS;
            $bdcon = pg_connect($con_string);

            //$result = pg_query($bdcon, "UPDATE daniel_geahn.transactions SET value = '".$value."' WHERE id = '".$id."'");
            $result = pg_query($bdcon, "INSERT INTO daniel_geahn.user_releases (user_id, transaction_id, operation_type, value)
            VALUES ('".$user_id."', '".$transaction_id."', 'U', '".$value."')");

            if (!$result) {
                throw new \Exception("Falha ao alterar transação!");
                exit;
                } else {
                    return $data;
                }

        }
    }