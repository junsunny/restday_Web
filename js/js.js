$(document).ready(function(){
    $('.tableware').hide();
    $('.living').hide();
    $('.furniture').hide();
    $('#section3 #choice ul li:first-child a').click(function(){
    $('#section3 #choice ul li:first-child a').css({'color':'#505946','font-weight':'600'});
    $('#section3 #choice ul li:nth-child(2) a').css('color','#dddddd');
    $('#section3 #choice ul li:nth-child(3) a').css('color','#dddddd');
    $('#section3 #choice ul li:nth-child(4) a').css('color','#dddddd');
    $('.tableware').hide();
    $('.living').hide();
    $('.furniture').hide();
    $('.light').show();
    return false;
    });

    $('#section3 #choice ul li:nth-child(2) a').click(function(){
        $('#section3 #choice ul li:nth-child(2) a').css({'color':'#505946','font-weight':'600'});
        $('#section3 #choice ul li:nth-child(1) a').css('color','#dddddd');
        $('#section3 #choice ul li:nth-child(3) a').css('color','#dddddd');
        $('#section3 #choice ul li:nth-child(4) a').css('color','#dddddd');
        $('.furniture').show();
        $('.tableware').hide();
        $('.living').hide();
        $('.light').hide();
        return false;
        });

        $('#section3 #choice ul li:nth-child(3) a').click(function(){
            $('#section3 #choice ul li:nth-child(3) a').css({'color':'#505946','font-weight':'600'});
            $('#section3 #choice ul li:nth-child(1) a').css('color','#dddddd');
            $('#section3 #choice ul li:nth-child(2) a').css('color','#dddddd');
            $('#section3 #choice ul li:nth-child(4) a').css('color','#dddddd');
            $('.living').show();
            $('.tableware').hide();
            $('.furniture').hide();
            $('.light').hide();
            return false;
            });
        $('#section3 #choice ul li:nth-child(4) a').click(function(){
            $('#section3 #choice ul li:nth-child(4) a').css({'color':'#505946','font-weight':'600'});
            $('#section3 #choice ul li:nth-child(1) a').css('color','#dddddd');
            $('#section3 #choice ul li:nth-child(2) a').css('color','#dddddd');
            $('#section3 #choice ul li:nth-child(3) a').css('color','#dddddd');
            $('.tableware').show();
            $('.living').hide();
            $('.furniture').hide();
            $('.light').hide();
            return false;
            });

        /*리뷰 이미지 클릭*/
        $('.popup-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
});
