// $(document).ready(function(){
//     $('#in_fo', '#i_nfo').css('display', 'none')


//     $('.button > ul > li ').on('click', function(){
//         $(cat_name).css('color', 'black')
//         var cat_name = $(this).attr('class');
//         var i = $(this).index()
//         console.log(cat_name, $(this).index())
//         $('.info').css('display', 'none')

//         $('.info').eq(i).fadeIn(0)

//         return false;
//     })
// });

$(function(){
    $('.info .none').css('display', 'none')

    $('.button ul li a').on('click', function(){
         var cat_name = $(this).attr('href');
         console.log(cat_name)
 
         if(cat_name !== '.info'){
             // 일반 카테고리
             $('.info table').fadeOut(0);
             $(cat_name).fadeIn(0);
         }
         return false;
    });
    $('.button > ul > li a').click(function(){
     // 클래스 제거(상태 초기화)
     $('.button > ul > li a').removeClass('selected');
 
     // 클래스 추가
     $(this).addClass('selected');
 
     // a태그 하이퍼링크 기본 이벤트 해제
     return false;
     });
 });