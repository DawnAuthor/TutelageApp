<?php
$routes['GET'][] = array(
   "name"=>"UsersController",
   "path"=>"{CONTROLLERSPATH}users_controller.class.php",
   "pattern"=>"@^users/accounts$@",
   "method"=>"getrows"
);
$routes['GET'][] = array(
   "name"=>"UsersController",
   "path"=>"{CONTROLLERSPATH}users_controller.class.php",
   "pattern"=>"@^users/accounts/:id$@",
   "method"=>"get"
);
$routes['PUT'][] = array(
   "name"=>"UsersController",
   "path"=>"{CONTROLLERSPATH}users_controller.class.php",
   "pattern"=>"@^users/accounts/:id$@",
   "method"=>"update"
);
$routes['POST'][] = array(
   "name"=>"UsersController",
   "path"=>"{CONTROLLERSPATH}users_controller.class.php",
   "pattern"=>"@^users/accounts$@",
   "method"=>"insert"
);

$routes['POST'][] = array(
   "name"=>"UsersController",
   "path"=>"{CONTROLLERSPATH}users_controller.class.php",
   "pattern"=>"@^users/login$@",
   "method"=>"userLogin"
);

?>