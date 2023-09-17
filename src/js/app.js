$(document).ready(function () {

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
	var historyTab = $('#prodTabs .tabs-items > div');
	historyTab.hide().filter(':first').show();
	// Клики по вкладкам.
	$('#prodTabs .tabs-nav a').click(function () {
		historyTab.hide();
		historyTab.filter(this.hash).show();
		$('#prodTabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	// --------------------- Product About Tabs ---------------------------
	var historyTab = $('#prodAboutTabs .tabs-items > div');
	historyTab.hide().filter(':first').show();
	// Клики по вкладкам.
	$('#prodAboutTabs .tabs-nav a').click(function () {
		historyTab.hide();
		historyTab.filter(this.hash).show();
		$('#prodAboutTabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
	


	//--------------- fancybox -----------
	$('[data-fancybox-popup]').fancybox({
		closeExisting: true,
		smallBtn: false,
		toolbar: false,
		autoFocus: false,
		hash: false,
		touch: false
	});
	// FANCYBOX CERTIFICATE
	// ====================
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
		// i18n: {
		// 	ru: {
		// 		CLOSE: 'Закрыть',
		// 		ZOOM: 'Увеличить',
		// 		FULL_SCREEN: 'На весь экран',
		// 	}
		// },
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
var reviewsSwiper = new Swiper('.reviewsSwiper', {
	slidesPerView: 'auto',
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
var productSecond = new Swiper(".productSecond", {
	spaceBetween: 10,
	slidesPerView: 'auto',
	direction: "vertical",
	freeMode: true,
	watchSlidesProgress: true,
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

// var swiper = new Swiper(".brandsSwiper", {
// 	slidesPerView: "auto",
// 	spaceBetween: 30,
// 	freeMode: true,
// 	// pagination: {
// 	// 	el: ".swiper-pagination",
// 	// 	clickable: true,
// 	// },
// });
// var noveltySwiper = new Swiper(".noveltySwiper", {
// 	spaceBetween: 20,
// 	slidesPerView: 1,
// 	loop: true,
// 	autoplay: {
// 		delay: 5000,
// 		disableOnInteraction: false,
// 	},
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// });
// var newsblSwiper = new Swiper(".newsblSwiper", {
// 	spaceBetween: 20,
// 	slidesPerView: 1,
// 	loop: true,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 			spaceBetween: 20
// 		},
// 		500: {
// 			slidesPerView: 2,
// 		},
// 		768: {
// 			slidesPerView: 3,
// 			spaceBetween: 24
// 		},
// 		1025: {
// 			spaceBetween: 36
// 		}
// 	}
// });
// var blogblSwiper = new Swiper(".blogblSwiper", {
// 	spaceBetween: 20,
// 	slidesPerView: 1,
// 	loop: true,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 			spaceBetween: 20
// 		},
// 		500: {
// 			slidesPerView: 2,
// 		},
// 		768: {
// 			slidesPerView: 3,
// 			spaceBetween: 24
// 		},
// 		1025: {
// 			spaceBetween: 36
// 		}
// 	}
// });
// var similarblSwiper = new Swiper(".similarblSwiper", {
// 	spaceBetween: 20,
// 	slidesPerView: 2,
// 	loop: true,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 2,
// 			spaceBetween: 20
// 		},
// 		768: {
// 			slidesPerView: 3,
// 			spaceBetween: 24
// 		},
// 		1025: {
// 			spaceBetween: 36,
// 			slidesPerView: 4,
// 		}
// 	}
// });
// var recomblSwiper = new Swiper(".recomblSwiper", {
// 	spaceBetween: 20,
// 	slidesPerView: 2,
// 	loop: true,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 2,
// 			spaceBetween: 20
// 		},
// 		768: {
// 			slidesPerView: 3,
// 			spaceBetween: 24
// 		},
// 		1025: {
// 			spaceBetween: 36,
// 			slidesPerView: 4,
// 		}
// 	}
// });
// var complectblSwiper = new Swiper(".complectblSwiper", {
// 	spaceBetween: 20,
// 	slidesPerView: 2,
// 	loop: true,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 2,
// 			spaceBetween: 20
// 		},
// 		768: {
// 			slidesPerView: 3,
// 			spaceBetween: 24
// 		},
// 		1025: {
// 			spaceBetween: 36,
// 			slidesPerView: 2,
// 		}
// 	}
// });

// var prodSecondSwiper = new Swiper(".prodSecondSwiper.swiper-container", {
// 	loop: true,
// 	spaceBetween: 16,
// 	slidesPerView: 4,
// 	freeMode: true,
// 	watchSlidesProgress: true,
// });
// var prodFirstSwiper = new Swiper(".prodFirstSwiper.swiper-container", {
// 	loop: true,
// 	spaceBetween: 10,
// 	navigation: {
// 		nextEl: ".product-slider .swiper-button-next",
// 		prevEl: ".product-slider .swiper-button-prev",
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		type: 'bullets',
// 		clickable: true,
// 	},
// 	thumbs: {
// 		swiper: prodSecondSwiper,
// 	},
// });