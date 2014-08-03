<?php
require_once(MODELPATH."User.class.php");
require_once(LIBPATH."CollectionModel.class.php");

class UsersController extends ApplicationController{

	public function getrows($args){
		$collection = new CollectionModel(new User());
		return $this->send_success($collection->getData());
	}

	public function registerUser($args){

	}

	public function userLogin($args){
		$db = ApplicationDataConnectionPool::get('tutelage_db');
		$sql = "SELECT * FROM `tutelage_db`.`users`";
		// WHERE `usr_email` = {$args['usr_email']} AND `usr_password` = {$args['usr_password']}";
		$res = $db->query($sql);
		print_r($res->next());
		die();
	}
}

?>