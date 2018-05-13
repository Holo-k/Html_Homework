// JavaScript Document

function change(){
	if($i==$z) $i=0;
	$j=$i;
	$(".num a").eq($j).attr("class","num_on").siblings().removeClass("num_on");
	$(".flash_list a").eq($j).fadeIn(1000);
	$(".flash_list a").eq($j).siblings().css("display","none");
	
	
	$i++;
	}



$(function(){
	$i=1;
	$z=$(".flash_list a").length;
	$set=setInterval("change()",6000);
	$(".num a").click(function(){
		clearInterval($set);
		$i=$(".num a").index($(this));
		change();
		$set=setInterval("change()",4000);
		});
		
		
	});