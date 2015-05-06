$(document).ready(function(){
    $('.box').click(function(){
        $('.box').effect('slide');
    });
    $('.box1').click(function(){
        $('.box1').effect('bounce', {times:3}, 500);
    });
    $('.box2').draggable();
});

