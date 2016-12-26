<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Beranda extends CI_Controller {

	public function __construct(){
		parent::__construct();
	}

	public function index(){
		$this->home();
	}

	public function home(){
		$data = array();
		$this->load->view('user/beranda', $data, FALSE);
	}

}
