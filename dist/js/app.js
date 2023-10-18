$(document).ready(function () {

	// ---------- Добавление иконки для раскрытия sub-menu -------------
	var liElements = document.getElementsByTagName('.nav-menu li');
	for (var i = 0; i < liElements.length; i++) {
		var li = liElements[i];
		var submenu = li.getElementsByClassName('submenu')[0];
		if (submenu) {
			var icon = document.createElement('i');
			icon.className = 'icomoon icon-chevron';
			li.insertBefore(icon, submenu);
		}
	}
  // -------------------- РАСКРЫТИЕ SUB-MENU -------------------------
  const accordeonMenuItems = document.querySelectorAll('.nav-menu li.menu-item-has-children')
  accordeonMenuItems.forEach((item) => {
    const accordeonMenuButton = item.querySelector('.nav-menu li.menu-item-has-children i')
    accordeonMenuButton.addEventListener('click', () => {
      const openMenuItem = document.querySelector('.open')
      toggleMenuItem(item)
      if (openMenuItem && openMenuItem !== item) {
        toggleMenuItem(openMenuItem)
      }
    })
  })
  const toggleMenuItem = (item) => {
    const accordeonMenuContent = item.querySelector('.nav-menu li.menu-item-has-children .sub-menu')
    if (item.classList.contains('open')) {
      accordeonMenuContent.removeAttribute('style')
      item.classList.remove('open')
    } else {
      accordeonMenuContent.style.height = accordeonMenuContent.scrollHeight + 'px'
      item.classList.add('open')
    }
  }
	// -------------------- BURGER-MENU -------------------------
	const toggleMenu = document.getElementById('toggleMenu');
	const toggleMenuIcon = toggleMenu.querySelector('i');
	const navMenu = document.getElementById('navMenu');
	function toggleClasses() {
		if (toggleMenuIcon.classList.contains('icon-remove')) {
		toggleMenuIcon.classList.remove('icon-remove');
		navMenu.classList.remove('show');
		document.querySelector('body').classList.remove('dis-scroll');
		} else {
		toggleMenuIcon.classList.add('icon-remove');
		navMenu.classList.add('show');
		document.querySelector('body').classList.add('dis-scroll');
		}
	}
	toggleMenu.addEventListener('click', toggleClasses);


	// -------------------- CATALOG FILTER -------------------------
		const catSidebar = document.getElementById('catSidebar');
		const catSidebarToggle = document.getElementById('catSidebarToggle');
		const catSidebarClose = document.getElementById('catSidebarClose');
		if (catSidebarToggle) {
			catSidebarToggle.addEventListener('click', () => {
				catSidebar.classList.add('active');
				document.querySelector('body').classList.add('dis-scroll');
			})
		}
		if (catSidebarClose) {
			catSidebarClose.addEventListener('click', () => {
				catSidebar.classList.remove('active');
				document.querySelector('body').classList.remove('dis-scroll');
			})
		}
	


	// Search (Header)
	let searchHiddenInput = document.querySelector("#searchBarLabel .search-input");
	let searchToggleBtn = document.querySelector("#searchToggleBtn");
	let searchBarLabel = document.querySelector("#searchBarLabel");
	searchToggleBtn.addEventListener("click", (e) => {
		if (!searchBarLabel.classList.contains('active')) {
			e.preventDefault();
		}
		searchBarLabel.classList.toggle("active");
		searchHiddenInput.focus();
	});
	window.onscroll = () => {
		searchBarLabel.classList.remove("active");
	}
	document.addEventListener("click", (event) => {
		if (!searchBarLabel.contains(event.target)) {
			searchBarLabel.classList.remove("active");
		}
	});


	// -------------------- Анимация появления ---------------------------
	function onEntry(entry) {
		entry.forEach(change => {
			if (change.isIntersecting) {
			change.target.classList.add('element-show');
			}
		});
	}
	let options = {
		threshold: [0.5] };
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll('.element-animation');

	for (let elm of elements) {
		observer.observe(elm);
	}

	// --------------------- History Tabs ---------------------------
	var historyTab = $('#historyTabs .tabs-items > div');
	historyTab.hide().filter(':first').show();
	// Клики по вкладкам.
	$('#historyTabs .tabs-nav a').click(function () {
		historyTab.hide();
		historyTab.filter(this.hash).show();
		$('#historyTabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	// --------------------- Product Tabs ---------------------------
	var prodTab = $('#prodTabs .tabs-items > div');
	prodTab.hide().filter(':first').show();
	// Клики по вкладкам.
	$('#prodTabs .tabs-nav a').click(function () {
		prodTab.hide();
		prodTab.filter(this.hash).show();
		$('#prodTabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	// --------------------- Product About Tabs ---------------------------
	var prodAboutTab = $('#prodAboutTabs .tabs-items > div');
	prodAboutTab.hide().filter(':first').show();
	// Клики по вкладкам.
	$('#prodAboutTabs .tabs-nav a').click(function () {
		prodAboutTab.hide();
		prodAboutTab.filter(this.hash).show();
		$('#prodAboutTabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
	

	//--------------- fancybox -----------
	$('[data-fancybox-gallery]').fancybox({
		transitionEffect: 'fade',
		animationEffect: false,
		clickContent: false,
		touch: true,
		loop: true,
		selector: '.cert-item',
		backFocus: false,
		lang: 'ru',
		hideScrollbar: false,
		i18n: {
			ru: {
				CLOSE: 'Закрыть',
				ZOOM: 'Увеличить',
				FULL_SCREEN: 'На весь экран',
			}
		},
		buttons: [
			"zoom",
			"fullScreen",
			"close"
		]
	});


	// -------------------- Acordion FAQ -------------------------
	const accordionItems = document.querySelectorAll('.accordion-item')
	accordionItems.forEach((item) => {
		const accordionHeader = item.querySelector('.accordion-header')
		accordionHeader.addEventListener('click', () => {
			const openItem = document.querySelector('.accordion-open')
			toggleItem(item)
			if (openItem && openItem !== item) {
				toggleItem(openItem)
			}
		})
	})
	const toggleItem = (item) => {
		const accordionContent = item.querySelector('.accordion-content')
		if (item.classList.contains('accordion-open')) {
			accordionContent.removeAttribute('style')
			item.classList.remove('accordion-open')
		} else {
			accordionContent.style.height = accordionContent.scrollHeight + 'px'
			item.classList.add('accordion-open')
		}
	}
	

	// --------------------- Select 2 ---------------------------
	jQuery('.js-example-basic-single').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
	});
	jQuery('#orderby').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
	});
	jQuery('#select_region').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: "Регион/Уезд",
		allowClear: true
	});
	jQuery('#select_country').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: "Страна",
		allowClear: true
	});
	jQuery('#select_region_second').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: "Регион/Уезд",
		allowClear: true
	});
	jQuery('#select_country_second').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: "Страна",
		allowClear: true
	});
	jQuery('#select_region_lk, #select_region_lk_second').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: "Выберите",
		allowClear: true
	});
	jQuery('#select_country_lk, #select_country_lk_second').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: "Выберите",
		allowClear: true
	});
});


