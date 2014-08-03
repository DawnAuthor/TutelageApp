<?php

require_once(MODELPATH."Book.class.php");
require_once(LIBPATH."CollectionModel.class.php");

class BooksController extends ApplicationController{

	public function getrows($args){
		$collection = new CollectionModel(new Book(),array());
		return $this->send_success($collection->getData());
	}

	public function get($args){
        $model = new Book($args['id']);
        $data = $model->getAttributes();
        return $this->send_success(array("data"=>$data));
    }

    public function insert($args){
        
        if(!isset($args) || $args == ""){
            return $this->send_error("Cannot insert Book. Missing arguments.");
        }else if(!isset($args) || $args == ""){
            return $this->send_error("Cannot insert Book. Missing arguments data.");
        }

        $model = new Book();
       
       
        $args['book_id'] = "";
        foreach($args as $col => $val){
            $model->$col = $val;
        }
        
        $model->save();
        return $this->send_success();
    }

    public function update($args){
       
        $model = new PatientsVitalsModel($args['data']['book_id']);
        
        foreach($args['data'] as $col => $val){
            $model->$col = $val;   //Removes any character that's not a number or a period
        }

        $model->save();
        return $this->send_success();
    }
}

?>