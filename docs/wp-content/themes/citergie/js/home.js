jQuery(document).ready(function($){
	if ($(".accueil").length){
		$(".owl-carousel").owlCarousel({
			items: 2,
			loop: true,
			dots: false,
			margin: 30,
			nav: true,
			responsive: {
				1199: {
					items: 2
				},
				0: {
					items: 1
				},
			},
		});
	}

	$(".burger").click(function(){
		$(this).toggleClass("on")
		$(this).next().toggleClass("on")
		
	})

	/*$(".main-menu > ul li:last-child a").click(function(e){
		e.preventDefault();

		$(".popin-back").show();
		$(".popin-newsletter").show();
	})

	$(".popin-newsletter .close").click(function(){
		$(".popin-back").hide();
		$(".popin-newsletter").hide();
	})*/
	
});


/*

if(body.hasClass('accueil')){

	var carouselActu = $('.carouselActu');
	carouselActu.owlCarousel({
	  items: 1,
	  loop: true,
	  dots: false,
      margin: 30,
	  responsive:{
          1100:{
               items:3
           },
           992:{
               items:2
           },
           576:{
               items:2
           },
       },
	})

	$( ".actu-nav-next" ).click(function() {
		carouselActu.trigger('next.owl.carousel',[500]);
    });
	$( ".actu-nav-prev" ).click(function() {
        carouselActu.trigger('prev.owl.carousel',[500]);
	});

	var carouselTemoignage = $('.slider__temoignage');
	carouselTemoignage.owlCarousel({
	  items: 1,
	  loop: true,
	  dots: false,
      nav: true,
      navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    })
 //    var carouselTemoignage = $('.slider__temoignage__home');
	// carouselTemoignage.owlCarousel({
	//   items: 1,
	//   loop: true,
	//   dots: false,
 //      nav: true,
 //      navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
 //    })

    const filterToggle = document.getElementsByClassName('region__shortcut')[0];
    const filtersHome = document.getElementsByClassName('home__filter')[0];
    if(filterToggle){
        const toggleFilters = () => {
            filtersHome.classList.toggle('opacited');
        }
        filterToggle.addEventListener('click', toggleFilters);
    }

    //SLIDER RBLOCK ROND HOME
	const blocRonds = document.getElementsByClassName('blocs__accompagnement')[0];
	if(blocRonds){
		let slider = $('.blocs__accompagnement');
		slider.owlCarousel({
			items: 1,
			loop: false,
			dots: false,
			nav: true,
			navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
			responsive:{
				700:{
					items:2,
				},
                1500:{
					items:4,
				}
			}
		});
	}
	
}

*/
// // if(body.hasClass('home-page')){
// 	var carouselTemoignage = $('.slider__temoignage');
// 		carouselTemoignage.owlCarousel({
// 		items: 1,
// 		loop: true,
// 		dots: false,
// 		nav: true,
// 		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
// 	})
// // }	


//Faire en sorte que dans les étapes, le premier élément est apparent puis disparaître au survol des autres
jQuery(".etapes ul li:first-child").addClass("active"); //Ajout de la classe active par défaut au premier élément
jQuery(".etapes ul li").hover(function(){
	jQuery(this).toggleClass("active");  //Au hover, on donne la classe active pour définir les comportements des autres items
});
jQuery(".etapes ul li:not(:first-child)").hover(function(){
    if ( jQuery(".etapes ul li:first-child").hasClass( "active" ) ) {
 
        jQuery(".etapes ul li:first-child").removeClass("active");
 
    }
 
  });

  var width = jQuery(document).width();
  if (width < 992) {
	  jQuery(".benefices").addClass("force-hover");
  }

jQuery(window).resize(function() {
    //do something

    var width = jQuery(document).width();
    if (width < 992) {
		jQuery(".benefices").addClass("force-hover");
    } else {
		jQuery(".benefices").removeClass("force-hover");

	}

});

jQuery( ".benefice" ).click(function() {
	jQuery(this).find('.toggle').toggle();
  });

  jQuery( ".benefice" ).mouseleave(function() {
	jQuery(this).find('.toggle').hide();
  });