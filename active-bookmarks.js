$(document).ready(function()	{
	

		var $parent = $('li').parent();
	
	$('.navitext1').click(function()	{
		
		$("li.pdstr3").css({'margin-left':'-100%'});
		$("li.pdstr1").css({'margin-left':'0%'});
		$("li.pdstr2").css({'margin-left':'100%'});
		$('.pdstr1').appendTo($('ul.list'));
		$('.pdstr2').prependTo($('ul.list'));

		//$jeden.insertAfter($trzy);
		
		$('#bookmarks').animate(
		{	width: "100%",
			height: "100%",
		}, 1000	);
		});
				
	$('.navitext2').click(function()	{
		$("li.pdstr1").css({'margin-left':'-100%'});
		$("li.pdstr2").css({'margin-left':'0%'});
		$("li.pdstr3").css({'margin-left':'100%'});
		$('.pdstr2').appendTo($('ul.list'));
		$('.pdstr3').prependTo($('ul.list'));
		
		$('#bookmarks').animate(
		{	width: "100%",
			height: "100%",
		}, 1000	);
		
			
		
				});
				
				
	$('.navitext3').click(function()	{
		
		$("li.pdstr1").css({'margin-left':'-100%'});
		$("li.pdstr3").css({'margin-left':'0%'});
		$("li.pdstr2").css({'margin-left':'100%'});
		$('.pdstr3').appendTo($('ul.list'));
		$('.pdstr1').prependTo($('ul.list'));
		$('#bookmarks').animate(
		{	width: "100%",
			height: "100%",
		}, 1000	);
		
				});
		
			
			$('.navigation2').click(function()	{
		$('#bookmarks').animate(
		{	width: "100%",
			height: "0%",
		}, 1000	);
		
			});
			
			$('.navigation3').click(function()	{
				
					
					$("li:eq(0)").before($("li:eq(1)")).css({'margin-left':'100%'}).animate({'margin-left': '0%'},500);
					$("li:eq(2)").css({'margin-left':'0%'}).animate({'margin-left': '-100%'},500);
					$("li:eq(1)").before($("li:eq(2)"));
					
					
					
					
					
					

				
			});
			
			$('.navigation1').click(function()	{
				
				
				$("li:eq(0)").before($("li:eq(2)")).css({'margin-left':'100%'});
				$("li:eq(0)").css({'margin-left':'0%'}).animate({'margin-left': '100%'},500);
				$("li:eq(2)").before($("li:eq(1)")).css({'margin-left':'-100%'}).animate({'margin-left': '0%'},500);
					

				
			});
				
		
                

	
          

});
