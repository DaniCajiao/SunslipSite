$(document).ready(function($) {
    $(".scroll").click(function(event) {
        console.log(this.hash, $(this.hash));
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500)
    });
});
