var video = document.getElementById('videoplayer');

document.getElementById('play').onclick =function()
{
   video.play();
};

document.getElementById('pause').onclick =function ()
{
    video.pause();
};

document.getElementById('mute').onclick =function ()
{
    if(video.muted === true)
    {
        video.muted = false;
        document.querySelector('#mute').innerHTML ='Mute';
    }
    else
    {
        video.muted = true;
        document.querySelector('#mute').innerHTML ='Unmute';
    }
};

document.getElementById('faster').onclick =function () 
{
    if(document.querySelector('#videoplayer').playbackRate ===2)
    {
        alert("The playback speed cannot be increased further.Video is currently at its fastest speed.");
    }
    else{
        document.querySelector('#videoplayer').playbackRate *=2;
    }
}

document.getElementById('slower').onclick =function() 
{
    if(document.querySelector('#videoplayer').playbackRate ===0.5)
    {
        alert("Video is at fastest speed!");
    }
    else
    {
        document.querySelector('#videoplayer').playbackRate *=0.5;
    }
}


document.getElementById('skip').onclick =function ()
{
    if(document.querySelector('#videoplayer').currentTime >= 67)
    {
        alert("Reached end of video");
        video.currentTime ===0;
        video.play()
    }
    else
    {
        video.currentTime +=15;
    }
    
}  

video.addEventListener('ended', function()
    {
        video.currentTime =0;
    }
);

var output = document.getElementById('volume');

var volume = document.getElementById('slider');


output.innerHTML = slider.value;

slider.oninput =function()
{
    output.innerHTML =this.value;
}
var setVolume =function()
{
      video.volume =this.value /100;
};
  
volume.addEventListener('change',setVolume);
volume.addEventListener('input',setVolume);