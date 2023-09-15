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

	
});


// ----------------- SWIPER ----------------------
// var swiper = new Swiper(".recomSwiper", {
// 	slidesPerView: 1,
// 	spaceBetween: 10,
// 	pagination: {
// 		el: ".swiper-pagination",
// 	},
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// });
var swiper = new Swiper('.recomSwiper', {
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