$(document).ready(function () {

			var skinCookie=getCookie("skin");
			var aColorCookie=getCookie("aColor");
			var fontCookie=getCookie("font");

			$(".public-header").css("background",skinCookie);
        	$(".slide-nav").css("background",skinCookie);
        	$(".sub-nav").css("background",skinCookie);
        	$("a").css("color",aColorCookie);
        	$("body").css("font-family",fontCookie);


			var engineHeight=$(window).height()-34;
        	var engineWidth=$(window).width()-150;
        	$("#engine").height(engineHeight);
        	$("#engine").width(engineWidth);

            $('li.mainlevel').mousemove(function () {
                $(this).find('ul').slideDown("1000"); //you can give it a speed
            });
            $('li.mainlevel').mouseleave(function () {
                $(this).find('ul').slideUp("fast");
            });

            $("li.slide-nav-items a").click(function(){
            	if($(this).attr("data")){
            	var aimURL=$(this).attr("data");
            	$("#engine").attr("src",aimURL);
            }
            else{
            	$(this).attr('target', '_blank');
            }

            });

        	$("[href$='skin']").click(function(){
        		var skin=$(this).attr("href");
        		switch(skin){
        			case "#default-skin":
        			$(".public-header").css("background","#e5eecc");
        			$(".slide-nav").css("background","#e5eecc");
        			$(".sub-nav").css("background","#e5eecc");
        			$("a").css("color","#000");
        			setCookie("skin","#e5eecc",168);
        			setCookie("aColor","#000",168);
        			break;

        			case "#wood-skin":
        			$(".public-header").css("background","url(image/wood-skin.jpg)");
        			$(".slide-nav").css("background","url(image/wood-skin.jpg)");
        			$(".sub-nav").css("background","url(image/wood-skin.jpg)");
        			$("a").css("color","#000");
        			setCookie("skin","url(image/wood-skin.jpg)",168);
        			setCookie("aColor","#000",168);
        			break;

        			case "#blue-skin":
        			$(".public-header").css("background","url(image/blue-skin.jpg)");
        			$(".slide-nav").css("background","url(image/blue-skin.jpg)");
        			$(".sub-nav").css("background","url(image/blue-skin.jpg)");
        			$("a").css("color","#000");
        			setCookie("skin","url(image/blue-skin.jpg)",168);
        			setCookie("aColor","#000",168);
        			break;

        			case "#black-skin":
        			$(".public-header").css("background","url(image/black-skin.jpg)");
        			$(".slide-nav").css("background","url(image/black-skin.jpg)");
        			$(".sub-nav").css("background","url(image/black-skin.jpg)");
        			$("a").css("color","#e8e8e8");
        			setCookie("skin","url(image/black-skin.jpg)",168);
        			setCookie("aColor","#e8e8e8",168);
        			break;

        			case "#bi-color-skin":
        			$(".public-header").css("background","url(image/bi-color.jpg)");
        			$(".slide-nav").css("background","url(image/bi-color.jpg)");
        			$(".sub-nav").css("background","url(image/bi-color.jpg)");
        			$("a").css("color","#000");
        			setCookie("skin","url(image/bi-color.jpg)",168);
        			setCookie("aColor","#000",168);
        			break;

        			case "#wallpaper-skin":
        			$(".public-header").css("background","url(image/wallpaper-skin.jpg)");
        			$(".slide-nav").css("background","url(image/wallpaper-skin.jpg)");
        			$(".sub-nav").css("background","url(image/wallpaper-skin.jpg)");
        			$("a").css("color","#000");
        			setCookie("skin","url(image/wallpaper-skin.jpg)",168);
        			setCookie("aColor","#000",168);
        			break;

        		}
        	});


        	$("[href$='font']").click(function(){
        		var font=$(this).attr("href");
        		switch(font){
        			case "#default-font":
        			$("body").css("font-family","");
        			setCookie("font","",168);
        			break;

        			case "#traditional-font":
        			$("body").css("font-family","Cursive");
        			setCookie("font","Cursive",168);
        			break;

        			case "#regular-script-font":
        			$("body").css("font-family","STKaiti,Monospace");
        			setCookie("font","STKaiti,Monospace",168);
        			break;
        		}
        	});
       

        });


