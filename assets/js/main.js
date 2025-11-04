/**
* Template Name: HeroBiz
* Template URL: https://bootstrapmade.com/herobiz-bootstrap-business-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

 
$(document).ready(function() {

  /*--------------------------------------------------------------
  # Carousel Section
  --------------------------------------------------------------*/  
  const $carousel = $('.poledance-carousel');
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const mobileImages = [
      'assets/img/carousel/Copia de S07042024M (22).jpg',
      'assets/img/carousel/cupido.jpg',
      'assets/img/carousel/P23042023 (2).jpg',
      'assets/img/carousel/drama queen.jpg',
      'assets/img/carousel/P23042023 (5).jpg',
      'assets/img/carousel/flexi.jpg',
      'assets/img/carousel/POLEMERITAS09102022 (13).jpg',
      'assets/img/carousel/lavanda 1.jpg',
      'assets/img/carousel/POLEMERITAS09102022 (14).jpg',
      
      'assets/img/carousel/POLEMERITAS09102022 (15).jpg',
      'assets/img/carousel/S07042024M (25).jpg',
      'assets/img/carousel/S07042024M (26).jpg',
      'assets/img/carousel/S07042024M (28).jpg',
      'assets/img/carousel/S07042024M (30).jpg' 
    ];

  const desktopImages = [
    'assets/img/carousel/P23042023 (3).jpg',
    'assets/img/carousel/lady planche.jpg',
    'assets/img/carousel/POLEMERITAS09102022 (16).jpg',
     'assets/img/carousel/machine gun.jpg',
    
  ];

  function loadCarousel() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const imagesToUse = isMobile ? mobileImages : desktopImages;

    // Destroy Slick if it’s already initialized
    if ($carousel.hasClass('slick-initialized')) {
      $carousel.slick('unslick');
    }

    // Clear existing images
    $carousel.empty();

    // Add new images
    imagesToUse.forEach(src => {
      $carousel.append(`<div><img src="${src}" alt=""></div>`);
    });

    // Re-initialize Slick
    $carousel.slick({
      centerMode: true,
      centerPadding: isMobile ? '40px' : '200px',
      slidesToShow: 1,
      infinite: true,
      arrows: !isMobile,
      dots:!isMobile,
      autoplay: true,
      autoplaySpeed: 1000,
      cssEase: 'ease-in-out'
    });
  }


  // Initial load
  loadCarousel();

  // Detect screen size changes
  let resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      loadCarousel();
    }, 100); // small delay to prevent rapid reloads
  });

  /*--------------------------------------------------------------
  # End of Carousel Section
  --------------------------------------------------------------*/ 

  /*--------------------------------------------------------------
  # Calendar TUI section
  --------------------------------------------------------------*/ 

  function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const calendar = new tui.Calendar('#calendar', {
    defaultView: 'week',
    isReadOnly: true,
    week: {
      timeGridLeft: {
        borderRight: 'none',
        backgroundColor: 'rgba(81, 92, 230, 0.05)',
        width: '72px',
      },
      startDayOfWeek: 1,
      showNowIndicator: false,
      hourStart: 10,
      hourEnd: 22,
      eventView: ['time'],
      taskView: false,
      dayNames: isMobile 
        ? ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'] // Short names for mobile
        : ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'], // Full names for desktop
      useDetailPopup: true,
    },
    template: {
      time(event) {
        const { start, end, title } = event;
        return `<span style="color: white;">${formatTime(start)}~${formatTime(end)} ${title}</span>`;
      },
      allday(event) {
        return `<span style="color: gray;">${event.title}</span>`;
      },
      weekDayName(model) {
        return `<span>${model.dayName}</span>`;
      },
    },
    calendars: [
      {
        id: 'pole',
        name: 'Pole del Kas',
        backgroundColor: '#00a9ff',
      },
    ],
  });

  /**
   * Generates weekly recurring events for TUI Calendar
   * Events are fixed to specific days and times each week
   */
  function generateWeeklyPoleSchedule(startDate = new Date()) {
  // Color scheme for different class types
    const colors = {
      BASICO: '#ff00ff',           // Bright magenta
      INICIACION: '#b366ff',        // Purple
      BASICO_INTER: '#c8a0ff',     // Light purple
      INTERMEDIO: '#c8a0ff',       // Light purple
      AVANZADO: '#c8a0ff',         // Light purple
      MULTINIVEL: '#b0b0b0',       // Gray
      INI_BASICO: '#b0b0b0',       // Gray
      KIDS: '#90ee90'              // Light green
    };

    // Get the start of the week (Monday)
    const weekStart = new Date(startDate);
    const day = weekStart.getDay();
    const diff = weekStart.getDate() - day + (day === 0 ? -6 : 1);
    weekStart.setDate(diff);
    weekStart.setHours(0, 0, 0, 0);

    const events = [];
    let eventId = 1;

    // Helper function to create event
    const createEvent = (dayOffset, startHour, startMin, endHour, endMin, title, bgColor) => {
      const start = new Date(weekStart);
      start.setDate(start.getDate() + dayOffset);
      start.setHours(startHour, startMin, 0, 0);

      const end = new Date(start);
      end.setHours(endHour, endMin, 0, 0);

      events.push({
        id: `${eventId++}`,
        calendarId: 'pole',
        title: title,
        category: 'time',
        start: start.toISOString(),
        end: end.toISOString(),
        backgroundColor: bgColor,
        color: '#ffffff',
        borderColor: bgColor
      });
    };

    // MARTES (Tuesday - dayOffset: 1)
    createEvent(1, 10, 0, 11, 0, 'BÁSICO', colors.BASICO);
    createEvent(1, 11, 15, 12, 15, 'BÁSICO-INTER', colors.BASICO_INTER);
    createEvent(1, 16, 0, 17, 0, 'BÁSICO', colors.BASICO);
    createEvent(1, 17, 0, 18, 0, 'BÁSICO', colors.BASICO);
    createEvent(1, 18, 5, 19, 5, 'INICIACIÓN', colors.INICIACION);
    createEvent(1, 19, 5, 20, 20, 'INTERMEDIO', colors.INTERMEDIO);
    createEvent(1, 20, 20, 21, 20, 'MULTINIVEL', colors.MULTINIVEL);

    // MIÉRCOLES (Wednesday - dayOffset: 2)
    createEvent(2, 16, 30, 17, 30, 'BÁSICO-INTER', colors.BASICO_INTER);
    createEvent(2, 17, 30, 18, 30, 'KIDS INICIACIÓN', colors.KIDS);
    createEvent(2, 18, 30, 19, 30, 'BÁSICO', colors.BASICO);
    createEvent(2, 19, 30, 20, 45, 'AVANZADO', colors.AVANZADO);
    createEvent(2, 20, 45, 21, 45, 'MULTINIVEL', colors.MULTINIVEL);

    // JUEVES (Thursday - dayOffset: 3)
    createEvent(3, 10, 0, 11, 0, 'INI-BÁSICO', colors.INI_BASICO);
    createEvent(3, 11, 15, 12, 15, 'INICIACIÓN', colors.INICIACION);
    createEvent(3, 16, 30, 17, 30, 'MULTINIVEL', colors.MULTINIVEL);
    createEvent(3, 17, 30, 18, 30, 'KIDS INICIACIÓN', colors.KIDS);
    createEvent(3, 18, 30, 19, 45, 'INTERMEDIO', colors.INTERMEDIO);
    createEvent(3, 19, 45, 20, 45, 'BÁSICO', colors.BASICO);
    createEvent(3, 20, 45, 21, 45, 'INICIACIÓN', colors.INICIACION);

    // VIERNES (Friday - dayOffset: 4)
    createEvent(4, 16, 0, 17, 0, 'INICIACIÓN', colors.INICIACION);
    createEvent(4, 17, 0, 18, 0, 'INICIACIÓN', colors.INICIACION);
    createEvent(4, 18, 0, 19, 0, 'INICIACIÓN', colors.INICIACION);
    createEvent(4, 19, 45, 20, 45, 'BÁSICO-INTER', colors.BASICO_INTER);

    // SÁBADO (Saturday - dayOffset: 6)
    createEvent(6, 10, 30, 11, 30, 'BÁSICO', colors.BASICO);
    createEvent(6, 11, 45, 12, 45, 'MULTINIVEL', colors.MULTINIVEL);

    // LUNES (Monday - dayOffset: 0)
    createEvent(0, 16, 30, 17, 30, 'INICIACIÓN', colors.INICIACION);
    createEvent(0, 17, 30, 18, 30, 'KIDS INTERMEDIO', colors.KIDS);
    createEvent(0, 18, 30, 19, 45, 'INTERMEDIO', colors.INTERMEDIO);
    createEvent(0, 19, 45, 21, 0, 'INTERMEDIO', colors.INTERMEDIO);
    createEvent(0, 21, 0, 22, 0, 'BÁSICO', colors.BASICO);

    return events;
  }

  const events = generateWeeklyPoleSchedule();
  calendar.createEvents(events);

  /*--------------------------------------------------------------
  # End Calendar TUI section
  --------------------------------------------------------------*/ 


});


})();