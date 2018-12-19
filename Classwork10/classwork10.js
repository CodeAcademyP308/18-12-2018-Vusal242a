$(document).ready(function () {
    $(".diva").click(function(){
        $(this).children().slideToggle();
        $(".diva").removeChildren().slideUp();
    })
});