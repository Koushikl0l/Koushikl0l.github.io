
'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.gallery-controls li').on('click', function() {
            $('.gallery-controls li').removeClass('active');
            $(this).addClass('active');
        });
        if($('.gallery-filter').length > 0 ) {
            var containerEl = document.querySelector('.gallery-filter');
            var mixer = mixitup(containerEl);
        }

    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Menu Hover
	--------------------*/
    $(".header-section .nav-menu .mainmenu ul li").on('mousehover', function() {
        $(this).addClass('active');
    });
    $(".header-section .nav-menu .mainmenu ul li").on('mouseleave', function() {
        $('.header-section .nav-menu .mainmenu ul li').removeClass('active');
    });

    /*------------------------
		Class Slider
    ----------------------- */
    $(".classes-slider").owlCarousel({
        items: 3,
        dots: true,
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            }
        }
    });

    /*------------------------
		Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    /*------------------
        Magnific Popup
    --------------------*/
    /*
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
*/
  

    /*------------------
        About Counter Up
    --------------------*/
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
            $(this).text(Math.ceil(now));
            }
        });
    });

    /*------------------
       Schedule Filter
    --------------------*/
    $('.nav-controls ul li').on('click', function() {
        var tsfilter = $(this).data('tsfilter');
        $('.nav-controls ul li').removeClass('active');
        $(this).addClass('active');
        
        if(tsfilter == 'all') {
            $('.schedule-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.schedule-table').addClass('filtering');
        }
        $('.ts-item').each(function(){
            $(this).removeClass('show');
            if($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

    




// SHUSTHO SLIDER - 100% WORKING 2025
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".shustho-card");
    const prevBtn = document.getElementById("slider-prev");
    const nextBtn = document.getElementById("slider-next");
    let current = 0;

    function showCard(n) {
        cards.forEach(card => card.style.zIndex = "1");
        cards[current].classList.remove("active");
        current = (n + cards.length) % cards.length;
        cards[current].classList.add("active");
        cards[current].style.zIndex = "10";
    }

    prevBtn.addEventListener("click", () => showCard(current - 1));
    nextBtn.addEventListener("click", () => showCard(current + 1));

    document.addEventListener("keydown", e => {
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") showCard(current - 1);
        if (e.key === "ArrowDown" || e.key === "ArrowRight") showCard(current + 1);
    });

    let startY = 0;
    document.querySelector(".slider-container").addEventListener("touchstart", e => startY = e.touches[0].clientY);
    document.querySelector(".slider-container").addEventListener("touchend", e => {
        const diff = startY - e.changedTouches[0].clientY;
        if (Math.abs(diff) > 50) diff > 0 ? showCard(current + 1) : showCard(current - 1);
    });
});



/*------------------------
    Blog Slider
-----------------------*/
$(".blog-slider").owlCarousel({
    items: 3,
    dots: false,  // No dots, only arrows
    autoplay: true,
    loop: true,
    smartSpeed: 1200,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1,
            nav: true  // Arrows always visible
        },
        768: {
            items: 2,
            nav: true
        },
        992: {
            items: 3,
            nav: true
        }
    }
});

    



/*------------------------
    Trainer Slider (Shop Slider)
-----------------------*/
// Shop With SHUSTHO Slider
// Shop With SHUSTHO – Equal Height Cards Slider
$(".shustho-shop-slider").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
    }
});



/* ========================================================= */
/*      CONTACT FORM WITH EMAILJS – BULLETPROOF 2025 FIX    */
/* ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    // YOUR EMAILJS CREDENTIALS (keep as-is)
    const PUBLIC_KEY  = "Lgtf2hkt1iy-nkWqO";
    const SERVICE_ID  = "service_swiel8b";
    const TEMPLATE_ID = "template_541kvkl";

    emailjs.init(PUBLIC_KEY);

    const form   = document.getElementById("shusthoContactForm");
    const btn    = document.getElementById("shusthoSubmitBtn");
    const status = document.getElementById("shusthoStatus");

    if (!form || !btn || !status) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        btn.disabled = true;
        btn.textContent = "Sending...";
        status.innerHTML = "";

        const formData = {
            from_name:     document.getElementById("shusthoFullName").value.trim(),
            company_name:  document.getElementById("shusthoCompanyName").value.trim(),
            company_email: document.getElementById("shusthoCompanyEmail").value.trim(),
            mobile:        document.getElementById("shusthoCountryCode").value + " " +
                           document.getElementById("shusthoMobile").value.trim(),
            message:       document.getElementById("shusthoMessage").value.trim()
        };

        // Light validation
        if (!formData.from_name || !formData.company_name || !formData.company_email || 
            !formData.mobile.includes(" ") || !formData.message) {
            status.innerHTML = '<div class="shustho-error">Please fill all fields correctly.</div>';
            resetBtn();
            return;
        }

        // OFFICIAL EMAILJS V4 HANDLING – .then(success, error) prevents false errors
        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData).then(
            function(response) {
                // TRUE SUCCESS – only runs on HTTP 200/OK
                console.log("SUCCESS!", response.status, response.text);
                status.innerHTML = '<div class="shustho-success">Thank you! Your message has been sent successfully. We will contact you soon.</div>';
                form.reset();
                resetBtn();
            },
            function(error) {
                // TRUE FAILURE only
                console.error("REAL EmailJS Error:", error);
                status.innerHTML = '<div class="shustho-error">Failed to send. Please email us directly at mukit@shustho.life</div>';
                resetBtn();
            }
        );

        function resetBtn() {
            btn.disabled = false;
            btn.textContent = "Send Enquiry";
        }
    });
});


})(jQuery);



