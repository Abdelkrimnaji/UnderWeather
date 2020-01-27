<?php

namespace Framework\Component;

use \Dotenv;
use Exception;

class DatabaseConfig
{
    protected static $db;



    private static function config(){
        try
        {
            $dotenv = \Dotenv\Dotenv::create("https://meteo.abdelkrim-naji.com/");
            $dotenv->load();
            self::$db = new \PDO('mysql:host='.getenv('db5000278655.hosting-data.io').';dbname='.getenv('dbs271999'), getenv('dbu63584'), getenv('Didier15*') );
            self::$db->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        }
        catch(Exception $e)
        {
            die('Erreur : '.$e->getMessage());
        }
    }
    protected static function connect(){
        self::config();        
    }
    
}