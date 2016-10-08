<?php
	include("simple_html_dom.php");
	$html=file_get_html("http://www.klart.se/v%C3%A4der-karlshamn.html");
	$title=$html->find("div#city-weather",0)->innertext;
	echo $title;
?>