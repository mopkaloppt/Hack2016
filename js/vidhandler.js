$('.carousel').carousel({
        interval: 2500 //changes the speed
});

// By default play the first vid
var current_vid = 1;
document.getElementById(current_vid.toString()).play();

// Transition in
$('#myCarousel').on('slide.bs.carousel', function () {
	// pause
    document.getElementById(current_vid.toString()).pause();
    document.getElementById(current_vid.toString()).currentTime = 0;
    // Check synchronization
    console.log('\n pausing ' + current_vid);
  
});

// Transition out    
$('#myCarousel').on('slid.bs.carousel', function () {
    // play
    current_vid = current_vid+1;

    if(current_vid > 3) {
        current_vid = 1;
    }

    document.getElementById(current_vid.toString()).play(); 
    // Check synchronization
    console.log('\ n playing ' + current_vid);    

});



   



   
    