function playAudio(id_do_som) {
    const audio = document.getElementById(id_do_som)

    if(audio){
       audio.play();
    }else{
    alert("nao foi possivel repruzir o som")

    }
}