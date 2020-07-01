$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });  
});


document.querySelector('#promokodeID-reebok').addEventListener(
  'click',
  async (event) => {
    const code = event.target.innerText;
    await navigator.clipboard.writeText(code);
    alert(`Промокод ${code} скопирован!`);
  }
);

document.querySelector('#promokodeID-adidas').addEventListener(
  'click',
  async (event) => {
    const code = event.target.innerText;
    await navigator.clipboard.writeText(code);
    alert(`Промокод ${code} скопирован!`);
  }
);


// For Reebok button
var $ButOpenSiteReebok = $('#Reebok'),
    $DialogPromoReebok = $('#dialog-reebok');

$ButOpenSiteReebok.on('click', function() {
    $DialogPromoReebok[0].showModal();
});

$('#cancelDialogReebok').on('click', function() {
    $DialogPromoReebok[0].close();
});

var transition;
 
$ButOpenSiteReebok.on('click', function() {
    $DialogPromoReebok[0].showModal();
    transition = setTimeout(function() {
        $DialogPromoReebok.addClass('dialog-scale');
    }, 0.5);
});

$('#cancelDialogReebok').on('click', function() {
    $DialogPromoReebok[0].close();
    $DialogPromoReebok.removeClass('dialog-scale');
    clearTimeout(transition);
});



// For Adidas button
var $ButOpenSiteAdidas = $('#Adidas'),
    $DialogPromoAdidas = $('#dialog-adidas');

$ButOpenSiteAdidas.on('click', function() {
    $DialogPromoAdidas[0].showModal();
});

$('#cancelDialogAdidas').on('click', function() {
    $DialogPromoAdidas[0].close();
});

var transition;
 
$ButOpenSiteAdidas.on('click', function() {
    $DialogPromoAdidas[0].showModal();
    transition = setTimeout(function() {
        $DialogPromoAdidas.addClass('dialog-scale');
    }, 0.5);
});

$('#cancelDialogAdidas').on('click', function() {
    $DialogPromoAdidas[0].close();
    $DialogPromoAdidas.removeClass('dialog-scale');
    clearTimeout(transition);
});