// ----------------- SWIPER ----------------------
var recomSwiper = new Swiper('.recomSwiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
});
for (var i = 1; i <= recomSwiper.slides.length; i++){
  if ( i === 1){
    $('.recomSwiper .swiper-pagination-bullets').append('<span class="swiper-pagination-bullet' + ' ' + 'swiper-pagination-bullet-active' + ' ' + 'slide' + i + '"></span>');
  } else {
    $('.recomSwiper .swiper-pagination-bullets').append('<span class="swiper-pagination-bullet' + ' ' + 'slide' + i + '"></span>');
  }
  $('.recomSwiper .swiper-pagination-bullets .slide' + i).on('click', function(){
    var index = $(this).index();
    recomSwiper.slideTo(index);
  });
}
var bullets = $('.swiper-pagination-bullet');
recomSwiper.on('slideChange', function () {
	var slide = "slide"+($('.swiper-pagination-current').html());
	bullets.removeClass("swiper-pagination-bullet-active");
	$.each(bullets, function (index, value) {
		if($(this).hasClass(slide)) {
			$(this).addClass("swiper-pagination-bullet-active");
			return false;
		}
	});
});


var reviewsSwiper = new Swiper('.reviewsSwiper', {
	slidesPerView: 1,
	// loop: true,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1025: {
			slidesPerView: 'auto',
		},
	}
});
for (var i = 1; i <= reviewsSwiper.slides.length; i++){
  if ( i === 1){
    $('.reviewsSwiper .swiper-pagination-bullets').append('<span class="swiper-pagination-bullet' + ' ' + 'swiper-pagination-bullet-active' + ' ' + 'slide' + i + '"></span>');
  } else {
    $('.reviewsSwiper .swiper-pagination-bullets').append('<span class="swiper-pagination-bullet' + ' ' + 'slide' + i + '"></span>');
  }
  $('.reviewsSwiper .swiper-pagination-bullets .slide' + i).on('click', function(){
    var index = $(this).index();
    reviewsSwiper.slideTo(index);
  });
}
var reviewsBullets = $('.swiper-pagination-bullet');
reviewsSwiper.on('slideChange', function () {
	var slide = "slide"+($('.swiper-pagination-current').html());
	reviewsBullets.removeClass("swiper-pagination-bullet-active");
	$.each(reviewsBullets, function (index, value) {
		if($(this).hasClass(slide)) {
			$(this).addClass("swiper-pagination-bullet-active");
			return false;
		}
	});
});



var popularSwiper = new Swiper(".popularSwiper, .withitSwiper, .canlikeSwiper, .recentSwiper", {
	spaceBetween: 10,
	slidesPerView: 1,
	// loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		500: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	}
});
var teamSwiper = new Swiper(".teamSwiper", {
	spaceBetween: 20,
	slidesPerView: 1,
	// loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		500: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	}
});

var productSecond = new Swiper(".productSecond", {
	spaceBetween: 10,
	slidesPerView: 4,
	direction: "horizontal",
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
		320: {
			direction: "horizontal",
			slidesPerView: 4,
		},
		500: {
			slidesPerView: 'auto',
		},
		1024: {
			direction: "vertical",
			slidesPerView: 'auto',
		},
	}
});
var productMain = new Swiper(".productMain", {
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: productSecond,
	},
});