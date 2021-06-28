    async function get(){
    try{
    const response = await fetch('http://api.mp3quran.net/radios/radio_english.json');
    const data = await response.json()
    printData(data)
    }catch(e){
        console.log("error:",e.message)
    }
};

function printData(data){
    document.querySelector('.name').innerHTML = data.radios.map( dataa => `<li><h1>${dataa.name}</h1><a target="_blank" href='${dataa.radio_url}'>تشغيل</a></li>`).join('');

}
get();

$(document).ready(function(){

    $('#bars').click(function(){
        $('#sd').slideToggle( "slow", function() {
            $(this).animate({right:'0'})
        });
    })
    //$('body').css('background','#FFF');

});

