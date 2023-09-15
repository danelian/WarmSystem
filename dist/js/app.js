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
// var watchedblSwiper = new Swiper(".watchedblSwiper", {
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