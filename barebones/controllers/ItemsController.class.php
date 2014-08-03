<?php
require_once(MODELPATH."ItemModel.class.php");
require_once(LIBPATH."CollectionModel.class.php");

class ItemsController extends ApplicationController{

	public function getrows($args){
		$collection = new CollectionModel(new ItemModel());
		return $this->send_success($collection->getData());
	}

	public function insert($args){
		if(!isset($args) || $args == ""){
            return $this->send_error("Cannot insert Item. Missing arguments.");
        }else if(!isset($args) || $args == ""){
            return $this->send_error("Cannot insert Item. Missing arguments data.");
        }

        $model = new ItemModel();
        $args['itm_id'] = "";
        $args['itm_modified_ts'] = $model->timestampCreate();
        $args['itm_created_ts'] = $model->timestampCreate();
        foreach($args as $col => $val){
            $model->__set($col,$val);
        }
        $model->save();
        return $this->send_success($model->getAttributes());
	}
}

?>