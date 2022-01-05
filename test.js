$(document).ready(function () {

    $("button").click(function () {
        $("p").hide();
    });


    $("button").mouseenter(function () {
        $("p").css("color", "#00F");
    });


    $("button").mouseleave(function () {
        $("p").css("color", "#F00");
    });

    $("button").dblclick(function () {
        $("h1").toggle();
    });


    $(".open").click(function () {
        $(".box").slidDown();
    });

});