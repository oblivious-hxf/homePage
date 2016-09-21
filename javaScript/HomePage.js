$(document).ready(function () { 

			var skinCookie=getCookie("skin");
			var aColorCookie=getCookie("aColor");
			var fontCookie=getCookie("font");
			var homepageCookie=getCookie("homepage");
			var widthCookie=getCookie("width");
			if (homepageCookie=="") {
				homepageCookie="https://www.baidu.com/";
			}
			setCookie("skin",skinCookie,168);
        	setCookie("aColor",aColorCookie,168);
        	setCookie("font",fontCookie,168);
        	setCookie("homepage",homepageCookie,168);
        	setCookie("width",widthCookie,168);


			$(".public-header").css("background",skinCookie);
        	$(".slide-nav").css("background",skinCookie);
        	$(".sub-nav").css("background",skinCookie);
        	$("a").css("color",aColorCookie);
        	$("body").css("font-family",fontCookie);
        	$("#engine").attr("src",homepageCookie);
        	

        	var slideNavWidth=$(".slide-nav").width();
        	var isDefaultWidth="";
        	


			var engineHeight=$(window).height()-34;
        	var engineWidth=$(window).width()-slideNavWidth;
        	$("#engine").height(engineHeight);
        	$("#engine").width(engineWidth);




        	if (widthCookie=="") {
        		isDefaultWidth="default-width";
        	}
        	else if(widthCookie=="change-width"){
        		isDefaultWidth=widthCookie;
        		$(".slide-nav-items a").css("display","none");
        		$(".slide-nav").width(60);
        		slideNavWidth=$(".slide-nav").width();
        		engineWidth=$(window).width()-slideNavWidth;
        		$("#engine").width(engineWidth);
        		$("#engine").height(engineHeight);
        		$("#engine").css("margin-left","-90px");
        		$(".slide-nav-items").css("padding-left","12px");
        	}



            $('li.mainlevel').mousemove(function () {
                $(this).find('ul').slideDown("1000"); //you can give it a speed
            });
            $('li.mainlevel').mouseleave(function () {
                $(this).find('ul').slideUp("fast");
            });



            $(".slide-nav-items").click(function(){
            	
            	var aimURL="";
            	$(".slide-nav-items").css("background","");
            	$(this).css("background","#32CD32");
            	if($(this).children("a").attr("data")){
            	aimURL=$(this).children("a").attr("data");
            	$("#engine").attr("src",aimURL);
            }
            else{
            	aimURL=$(this).children("a").attr("href");
            	window.open(aimURL);
            }
          

            });



            $(".slide-nav-items").dblclick(function(){
            	
            	var homeURL="";
            	if($(this).children("a").attr("data")){
            	homeURL=$(this).children("a").attr("data");
            	setCookie("homepage",homeURL,168);
            	
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


        	$("[href$='setting']").click(function(){
        		var setting=$(this).attr("href");
        		switch(setting){
        			case "#homepage-setting":
        			break;

        			case "#width-setting":
        			if (isDefaultWidth=="default-width") {
        				$(".slide-nav-items a").css("display","none");
        				$(".slide-nav").width(60);
        				slideNavWidth=$(".slide-nav").width();
        				engineWidth=$(window).width()-slideNavWidth;
        				$("#engine").width(engineWidth);
        				$("#engine").height(engineHeight);
        				$("#engine").css("margin-left","-90px");
        				$(".slide-nav-items").css("padding-left","12px");
        				isDefaultWidth="change-width";
        				setCookie("width",isDefaultWidth,168);
        			}
        			else{
        				$(".slide-nav-items a").css("display","");
        				$(".slide-nav").width(150);
        				slideNavWidth=$(".slide-nav").width();
        				engineWidth=$(window).width()-slideNavWidth;
        				$("#engine").width(engineWidth);
        				$("#engine").height(engineHeight);
        				$("#engine").css("margin-left","");
        				$(".slide-nav-items").css("padding-left","20px");
        				isDefaultWidth="default-width";
        				setCookie("width",isDefaultWidth,168);

        			}
        			break;

        			case "#list-sort-setting":
        			break;
        		}
        	});
       

        });


