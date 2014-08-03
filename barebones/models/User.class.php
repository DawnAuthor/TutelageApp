<?php
class User extends Model{
	public function __construct($id=""){
		parent::__construct('borrow','users',$id);
	}
}
?>