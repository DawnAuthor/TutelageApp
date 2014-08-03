<?php
class ItemModel extends Model{
	public function __construct($id=""){
		parent::__construct('borrow','items',$id);
	}
}
?>