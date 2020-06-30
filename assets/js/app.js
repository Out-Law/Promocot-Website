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


var $accountDelete = $('#delete-account'),
    $accountDeleteDialog = $('#confirm-delete');
 
      $accountDelete.on('click', function() {
        $accountDeleteDialog[0].showModal();
      });
 
      $('#cancel').on('click', function() {
        $accountDeleteDialog[0].close();
      });


var transition;
 
$accountDelete.on('click', function() {
    $accountDeleteDialog[0].showModal();
    transition = setTimeout(function() {
        $accountDeleteDialog.addClass('dialog-scale');
    }, 0.5);
});


$('#cancel').on('click', function() {
    $accountDeleteDialog[0].close();
    $accountDeleteDialog.removeClass('dialog-scale');
    clearTimeout(transition);
});