<?php
require_once(MODELPATH."UserModel.class.php");
require_once(LIBPATH."CollectionModel.class.php");

class UsersController extends ApplicationController{

	public function getrows($args){
		$collection = new CollectionModel(new User());
		return $this->send_success($collection->getData());
	}

	public function registerUser($args){
		if(empty($args)){
			return $this->send_error("User information not sent.");
		}
		try{
			$model = new UserModel();
			$model->usr_fname = $args['usr_fname'];
			$model->usr_lname = $args['usr_lname'];
			$model->usr_username = $args['usr_username'];
			$model->usr_password = $args['usr_password'];
			$model->usr_email = $args['usr_email'];
			$model->usr_created = $model->timestampCreate();
			$model->usr_modified = $model->timestampCreate();
			$model->save();
		}catch(Exception $ex){
			return $this->send_error($ex->getMessage());
		}
		return $this->send_success($model->getAttributes());
	}

	public function userLogin($args){
		$db = ApplicationDataConnectionPool::get('tutelage_db');
		$sql = "SELECT * FROM `tutelage_db`.`users`";
		// WHERE `usr_email` = {$args['usr_email']} AND `usr_password` = {$args['usr_password']}";
		$res = $db->query($sql);
		print_r($res->next());
		die();
	}

	public function insert($args){

	}

	public function update($args){

	}
}

?>