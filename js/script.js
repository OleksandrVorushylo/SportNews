window.addEventListener('DOMContentLoaded', () => {

	const menuNav = () => {

		const header = document.querySelector('.header'),
			topSilder = document.querySelector('.top-slider');
		const sticky = topSilder.offsetTop;


		const logo = document.querySelector('.header__logo'),
			headerBottom = document.querySelector('.header-bottom'),
			topSliderWrapper = document.querySelector('.top-slider__wrapper'),
			menuBtn = document.querySelector('.menu-button');

		const menuDisable = () => {
			logo.classList.add('header__logo--scroll');
			headerBottom.classList.add('header-bottom--scroll');
			headerBottom.classList.add('header-bottom--opacity');
			menuBtn.classList.remove('menu-active');
			topSliderWrapper.classList.add('top-slider__wrapper--padding');

		};
		const menuEnable = () => {
			logo.classList.remove('header__logo--scroll');
			headerBottom.classList.remove('header-bottom--scroll');
			headerBottom.classList.remove('header-bottom--opacity');
			menuBtn.classList.add('menu-active');
			topSliderWrapper.classList.remove('top-slider__wrapper--padding');
		};

		window.onscroll = function() { scrollNavbar(); };
		function scrollNavbar() {
			if (window.pageYOffset >= sticky) {
				menuDisable();
				menuBtn.classList.remove('menu-start');
			}
		}
		menuBtn.addEventListener('click', event => {
			event.preventDefault();
			if (menuBtn.classList.contains('menu-active')) {
				menuBtn.classList.remove('menu-active');
				menuDisable();

			} else if (!menuBtn.classList.contains('menu-active')) {
				menuBtn.classList.add('menu-active');
				menuEnable();
			}
			if (menuBtn.classList.contains('menu-start')) {
				menuBtn.classList.remove('menu-start');
				menuDisable();
			}
		});
	};
	menuNav();

	const topSlider = () => {
		const swiper = new Swiper(".mySwiper", {
			spaceBetween: 30,
			slidesPerView: 3,
			freeMode: true,
			watchSlidesProgress: true,

		});
		const swiper2 = new Swiper(".mySwiper2", {
			spaceBetween: 10,
			thumbs: {
				swiper,
			},
			// autoplay: {
			// 	delay: 5000,
			// },
		});
	};
	topSlider();


});
