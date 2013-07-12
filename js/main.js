jQuery(document).ready(function($) {
  
  	// Toggle Language
	$('#language-toggle-link').on('click',function(event){
		event.preventDefault();

		$(this).parents('.content-wrap').toggleClass('toggled-right');
		console.log(this.textContent +' clicked');
		
	})	

	// Toggle Main-Menu
	$('#main-menu-toggle-link').on('click',function(event){
		event.preventDefault();

		$(this).parents('.content-wrap').toggleClass('toggled-left');
		console.log(this.textContent +' clicked');	
	})	

});