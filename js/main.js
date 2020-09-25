$(function(){
    $('.popup > table > tbody tr td a b font').on('click', function(){
        var name = $(this).attr('font');
        console.log(name)

        if(name !== '#') {
            $('.popup').fadeOut(200);
        }
        return false;
    })
})
$(function(){
    $('.popup2 > table > tbody tr td a b font').on('click', function(){
        var name = $(this).attr('font');
        console.log(name)

        if(name !== '#') {
            $('.popup2').fadeOut(200);
        }
        return false;
    })
})
$(function(){
    $('.popup3 > table > tbody tr td a b font').on('click', function(){
        var name = $(this).attr('font');
        console.log(name)

        if(name !== '#') {
            $('.popup3').fadeOut(200);
        }
        return false;
    })
})
// function setcookie( name, value, expirehours ) {
//     var todayDate = new Date();
//     todayDate.setHours( todayDate.getHours() + expirehours );
//     document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
//     }
    
//     function closeWin() {
//     if ( document.notice_form.chkbox.checked ){
//     setcookie( "maindiv", "done" , 24 );
//     }
//     document.all['popup'].style.display = "none";
//     }
    
    