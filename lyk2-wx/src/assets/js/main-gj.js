
//快速投资服务协议按钮
$(".agreeBtn").on('touchstart',function(e){
    var obj_M = $(this).attr("for");
	if($(this).hasClass("checked-act") && $(".px-gj").hasClass("px-act-gj")){
		$(this).removeClass("checked-act");
			$("#"+obj_M).val(false);
		$(".px-gj").removeClass("px-act-gj");
	}else{
		$(this).addClass("checked-act");
			$("#"+obj_M).val(true);
        $(".px-gj").addClass("px-act-gj");
	}
    e.preventDefault();
  });

$(".px-gj").on('touchstart',function(){
	if($(this).hasClass("px-act-gj")){
		$(this).removeClass("px-act-gj");
	}else{
		$(this).addClass("px-act-gj");
	}
   });





