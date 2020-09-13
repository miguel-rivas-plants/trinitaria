<?php
	if($_GET["name"]){ $name = '?name=' . $_GET["name"]; }
	header('Location: project/palmera' . $name);
?>