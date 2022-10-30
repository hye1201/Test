$(function () {


    // pc/mobile home, login, join 텍스트 변경
    let win = $(window).width();
    if(win >= 1024){
        $('.sideMenu li:nth-child(2) a').text('Login');
        $('.sideMenu li:nth-child(3) a').text('Join');

    } else{
        $('.sideMenu li:nth-child(2) a').text('로그인');
        $('.sideMenu li:nth-child(3) a').text('회원가입');
    }

    // pc/mobile home, login, join 굵기 변경
    $('.sideMenu li a').click(function(){
        $('.sideMenu li a').css('font-weight','normal');
        $(this).css('font-weight','bold');
    });


    //pc GNB

    $('#gnb>ul>li > a').mouseenter(function () {

        let win = $(window).width();
        if (win >= 1024) {

            $('.submenu').show();
            $('#gnb>ul>li>a').removeClass();
            $(this).addClass('active');
            $('.submenu').removeClass('back');
            $(this).next().addClass('back');

        }

        else {

            $('#gnb>ul>li>a').removeClass();
            $('.submenu').removeClass('back');


        }


    });

    $('#gnb>ul').mouseleave(function () {

        let win = $(window).width();
        if (win >= 1024) {
            $('#gnb>ul>li>a').removeClass();
            $('.submenu').hide();
        }

    });


    $('.submenu').mouseenter(function () {
        let win = $(window).width();
        if (win >= 1024) {

            $('#gnb>ul>li>a').removeClass();
            $(this).prev().addClass('active');
            $('.submenu').removeClass('back');
            $(this).addClass('back');

        }
    });


    //mobile GNB

    $('#gnb>ul>li').click(function () {
        let win=$(window).width();
        if(win<1024){
            if($(this).find('.submenu').is(":visible")){
                $(this).find('.submenu').stop().slideUp(500);
                $(this).removeClass('active')
               

            }
            else {
                $(' #gnb .submenu').stop().slideUp(500);
                $(this).find('.submenu').stop().slideDown(500);
                $('#gnb>ul>li').removeClass('active')
                $(this).addClass('active')
            }   
        }


    });

    //mobile GNB modal 

    function modalOn() {
        $('#modal_back').addClass('back_on');
       
    }

    function modalOff() {
        $('#modal_back').removeClass('back_on');
       
    }


    //mobile hamburger

    $('.hamburger').click(function(){

        $('#header .gnb_container').addClass('active');
        $('body').addClass('body_lock');
        modalOn();
        
        
    });


    $('.close').click(function(){

        $('#header .gnb_container').removeClass('active')
        $('body').removeClass('body_lock');
        modalOff();

    });



    //배너 슬라이드

    //main1 배너

    $('#main1_intro ul').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        auto: true,
        pause: 3000,
        nextText: '',
        prevText: '',
        autoHover: true,
        autoDelay: 750,
        pager: true,
        pagerCustom: '#main1_intro_pager',
        slideMargin:0

    });

    //main2 이벤트 배너

    $('#main2_event ul').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        auto: true,
        pause: 3000,

        autoHover: true,
        autoDelay: 750,
        pager: false,
        nextSelector: '#event_next',
        prevSelector: '#event_prev',
        nextText: '<img src="img/main2/main2_event_next.png">',
        prevText: '<img src="img/main2/main2_event_prev.png">'


    });


    // 최하단 bannergroup slide
    $('#bangroup ul').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('.bangroup_prev'),
        nextArrow: $('.bangroup_next')


    });




        //resize시 조정
        window.addEventListener('resize', function(){

            let win = $(window).width();
  
    
            if(win >= 1024){
                $('.sideMenu li:nth-child(2) a').text('Login');
                $('.sideMenu li:nth-child(3) a').text('Join');
                $('#header .gnb_container').css('margin','0 auto');
                    modalOff();
                $('.submenu').stop().slideUp(0);
    
                
    
            } else{
                $('.sideMenu li:nth-child(2) a').text('로그인');
                $('.sideMenu li:nth-child(3) a').text('회원가입');
                modalOn();
                $('#gnb>ul>li>a').removeClass();
            }
    
        });
    
});