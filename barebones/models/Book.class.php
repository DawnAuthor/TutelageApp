<?php
class Book extends Model{
	public function __construct($id=""){
		parent::__construct('workshop','books',$id);
	}
}
?>