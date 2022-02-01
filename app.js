// This is the Nav Icon Showing Mobile Nav

function navMobileBtn() {
    var navMobileBtn = $("#nav-icon");

    navMobileBtn.click(function() {
        navMobileBtn.addClass("open");
        $(".mobile-nav-container").css("left", "0");
    })
}

navMobileBtn()

// This is for the Click outside Mobile Nav

var mobileNavContainer = document.querySelector(".mobile-nav-container");

mobileNavContainer.addEventListener("click", function(event) {
    const navBtn2 = document.querySelector("#nav-icon");

    if (event.target.closest("#mobile-nav-list")) return;
    navBtn2.classList.remove("open");
    $(".mobile-nav-container").css("left", "-100%");
});


function subNavTrigger() {
    $(".mobile-sub-nav-trigger").click(function() {
        $(".mobile-sub-nav-list").slideToggle();
    })
}

subNavTrigger();

function subNavTrigger2() {
    $(".mobile-sub-nav-trigger-2").click(function() {
        $(".mobile-sub-nav-list-2").slideToggle();
    })
}

subNavTrigger2();




// THIS IS THE MODAL SECTION






// This is to Open the Modal One
var modalOneBtn = $(".modal-one-btn");

modalOneBtn.click(function() {
    document.querySelector(".modal-container-one").classList.add("show-modal");
    document.querySelector(".modal-container-one").classList.remove("hide-modal");
});

// This is for the Click outside the Modal Content One

var modalContainer = document.querySelector(".modal-container-one");

modalContainer.addEventListener("click", function(event) {
    if (event.target.closest(".modal-content-one")) return
    modalContainer.classList.remove("show-modal");
    modalContainer.classList.add("hide-modal");
});

// This is for the Exit Btn in the Modal One
$(".modal-exit-btn-one").click(function() {
    modalContainer.classList.remove("show-modal");
    modalContainer.classList.add("hide-modal");
});










// This is to open the Modal Two
var modalTwoBtn = $(".modal-two-btn");

modalTwoBtn.click(function() {
    document.querySelector(".modal-container-two").classList.add("show-modal");
    document.querySelector(".modal-container-two").classList.remove("hide-modal");
});

// This is for the Click outside the Modal Content Two

var modalContainer2 = document.querySelector(".modal-container-two");

modalContainer2.addEventListener("click", function(event) {
    if (event.target.closest(".modal-content-two")) return
    modalContainer2.classList.remove("show-modal");
    modalContainer2.classList.add("hide-modal");
});

// This is for the Exit Btn in the Modal Two
$(".modal-exit-btn-two").click(function() {
    modalContainer2.classList.remove("show-modal");
    modalContainer2.classList.add("hide-modal");
});









// This is to open the Modal Three
var modalThreeBtn = $(".modal-three-btn");

modalThreeBtn.click(function() {
    document.querySelector(".modal-container-three").classList.add("show-modal");
    document.querySelector(".modal-container-three").classList.remove("hide-modal");
});

// This is for the Click outside the Modal Content Three

var modalContainer3 = document.querySelector(".modal-container-three");

modalContainer3.addEventListener("click", function(event) {
    if (event.target.closest(".modal-content-three")) return
    modalContainer3.classList.remove("show-modal");
    modalContainer3.classList.add("hide-modal");
});

// This is for the Exit Btn in the Modal Three
$(".modal-exit-btn-three").click(function() {
    modalContainer3.classList.remove("show-modal");
    modalContainer3.classList.add("hide-modal");
});







// This is to open the Modal Four
var modalFourBtn = $(".modal-four-btn");

modalFourBtn.click(function() {
    document.querySelector(".modal-container-four").classList.add("show-modal");
    document.querySelector(".modal-container-four").classList.remove("hide-modal");
});

// This is for the Click outside the Modal Content Four

var modalContainer4 = document.querySelector(".modal-container-four");

modalContainer4.addEventListener("click", function(event) {
    if (event.target.closest(".modal-content-four")) return
    modalContainer4.classList.remove("show-modal");
    modalContainer4.classList.add("hide-modal");
});

// This is for the Exit Btn in the Modal Four
$(".modal-exit-btn-four").click(function() {
    modalContainer4.classList.remove("show-modal");
    modalContainer4.classList.add("hide-modal");
});