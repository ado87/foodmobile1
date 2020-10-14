
		
$(function(){
	// 이미지 번호 변수
	var img_num = 0;			// 이미지 번호 변수
	var duration = 8000;	// 재생시간 변수
			
	// 트랜지션 효과 설정
	$('.slider > img').css('transition', '1s');
			
	// 인디케이터 초기화
	$('.indicator a').removeClass('on');
			
	// 현재 이미지 번호의 인디케이터를 켠다.
	$('.indicator a').eq(img_num).addClass('on');
			
		setInterval(function(){
				
			// 이미지 뷰 초기화
			$('.slider > img').css('opacity', 0);

			$('.slider > img')
				.eq(img_num)	// 이미지 순서
				.css('opacity', 1);	// 스타일
				
			// 이미지가 마지막이면 처음으로
			if(img_num < 3){
				img_num++;
				console.log(img_num);					
			} else{
				// 처음 이미지로
				img_num = 0;
			}
	
			// 인디케이터 업데이트
			$('.indicator a').removeClass('on');
			$('.indicator a').eq(img_num).addClass('on');		

		}, duration);			
});

$(document).ready( function(){

	$(window).scroll(function(){
		if($(this).scrollTop() > 900) {
			$('.link').fadeIn();
		} else {
			$('.link').fadeOut();
		}
	});
		 
	$('.link').click(function() {
		$('html, body').animate( {scrollTop : 0 }, 600);
		return false;
	}); 

});

 	var intv;
    var current = 0;
    var sIdx = 0;
    var sCnt =  4;
    
 
    function startTopSlider() {
        intv = setInterval(function () {
            $("#ul_btns").find("a").eq(current++ % sCnt).click();
        }, 5000);
    }
 
    function setBnr(idx, bnr, allTab, addCls) {
        $(bnr).css("visibility", "hidden")
              .eq(idx).css("visibility", "visible");
        $(allTab).removeClass(addCls);
        $(allTab).eq(idx).addClass(addCls);
    }
 
    $(document).ready(function () {
        
        //set init
        $("#top_0").css("visibility", "visible");
        $("#btn_0").addClass("on");
        startTopSlider();
        
        
        $("#ul_btns").find("a").click(function(){
            var idx = $(this).attr("id").split("_")[1];
            setBnr(idx, "#TopSlider > div" , "#ul_btns > li a" , "on" );
            return false;
        });
 
    
    });


		
	