$(document).ready(function(){
    if($(document).width() >= 1025){
        var window = $(document).height();
        $("header").css({
            transition: 'all ease-in 0.01s',
            "height" : window
        });

        $(document).scroll(function(){
            if ( $(this).scrollTop() > 5 ){
                $("header").css({
                    transition: 'all ease-in 0.5s',
                    "height" : "628px"
                });
            }
            if ( $(this).scrollTop() < 5 && $(this).scrollTop() == 0){
                var window = $(document).height();
                $("header").css({
                    transition: 'all ease-in 0.5s',
                    "height" : window
                });
            }
        });

        $('.downArrow').click(function(){
            var a = 250;
            $('html, body').animate({
                scrollTop: a
            }, 1000);
        });
    }
});
