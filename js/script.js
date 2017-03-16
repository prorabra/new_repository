$(document).ready(function(){
	
	$('.submit').click(function(){
		$('.thanks').toggleClass('active');
		$('.form').toggleClass('active');
	})

	$('.thanks_ok').click(function(){
		$('.thanks').toggleClass('active');
		$('.form').toggleClass('active');
	})

	$('.thanks_cross').click(function(){
		$('.thanks').toggleClass('active');
		$('.form').toggleClass('active');
	})


	// $('#bars').click()
	//$('#menu a').click(function(event){
	//	event.preventDefault();
	//	alert($(this).text('ok'))
	//})
	$('[data-opener]').click(function(){
	if($(this).is('.active_item')){

		$(this).removeClass('active_item');
		$("ul.sub-menu").hide("slow");
	}else{

		$('[data-opener]').removeClass('active_item');
  		$(this).addClass('active_item'); //

  		
  		$("ul.sub-menu").hide("slow");
  		$("ul.sub-menu", $(this)).show("slow") //плавна поява субменю
  		
	}
	
  
	})



 



	//$('[data-target]').removeClass('active2');
	//$('[data-target="'+$(this).data( "opener" )+'"]').addClass('active2');

	



})



