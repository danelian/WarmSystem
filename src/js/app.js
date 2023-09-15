$(document).ready(function () {

	var paralaxes = document.querySelectorAll(".paralax");
	var moveCoef = 0.5;
	window.addEventListener("scroll", scroll);
	window.addEventListener("resize", scroll);
	scroll();
	function scroll() {
		for (var i = 0; i < paralaxes.length; i++) {
			var paralax = paralaxes[i];
			var r = paralax.getBoundingClientRect();
			var paralaxYCenter = r.y + r.height / 2;
			var scrollYCenter = window.innerHeight / 2;
			var move = (paralaxYCenter - scrollYCenter) * moveCoef - 100;
			paralax.style.backgroundPositionY = move + "px";
		}
	} 

	// Search (Header)
	let searchHiddenInput = document.querySelector("#searchHiddenInput");
	let searchToggleBtn = document.querySelector("#searchToggleBtn");
	let searchBarLabel = document.querySelector("#searchBarLabel");
	searchToggleBtn.addEventListener("click", () => {
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

	// -------------------- burger --------------------------
	const burgerMenu = document.getElementById('burger-menu');
	const burgerToggle = document.getElementById('burger-toggle');
	const headerToggle = document.querySelector('.header-mob');
	const cartMenu = document.getElementById('cart-menu');
	const cartToggle = document.getElementById('cart-toggle');
	let isMenuOpen = false;
	headerToggle.addEventListener('click', () => {
		if (!isMenuOpen) {
			headerToggle.classList.add('active');
			isMenuOpen = true;
		} else {
			headerToggle.classList.remove('active');
			isMenuOpen = false;
		}
		if (burgerMenu.classList.contains('show-menu-panel') || cartMenu.classList.contains('show-menu-panel')) {
			headerToggle.classList.add('active');
			isMenuOpen = true;
		}
	});
	if (burgerToggle) {
		burgerToggle.addEventListener('click', () => {
			burgerMenu.classList.toggle('show-menu-panel');
			burgerToggle.classList.toggle('active');
			cartMenu.classList.remove('show-menu-panel');
			cartToggle.classList.remove('active');
		});
	}
	if (cartToggle) {
		cartToggle.addEventListener('click', () => {
			cartMenu.classList.toggle('show-menu-panel');
			cartToggle.classList.toggle('active');
			burgerMenu.classList.remove('show-menu-panel');
			burgerToggle.classList.remove('active');
		});
	}
	document.addEventListener('click', function (e) {

		var target = e.target;

		if (!burgerMenu.contains(target) && !cartMenu.contains(target) && !headerToggle.contains(target)) {
			burgerMenu.classList.remove('show-menu-panel');
			burgerToggle.classList.remove('active');
			cartMenu.classList.remove('show-menu-panel');
			cartToggle.classList.remove('active');
			headerToggle.classList.remove('active');
			isMenuOpen = false;
		}
	});
	const burgerLink = document.querySelectorAll('.nav-list a, .green-link, .header-contacts a, .menu-list .menu-item');
	const linkAction = () => {
		burgerMenu.classList.remove('show-menu-panel');
		cartMenu.classList.remove('show-menu-panel');
	};
	burgerLink.forEach(n => n.addEventListener('click', linkAction));


	// catSidebar на мобилке
	const catSidebar = document.getElementById('catSidebar');
	const catSidebarToggle = document.getElementById('catSidebarToggle');
	const catSidebarClose = document.getElementById('catSidebarClose');
	/*===== MENU SHOW =====*/
	if (catSidebarToggle) {
		catSidebarToggle.addEventListener('click', () => {
			catSidebar.classList.add('active');
		})
	}
	/*===== MENU HIDDEN =====*/
	if (catSidebarClose) {
		catSidebarClose.addEventListener('click', () => {
			catSidebar.classList.remove('active');
		})
	}

	/*=============== catSidebar ===============*/
	const catSidebarItems = document.querySelectorAll('.catSidebar-item')
	catSidebarItems.forEach((item) => {
		const catSidebarHeader = item.querySelector('.catSidebar-title')
		const catSidebarContent = item.querySelector('.catSidebar-group')
		// catSidebarContent.style.height = catSidebarContent.scrollHeight + 'px'
		// item.classList.add('catSidebar-item-open')
		catSidebarHeader.addEventListener('click', () => {
			catSidebartoggleItem(item)
		})
	})
	if (window.innerWidth >= 1025) {
		catSidebarItems.forEach((item) => {
			const catSidebarContent = item.querySelector('.catSidebar-group')
			catSidebarContent.style.height = catSidebarContent.scrollHeight + 'px'
			item.classList.add('catSidebar-item-open')
		})
	}
	const catSidebartoggleItem = (item) => {
		const catSidebarContent = item.querySelector('.catSidebar-group')
		if (item.classList.contains('catSidebar-item-open')) {
			catSidebarContent.removeAttribute('style')
			item.classList.remove('catSidebar-item-open')
		} else {
			catSidebarContent.style.height = catSidebarContent.scrollHeight + 'px'
			item.classList.add('catSidebar-item-open')
		}
	}

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

	// select 2
	jQuery('.js-example-basic-single').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
	});
	jQuery('#orderby').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
	});
	jQuery('#regionSelect, #countrySelect, #regionSecondSelect, #countrySecondSelect').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: 'Выберите'
	});
	jQuery('#regionCartSelect').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: 'Регион/Уезд'
	});
	jQuery('#countryCartSelect').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: 'Страна'
	});
	jQuery('#deliveryVariantCartSelect').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: 'Посылочный автомат'
	});
	// jQuery('#countrySelect').select2({
	// 	minimumResultsForSearch: Infinity,
	// 	dropdownPosition: 'below',
	// 	placeholder: 'Выберите'
	// });



	// -------------------------modal----------------------
	$('.to-state').on('click', function (event) {
		event.preventDefault();
		$('div').removeClass('active');
		$('.state').removeClass('active');
		var state = $(this).attr('data-state');
		$('.state[data-state=' + state + ']').addClass('active');
		$('body').addClass('dis-scroll');
	});
	$('.close, .button-close').on('click', function (event) {
		$(this).parents().removeClass('active');
		$('body').removeClass('dis-scroll');
	});
	// $('.button-close').on('click', function (event) {
	// 	$(this).parents().removeClass('active');
	// 	$('body').removeClass('dis-scroll');
	// });
	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".state-box"); // тут указываем ID элемента
			var select = $(".select2-container");
			if (!div.is(e.target)// если клик был не по нашему блоку
				&& div.has(e.target).length === 0 // и не по его дочерним элементам
				&& (!select.is(e.target)
					&& select.has(e.target).length === 0
					&& !$(e.target).closest('.select2-selection, .select2-search, .select2-container, .select2-results__option').length)) { // и не по элементам с классом select2-selection и select2-search
				div.parents().removeClass('active'); // скрываем его
				$('body').removeClass('dis-scroll');
			}
		});
	});


	// read more
	/**
	 *  @author stephen scaff
	 *  @todo
	 */
	const ReadMore = (() => {
		let s;

		return {

			settings() {
				return {
					content: document.querySelectorAll('.js-read-more'),
					originalContentArr: [],
					truncatedContentArr: [],
					moreLink: "Читать дальше...",
					lessLink: "Свернуть",
				}
			},

			init() {
				s = this.settings();
				this.bindEvents();
			},

			bindEvents() {
				ReadMore.truncateText();
			},

			/**
			 * Count Words
			 * Helper to handle word count.
			 * @param {string} str - Target content string.
			 */
			countWords(str) {
				return str.split(/\s+/).length;
			},

			/**
			 * Ellpise Content
			 * @param {string} str - content string.
			 * @param {number} wordsNum - Number of words to show before truncation.
			 */
			ellipseContent(str, wordsNum) {
				return str.split(/\s+/).slice(0, wordsNum).join(' ') + '...';
			},

			/**
			 * Truncate Text
			 * Truncate and ellipses contented content
			 * based on specified word count.
			 * Calls createLink() and handleClick() methods.
			 */
			truncateText() {

				for (let i = 0; i < s.content.length; i++) {
					//console.log(s.content)
					const originalContent = s.content[i].innerHTML;
					const numberOfWords = s.content[i].dataset.rmWords;
					const truncateContent = ReadMore.ellipseContent(originalContent, numberOfWords);
					const originalContentWords = ReadMore.countWords(originalContent);

					s.originalContentArr.push(originalContent);
					s.truncatedContentArr.push(truncateContent);

					if (numberOfWords < originalContentWords) {
						s.content[i].innerHTML = s.truncatedContentArr[i];
						let self = i;
						ReadMore.createLink(self)
					}
				}
				ReadMore.handleClick(s.content);
			},

			/**
			 * Create Link
			 * Creates and Inserts Read More Link
			 * @param {number} index - index reference of looped item
			 */
			createLink(index) {
				const linkWrap = document.createElement('span');

				linkWrap.className = 'read-more__link-wrap';

				linkWrap.innerHTML = `<a id="read-more_${index}" class="read-more__link" style="cursor:pointer;">${s.moreLink}</a>`;

				// Inset created link
				s.content[index].parentNode.insertBefore(linkWrap, s.content[index].nextSibling);

			},

			/**
			 * Handle Click
			 * Toggle Click eve
			 */
			handleClick(el) {
				const readMoreLink = document.querySelectorAll('.read-more__link');

				for (let j = 0, l = readMoreLink.length; j < l; j++) {

					readMoreLink[j].addEventListener('click', function () {

						const moreLinkID = this.getAttribute('id');
						let index = moreLinkID.split('_')[1];

						el[index].classList.toggle('is-expanded');

						if (this.dataset.clicked !== 'true') {
							el[index].innerHTML = s.originalContentArr[index];
							this.innerHTML = s.lessLink;
							this.dataset.clicked = true;
						} else {
							el[index].innerHTML = s.truncatedContentArr[index];
							this.innerHTML = s.moreLink;
							this.dataset.clicked = false;
						}
					});
				}
			},

			/**
			 * Open All
			 * Method to expand all instances on the page.
			 */
			openAll() {
				const instances = document.querySelectorAll('.read-more__link');
				for (let i = 0; i < instances.length; i++) {
					content[i].innerHTML = s.truncatedContentArr[i];
					instances[i].innerHTML = s.moreLink;
				}
			}
		}
	})();
	ReadMore.init()


	// show more
	const loadMore = document.querySelector('.load-more');
	const prodFaqLength = document.querySelectorAll('.prodfaq .accordion-item').length;
	let items = 3;
	function loadMoreItems() {
		items += 3;
		const array = Array.from(document.querySelector('.prodfaq .accordion').children);
		const visItems = array.slice(0, items);
		visItems.forEach(el => el.classList.add('is-visible'));
		if (visItems.length === prodFaqLength) {
			loadMore.style.display = 'none';
		}
	}
	if (window.innerWidth <= 1024) {
		loadMore.addEventListener('click', loadMoreItems);
	}
	
});


