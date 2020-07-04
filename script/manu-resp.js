$('nav ul li.btn span').click(function(){
    $('nav ul div.items').toggleClass("show");
    $('nav ul li.btn span').toggleClass("show");
});
$('.sub-mn').click(function(){
    $('.menu ul div.items.show li>ul').toggleClass("show");
});
/*
$('.sub-mn').click(function(){
    $(this).children('ul#sub-menu').slideToggle();
});*/