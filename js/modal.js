$('.alert_title').on('click',function(){
    $('.modal-container').empty();
    //$('.modal-container').append(imageTag2).append(itemDescription);
    $('.modal').fadeIn();
});

$('.open-button').on('click',function(){
    $('.modal').fadeIn();
});

$('.close-button, .overlay').on('click',function(){
    $('.modal').fadeOut();
});