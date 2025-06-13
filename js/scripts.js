WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function() {
	// Top banner slider
	const topBannerSliders = [],
		topBanner = document.querySelectorAll('.top_banner .swiper')

	topBanner.forEach((el, i) => {
		el.classList.add('top_banner_s' + i)

		let options = {
			loop: true,
			speed: 30000,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 1,
			spaceBetween: 0,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: false
			},
		}

		topBannerSliders.push(new Swiper('.top_banner_s' + i, options))
	})


	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true
		})
	}


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 4,
			breakpoints: {
				0: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.product'))

					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.product')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)

					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Reviews slider
	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach((el, i) => {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 4,
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.review'))

					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.review').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.review')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)

					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.review').outerHeight() * 0.5
						)
					})
				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Photo gallery slider
	const photoGallerySliders = [],
		photoGallery = document.querySelectorAll('.photo_gallery .swiper')

	photoGallery.forEach((el, i) => {
		el.classList.add('photo_gallery_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 3,
			speed: 6000,
			centeredSlides: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			spaceBetween: 4,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: false
			},
			breakpoints: {
				0: {
					slidesPerView: 2
				},
				480: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				},
				1280: {
					slidesPerView: 6
				}
			}
		}

		photoGallerySliders.push(new Swiper('.photo_gallery_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('header').toggleClass('show')

		$('.mob_header .mob_menu_btn').hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(300)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Focus when clicking on the field name
	const formLabels = document.querySelectorAll('form .label')

	if (formLabels) {
		formLabels.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.closest('.line').querySelector('.input, textarea').focus()
			})
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))

			if (el.querySelector('option[selected]')) {
				el.classList.add('selected')
			}
		})
	}


	// Small modals
	$('.small_modal_btn').click(function(e) {
		e.preventDefault()

		const modal = $(this).data('modal')

		$('body').addClass('lock')
		$('.small_modal').removeClass('show')
		$('#' + modal).addClass('show')
		$('.overlay').fadeIn(300)
	})


	$('.small_modal .close_btn, .overlay').click(function(e) {
		e.preventDefault()

		$('body').removeClass('lock')
		$('.small_modal').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	// Filter
	priceRange = $('.filter_info #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 100000,
		from: 18500,
		to: 89000,
		step: 100,
		onChange: data => {
			$('.filter_info .price_range input.from').val(data.from)
			$('.filter_info .price_range input.to').val(data.to)
		},
		onUpdate: data => {
			$('.filter_info .price_range input.from').val(data.from)
			$('.filter_info .price_range input.to').val(data.to)
		}
	}).data('ionRangeSlider')

	$('.filter_info .price_range .input').keyup(function () {
		priceRange.update({
			from: parseInt($('.filter_info .price_range input.from').val()),
			to: parseInt($('.filter_info .price_range input.to').val())
		})
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Product info
	initProductInfoSlider()


	// Mob. search
	$('.mob_fixed_btns .search_btn').click(function(e) {
		e.preventDefault()

		$('.mob_fixed_search').toggleClass('show')
	})


	// Mini popups
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Close the popup when clicking outside of it
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Header catalog
	$('.header_catalog .links a.sub_link').click(function(e) {
		e.preventDefault()

		$('.header_catalog .sub_links').removeClass('show')
		$(this).next().addClass('show')
	})


	// Menu modal
	$('#menu_small_modal .menu a.catalog_link, #menu_small_modal .catalog_menu > .back .btn').click(function(e) {
		e.preventDefault()

		$('#menu_small_modal .catalog_menu').toggleClass('show')
	})

	$('#menu_small_modal .catalog_menu .items a.sub_link').click(function(e) {
		e.preventDefault()

		const sub = $(this).data('sub-index')

		$('#menu_small_modal .catalog_menu .sub' + sub).addClass('show')
	})

	$('#menu_small_modal .catalog_menu .sub .back .btn').click(function(e) {
		e.preventDefault()

		const sub = $(this).closest('.sub')

		sub.removeClass('show')
	})
})



window.addEventListener('load', function () {
	// Articles
	let articles = $('.articles .masonry'),
		articlesGap = parseInt(articles.css('--gap'))

	articles.masonry({
		gutter: articlesGap,
		itemSelector: '.article',
		columnWidth: articles.find('.article').outerWidth()
	})


	// Fix. header
	headerInit = true,
	headerHeight = $('header').outerHeight()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Fix. header
		headerInit = false
		$('.header_wrap').height('auto')

		setTimeout(() => {
			headerInit = true
			headerHeight = $('header').outerHeight()

			$('.header_wrap').height(headerHeight)

			headerInit && $(window).scrollTop() > headerHeight
				? $('header').addClass('fixed')
				: $('header').removeClass('fixed')
		}, 100)


		// Product info
		initProductInfoSlider()


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



window.addEventListener('scroll', function () {
	// Fix. header
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



// Product info
productInfoSlider = []

function initProductInfoSlider() {
	if (WW < 768) {
		if ($('.product_info .images .row').length) {
			$('.product_info .images .row > *').addClass('swiper-slide')
			$('.product_info .images .row').addClass('swiper-wrapper').removeClass('row')

			$('.product_info .images .swiper').each(function (i) {
				$(this).addClass('product_info_s' + i)

				let options = {
					loop: true,
					loopAdditionalSlides: 1,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					lazy: true,
					spaceBetween: 4,
					slidesPerView: 1,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
						bulletActiveClass: 'active'
					}
				}

				productInfoSlider.push(new Swiper('.product_info_s' + i, options))
			})
		}
	} else {
		productInfoSlider.forEach(element => element.destroy(true, true))

		productInfoSlider = []

		$('.product_info .images .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.product_info .images .row > *').removeClass('swiper-slide')
	}
}