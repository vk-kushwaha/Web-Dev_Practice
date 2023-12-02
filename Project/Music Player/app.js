let songlist = document.getElementById('song-list');
let progress = document.getElementsById('progress');
let playbtn = document.getElementById('play-btn');

let songs = [
    {
        name:'song1',
        id: 1

    },
    {
        name:'song2',
        id: 2

    },
    {
        name:'song3',
        id: 3

    },
    {
        name:'song4',
        id: 4

    }


]

let audio = new Audio('./Songs/jamna_paar.mp3');
for (let song of songs) {
    let li = document.createElement('li');
    li.innerHTML = song.name;
    li.setAttribute('id', song.id);
    li.classList.add('song-list');
    songlist.append(li);
}

playbtn.addEventListener('click' , ()=>{
    audio.paused ? audio.play() : audio.pause();
    if(playBtn.children[0].classList.contains('fa-play')){
        playBtn.children[0].classList.remove('fa-play')
        playBtn.children[0].classList.add('fa-pause')
    }
    else{
        playBtn.children[0].classList.remove('fa-pause')
        playBtn.children[0].classList.add('fa-play')
    }

})
