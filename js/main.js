
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

function pop_close() {
  $("#layer_pop").hide(); // 반대는 당연히 show();

  
}
window.onload = function(){
  $("#layer_pop").show();
  
  }
function getCookie( name ){
  var nameOfCookie = name + "=";
  var x = 0;
  while ( x <= document.cookie.length ) {
  var y = (x+nameOfCookie.length);
  while ( x <= document.cookie.length )  
   {  
       var y = (x+nameOfCookie.length);  
       if ( document.cookie.substring( x, y ) == nameOfCookie ) {  
           if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )  
               endOfCookie = document.cookie.length;  
           return unescape( document.cookie.substring( y, endOfCookie ) );  
       }  
       x = document.cookie.indexOf( " ", x ) + 1;  
       if ( x == 0 )  
           break;  
   }  
   return ""; 

}
    
   
    
   
function setCookie(name, value, expiredays)  {
  var today = new Date();
  today.setTime(today.getTime() + (60*60*1000*expirehours));
  document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";"
  // if (domain) {
  //   document.cookie += "domain=" + domain + ";";
  // }
}
function setCookieAt00( name, value, expiredays ) {   
  var todayDate = new Date();   
  todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);  
  if ( todayDate > new Date() )  
  {  
  expiredays = expiredays - 1;  
  }  
  todayDate.setDate( todayDate.getDate() + expiredays );   
   document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"   
} 

function pop_close() {
  if($("#today_no").attr("checked")){
    setCookie("layer_pop", "done" , 24);
  }
    $("#layer_pop").hide();    
  }
  window.onload = function(){
    if(getCookie('layer_pop') != 'done'){ 
    
    $("#layer_pop").show();
    
  }
    
}
function pop_open(){
  if(getCookie('layer_pop') != 'done'){
    var winwidth=document.all?document.body.clientWidth:window.innerWidth;  
        
    var left = winwidth/2 - 320;// - (380/2 + 100);
    if(left < 190) left = 190;
        
    var top = 90;//windowHeight/2;
    $("div#layer_pop").css({"left":left+"px"});
    $("div#layer_pop").css({"top":top+"px"});
    $("div#layer_pop").show("fast");
  }
}
      
window.onload = pop_open;
window.onresize = pop_open;