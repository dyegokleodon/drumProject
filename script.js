document.body.addEventListener('keyup', (event) => {
  playSound(event.code.toLocaleLowerCase());
});

document.querySelector('button').addEventListener('click', (event) => {
  let song = document.querySelector('#input').value;

  if(song !== ''){
    let arraySong = song.split('');
    playComposition(arraySong);
  }
})

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if(audioElement){
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if(keyElement){
    keyElement.classList.add('active');

    setTimeout(() =>{
      keyElement.classList.remove('active');
    }, 300)
  }
}

function playComposition(songArray) {
  let cadence = 0
  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, cadence);
    
    cadence += 250;
  }
}