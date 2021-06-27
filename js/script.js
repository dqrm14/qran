    async function get(){
    const response = await fetch('http://api.mp3quran.net/radios/radio_english.json');
    const data = await response.json()

    document.querySelector('.name').innerHTML = data.radios.map( dataa => `<li><h1>${dataa.name}</h1><a target="_blank" href='${dataa.radio_url}'>تشغيل</a></li>`).join('');
    

    //target="_blank" href=${"dataa.radio_url"}>open</a></li>`
    
};
get();

$(document).ready(function(){

    $('#bars').click(function(){
        $('#sd').slideToggle( "slow", function() {
            $(this).animate({right:'0'})
        });
    })
    //$('body').css('background','#FFF');

});

