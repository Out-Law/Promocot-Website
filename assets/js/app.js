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
    location.href=`https://www.reebok.ru`;
  }
);

document.querySelector('#promokodeID-adidas').addEventListener(
  'click',
  async (event) => {
    const code = event.target.innerText;
    await navigator.clipboard.writeText(code);
    alert(`Промокод ${code} скопирован!`);
    location.href=`https://www.adidas.ru`;
  }
);