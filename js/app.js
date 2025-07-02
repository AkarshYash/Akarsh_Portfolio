$(document).ready(function(){
    // Initialize slick slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });

    // Mobile navigation toggle (vanilla JS version)
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open');  
    });

    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });

    // Close mobile nav when clicking on links
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('open');
        });
    });

    // Smooth scrolling for all links
    $('a[href*="#"]').on('click', function(e) {
        // Close mobile nav if open
        mobileNav.classList.remove('open');
        
        // Skip smooth scrolling for non-section links
        if ($($(this).attr('href')).length === 0) {
            return;
        }
        
        e.preventDefault();
        
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );
    });
    
    // Add active class to current section in navigation
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        
        $('section').each(function() {
            var currentSection = $(this);
            var sectionId = currentSection.attr('id');
            var sectionOffset = currentSection.offset().top - 100;
            var sectionHeight = currentSection.outerHeight();
            
            if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
                $('nav a').removeClass('active');
                $('nav a[href="#' + sectionId + '"]').addClass('active');
                
                // Also update mobile nav if visible
                $('.mobile-nav a').removeClass('active');
                $('.mobile-nav a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });
    
    // Initialize scrollspy
    $(window).trigger('scroll');
});