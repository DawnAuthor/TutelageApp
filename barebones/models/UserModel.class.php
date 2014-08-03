<?php
class UserModel extends Model{
	public function __construct($id=""){
		parent::__construct('tutelage_db','users',$id);
	}
}
?>