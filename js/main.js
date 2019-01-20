$(document).ready(fuction() {
    $("menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    })
});

$(window).on("scroll", Function() {
    if ($(window).scrollTop() {
            $("nav").addClass('black');
}   else{
    $("nav").removeClass("black");
}
})