// ----------------- SWIPER ----------------------
var swiper = new Swiper(".brandsSwiper", {
	slidesPerView: "auto",
	spaceBetween: 30,
	freeMode: true,
	// pagination: {
	// 	el: ".swiper-pagination",
	// 	clickable: true,
	// },
});
var noveltySwiper = new Swiper(".noveltySwiper", {
	spaceBetween: 20,
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
var newsblSwiper = new Swiper(".newsblSwiper", {
	spaceBetween: 20,
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		500: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 24
		},
		1025: {
			spaceBetween: 36
		}
	}
});
var blogblSwiper = new Swiper(".blogblSwiper", {
	spaceBetween: 20,
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		500: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 24
		},
		1025: {
			spaceBetween: 36
		}
	}
});
var watchedblSwiper = new Swiper(".watchedblSwiper", {
	spaceBetween: 20,
	slidesPerView: 2,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 24
		},
		1025: {
			spaceBetween: 36,
			slidesPerView: 4,
		}
	}
});
var similarblSwiper = new Swiper(".similarblSwiper", {
	spaceBetween: 20,
	slidesPerView: 2,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 24
		},
		1025: {
			spaceBetween: 36,
			slidesPerView: 4,
		}
	}
});
var recomblSwiper = new Swiper(".recomblSwiper", {
	spaceBetween: 20,
	slidesPerView: 2,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 24
		},
		1025: {
			spaceBetween: 36,
			slidesPerView: 4,
		}
	}
});
var complectblSwiper = new Swiper(".complectblSwiper", {
	spaceBetween: 20,
	slidesPerView: 2,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 24
		},
		1025: {
			spaceBetween: 36,
			slidesPerView: 2,
		}
	}
});

var prodSecondSwiper = new Swiper(".prodSecondSwiper.swiper-container", {
	loop: true,
	spaceBetween: 16,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
});
var prodFirstSwiper = new Swiper(".prodFirstSwiper.swiper-container", {
	loop: true,
	spaceBetween: 10,
	navigation: {
		nextEl: ".product-slider .swiper-button-next",
		prevEl: ".product-slider .swiper-button-prev",
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	thumbs: {
		swiper: prodSecondSwiper,
	},
});