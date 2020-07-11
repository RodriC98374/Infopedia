window.addEventListener('load', function(){
	new Glider(document.querySelector('.apuntes_lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.apuntes_indicadores',
		arrows: {
			prev: '.apuntes_anterior',
			next: '.apuntes_siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 576px
			  	breakpoint: 370,
			  	settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},{
			  // screens greater than >= 576px
			  	breakpoint: 576,
			  	settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},{
				// screens greater than >= 992px
				breakpoint: 768,
				settings: {
				 	slidesToShow: 4,
				  	slidesToScroll: 4
				}
			  }
		]
	});
});
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.img-apt')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while(lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})