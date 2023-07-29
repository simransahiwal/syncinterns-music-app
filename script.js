let name;
let title;
let artist;
let music;
let image;
let isplaying = false;
let i=-1;
function start(){
    let songs = [
        {
             name : "song-1",
             title : "Closer",
             artist : "The Chainsmokers ft.Halsey"
        },        
        {
             name : "song-2",
             title : "I Like Me Better",
             artist : "Lauv"
        },        
        {
             name : "song-3",
             title : "Perfect",
             artist : "Ed Sheeran"
        },        
        {
             name : "song-4",
             title : "Rewrite The Stars",
             artist : "Anne-Marie & James Arthur"
        },        
        {
             name : "song-5",
             title : "This Feeling",
             artist : "The Chainsmokers ft.Kelsea Ballerini"
        },        
        {
             name : "song-6",
             title : "Love Is Gone",
             artist : "SLANDER ft.Dylan Matthew"
        },        
        {
             name : "song-7",
             title : "Don't Look Back",
             artist : "Rick & Morty, Kotomi & Ryan Elder"
        },        
    ]
    document.getElementById('songname').innerHTML = songs[i].title;
    document.getElementById('artist').innerHTML = songs[i].artist;
    music = document.getElementById('song');
     music.src = `music/${songs[i].name}.mp3`;
     image = document.getElementById('img');
     image.src = 'image/' + songs[i].name +".jpeg";
       song_play.style.display = 'block';
        song_pause.style.display = 'none';
        isplaying = false;
}
function update(){
     if(i!=6)
    {
        i++;
    }
    else if(i==6)
    {
        i=0;
    }
   else if(i>6)
    i=0;
    
}
function decrease()
{
    i--;
    if(i<0)
    i=6;
}
function load()
{ 
    if(i==-1)
    { 
        start(update());
    }
    if (isplaying==false)
    {
        music.play();
        isplaying = true;
        song_play.style.display = 'none';
        song_pause.style.display = 'block';
    }
    else{
        music.pause();
        song_play.style.display = 'block';
        song_pause.style.display = 'none';
        isplaying = false;
    }
}
