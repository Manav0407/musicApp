// for function bar play music

music=new Audio('audio/1.mp3');
// music.play();

const song=[
    {
        id:1,
        songName:`On my way 
        <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"img/1.jpg"
    },
    {
        id:2,
        songName:`Faded 
        <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"img/2.jpg"
    }, {
        id:3,
        songName:`cartoon - On & On 
        <br>
        <div class="subtitle">Daniel Levi</div>`,
        poster:"img/3.jpg"
    }, {
        id:4,
        songName:`warriyo - Mortals
        <br>
        <div class="subtitle">Mortals</div>`,
        poster:"img/4.jpg"
    }, {
        id:5,
        songName:`Ertugrul Gazi
        <br>
        <div class="subtitle">Ertugrul</div>`,
        poster:"img/5.jpg"
    }, {
        id:6,
        songName:`Electronic Music 
        <br>
        <div class="subtitle">Electro</div>`,
        poster:"img/6.jpg"
    }, {
        id:7,
        songName:`Agar Tum Sath Ho 
        <br>
        <div class="subtitle">Tamashaa</div>`,
        poster:"img/7.jpg"
    }, {
        id:8,
        songName:`Suna Hai
        <br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster:"img/8.jpg"
    }, {
        id:9,
        songName:`Dilber 
        <br>
        <div class="subtitle">Satyameva Jayate</div>`,
        poster:"img/9.jpg"
    }, {
        id:10,
        songName:`Duniya
        <br>
        <div class="subtitle">Luka chhupi</div>`,
        poster:"img/10.jpg"
    }, {
        id:11,
        songName:`Lagdi Lahore Di 
        <br>
        <div class="subtitle">Street Dancer 3D</div>`,
        poster:"img/11.jpg"
    }, {
        id:12,
        songName:`Putt Jatt Da 
        <br>
        <div class="subtitle">Putt Jatt Da </div>`,
        poster:"img/12.jpg"
    }, {
        id:13,
        songName:`Baarishein
        <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:"img/13.jpg"
    }, {
        id:14,
        songName:`Vaaste
        <br>
        <div class="subtitle">Dhvani Bhanushali</div>`,
        poster:"img/14.jpg"
    },
    {
        id:15,
        songName:`Lut Gaye
        <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster:"img/15.jpg"
    }, {
        id:16,
        songName:`Tu meri Jindgi Hai 
        <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster:"img/16.jpg"
    }, {
        id:17,
        songName:`Batao Yaad Hai Tumko Wo jab Dil ko churaya Tha 
        <br>
        <div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster:"img/17.jpg"
    }, {
        id:18,
        songName:`Pasoori
        <br>
        <div class="subtitle">Ali Sethi Seha Gill</div>`,
        poster:"img/18.jpg"
    }, {
        id:19,
        songName:`Eh Munde Pagal Ne Saare 
        <br>
        <div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster:"img/19.jpg"
    }, {
        id:20,
        songName:`Dunny 82K 
        <br>
        <div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster:"img/20.jpg"
    },
]

// making array for store all songs

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>
{
    e.getElementsByTagName('img')[0].src=song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=song[i].songName;
});


// search data start
let search_result=document.getElementsByClassName('search_result')[0];

song.forEach(element => {
    const {id,songName, poster}=element;
    // console.log(id);
    let card=document.createElement('a');
    card.classList.add('card');
    card.href="#"+id;

    card.innerHTML=` <img src="${poster}" alt="">
    <div class="content">
       ${songName}
    </div>`;
    search_result.appendChild(card); 
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let items=search_result.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
   
            let as=items[index].getElementsByClassName('content')[0];
            let text_value=as.textContent || as.innerHTML;

            if (text_value.toUpperCase().indexOf(input_value)>-1) {
                items[index].style.display='flex';
            } else {
                items[index].style.display='none';
                
            }
            if(input.value==0)
            {
                search_result.style.display='none';
            }
    }
})

// search data end


// avtivate play button

let musicPlay=document.getElementById('musicPlay');
let wave=document.getElementById('wave');

musicPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0)
    {
        music.play();   
        wave.classList.add('active1');
        musicPlay.classList.remove('bi-play-fill');
        musicPlay.classList.add('bi-pause-fill');
    }
    else
    {
        music.pause();
        wave.classList.remove('active1');
        musicPlay.classList.add('bi-play-fill');
        musicPlay.classList.remove('bi-pause-fill');
    }
})


// set play pause buttons

const makeAllPlays = ()=>
{
    Array.from(document.getElementsByClassName('playlisplay')).forEach(el=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

// set playing songs

const makeAllBackgrounds=()=>
{
    Array.from(document.getElementsByClassName('songItem')).forEach(el=>{
        el.style.background='rgba(183, 182, 182, 0.0)'
    })
}

// play playlist songs

let index=0;
let title=document.getElementById('title');
let poster=document.getElementById('poster');
let download=document.getElementById('download');
Array.from(document.getElementsByClassName('playlisplay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        // console.log(index);
        music.src=`audio/${index}.mp3`;
        music.play();
        musicPlay.classList.remove('bi-play-fill');
        musicPlay.classList.add('bi-pause-fill');
        poster.src=`img/${index}.jpg`;
        download.href=`audio/${index}.mp3`;
     
        // For changing title and posters in functional bar while play a song...

        let songTitle=song.filter(els =>{
            return els.id==index;
        });

        songTitle.forEach(elss=>{
            let {songName,poster}=elss; 
            title.innerHTML=songName;
            download.setAttribute('download',songName);
        });




        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgba(183, 182, 182, 0.1)';

        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
 

    }) ;
})

let currentStart=document.getElementById('currentStart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];



music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    // console.log(music_curr);
    let music_dur=music.duration;
    



    let min1=Math.floor(music_dur / 60);
    let sec1=Math.floor(music_dur % 60);

    // console.log(min1);
    if(sec1<10)
    {
        sec1=`0${sec1}`;
    }
    currentEnd.innerHTML=`${min1}:${sec1}`;


    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2<10)
    {
        sec2=`0${sec2}`;
    }
    currentStart.innerHTML=`${min2}:${sec2}`;


    let progressBar=parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    // console.log(seek.value);
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
})


// volume

let vol_id=document.getElementById('vol_id');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value==0)
    {
        vol_id.classList.remove('bi-volume-up-fill');
        vol_id.classList.remove('bi-volume-down-fill');
        vol_id.classList.add('bi-volume-mute-fill');

    }
    if(vol.value>0)
    {
        vol_id.classList.remove('bi-volume-up-fill');
        vol_id.classList.add('bi-volume-down-fill');
        vol_id.classList.remove('bi-volume-mute-fill');
    }
    if(vol.value>50)    
    {
        vol_id.classList.add('bi-volume-up-fill');
        vol_id.classList.remove('bi-volume-down-fill');
        vol_id.classList.remove('bi-volume-mute-fill');
    }

    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;

});

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index-=1;
    if(index<1)
    {
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`audio/${index}.mp3`;
    music.play();
    musicPlay.classList.remove('bi-play-fill');
    musicPlay.classList.add('bi-pause-fill');
    poster.src=`img/${index}.jpg`;
 
    // For changing title and posters in functional bar while play a song...

    let songTitle=song.filter(els =>{
        return els.id==index;
    });

    songTitle.forEach(elss=>{
        let {songName,poster}=elss; 
        title.innerHTML=songName;
        poster.src=poster;
    }); 
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgba(183, 182, 182, 0.1)';

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});

next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length)
    {
        index=1;
    }
    music.src=`audio/${index}.mp3`;
    music.play();
    musicPlay.classList.remove('bi-play-fill');
    musicPlay.classList.add('bi-pause-fill');
    poster.src=`img/${index}.jpg`;
 
    // For changing title and posters in functional bar while play a song...

    let songTitle=song.filter(els =>{
        return els.id==index;
    });

    songTitle.forEach(elss=>{
        let {songName,poster}=elss; 
        title.innerHTML=songName;
        poster.src=poster;
    }); 
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgba(183, 182, 182, 0.1)';

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});



//for popular songs 
let pop_songs_left=document.getElementById('pop_songs_left');
let pop_songs_right=document.getElementById('pop_songs_right');
let pop_songs=document.getElementsByClassName('pop_songs')[0];

pop_songs_right.addEventListener('click',() =>
{
    pop_songs.scrollLeft +=300;
})
pop_songs_left.addEventListener('click',() =>
{
    pop_songs.scrollLeft-=300;
})

//for Artists
let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let item=document.getElementsByClassName('item')[0];

console.log(item);

pop_art_left.addEventListener('click',()=>
{
    item.scrollLeft-=150;
}
)
pop_art_right.addEventListener('click',()=>
{
    item.scrollLeft+=150;
})

let shuffle=document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML;

    switch(a)
    {
        case "next":
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML='random';
            break;
        case "random":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='next';
            break;
    }
});



// function for next song
const next_music = ()=>
{
    index++;
    if(index>song.length)
    {
        index=1;
    }
    music.src=`audio/${index}.mp3`;
    music.play();
    musicPlay.classList.remove('bi-play-fill');
    musicPlay.classList.add('bi-pause-fill');
    poster.src=`img/${index}.jpg`;
    download.href=`audio/${index}.mp3`;
 
    // For changing title and posters in functional bar while play a song...

    let songTitle=song.filter(els =>{
        return els.id==index;
    });
    songTitle.forEach(elss=>{
        let {songName,poster}=elss; 
        title.innerHTML=songName;
        download.setAttribute('download',songName);
    });
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgba(183, 182, 182, 0.1)';

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

// function for repeat song

const repeat_music = ()=>
{
    index;
    music.src=`audio/${index}.mp3`;
    music.play();
    musicPlay.classList.remove('bi-play-fill');
    musicPlay.classList.add('bi-pause-fill');
    poster.src=`img/${index}.jpg`;
    download.href=`audio/${index}.mp3`;
 
    // For changing title and posters in functional bar while play a song...

    let songTitle=song.filter(els =>{
        return els.id==index;
    });
    songTitle.forEach(elss=>{
        let {songName,poster}=elss; 
        title.innerHTML=songName;
        download.setAttribute('download',songName);
    });
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgba(183, 182, 182, 0.1)';

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}


//function for play random songs
const random_music = ()=>
{
    // index;
    if(index==song.length)
    {
        index=1;
    }
    else
    {
        index=Math.floor((Math.random()*song.length)+1);
    }
    music.src=`audio/${index}.mp3`;
    music.play();
    musicPlay.classList.remove('bi-play-fill');
    musicPlay.classList.add('bi-pause-fill');
    poster.src=`img/${index}.jpg`;
    download.href=`audio/${index}.mp3`;
 
    // For changing title and posters in functional bar while play a song...

    let songTitle=song.filter(els =>{
        return els.id==index;
    });
    songTitle.forEach(elss=>{
        let {songName,poster}=elss; 
        title.innerHTML=songName;
        download.setAttribute('download',songName);
    });
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgba(183, 182, 182, 0.1)';

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}


music.addEventListener('ended',()=>
{
    let b=shuffle.innerHTML;
    switch (b) {
        case "repeat":
            repeat_music();
            break;
        case "next":
            next_music();
            break;
        case "random":
            random_music();
            break;  
    }
});
