

function loadMore(){$('#more').show()
$('.fb-comments-loadmore').hide().remove()}
$(document).ready(function(){$('date').each(function(){if($(this).attr('data-date-minus')){$(this).html(dateMinus($(this).attr('data-date-minus')))}})})
function dateMinus(what){var today=Date.now()
var nw=today-what*10000
var newd=new Date()
newd.setTime(nw)
var mthName=['Janeiro','Fevereiro','MarÃ§o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
var mthNm=mthName[newd.getMonth()]
return(newd.getDate()+
' de '+
mthNm+
' de '+
newd.getFullYear()+
' '+
newd.getHours()+
':'+
round(newd.getMinutes()))}
function round(what){if(what<10){return '0'+what}else{return what}}
$('like').on('click',function(){if($(this).hasClass('liked')){$(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text(parseInt($(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text())-1)
$(this).removeClass('liked')
$(this).text('Curtir')}else{$(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text(parseInt($(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text())+1)
$(this).addClass('liked')
$(this).text('Descurtir')}})
$('reply').on('click',function(){if(fbobj!=null){handleReply($(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').attr('id'))}else{logInWithFacebook(handleReply,$(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').attr('id'))}})
function handleReply(id){var text=''
var obj=$('#'+id)
if(obj.hasClass('fb-comments-reply-wrapper')){text='@'+obj.find('name').text()
obj=$('#'+id.split('-')[0])}
obj.find('.row.reply-box').remove()
obj.append('<div class="row reply-box" id="reply-'+
obj.attr('id')+
'"><div class="col-xs-10"><input type="text" value="'+
text+
'" placeholder="AÃ±ade una respuesta..." class="fb-reply-input" /></div><div class="col-xs-2"><button class="fb-reply-button" onclick="javascript:postReply('+
obj.attr('id')+
');">Responder</button></div></div>')}
function postReply(id){var obj=$('#reply-'+id)
if(obj&&obj.find('.fb-reply-input').val()){var date=new Date()
var fbreply={forid:id,date:date,text:obj.find('.fb-reply-input').val()}
fbreplies.push(fbreply)
var replyc=reply.clone()
replyc.attr('id',id+'-'+Math.floor(Math.random()*100+10))
replyc.find('name').text(fbobj.name)
replyc.find('.fb-comments-comment-img').find('img').attr('src',fbobj.pictureURL)
replyc.find('.fb-comments-comment-text').text(obj.find('.fb-reply-input').val())
replyc.find('date').each(function(){if($(this).attr('data-date-minus')){$(this).html(dateMinus($(this).attr('data-date-minus')))}})
$('#'+id).after(replyc)
obj.remove()
var today=new Date()
today.setDate(today.getFullYear()+1)
setCookie('fbreplies',JSON.stringify(fbreplies),today)}}
setTimeout(function(){$('#add-to-cart').show()},20000)
var today=new Date()
today.setDate(today.getFullYear()+1)

/*  // 2. This code loads the IFrame Player API code asynchronously. */
var tag = document.createElement('script');
var sessaoStateChange = 0;

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/*  // 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads. */
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'wB8YkcI2-50',
    playerVars: {
      'playsinline': 1,
      'controls': 0,
      'modestbranding': 1,
      'autoplay': 1,
      'rel': 0,
      'disablekb': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

/* // 4. The API will call this function when the video player is ready. */
function onPlayerReady(event) {
  event.target.playVideo();
}

/*  // 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop. */
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
   /*  setTimeout(stopVideo, 6000); */
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
/* 
function soltaOPlay() {
  player.playVideo();
} */

function soltaOPlay() {
  document.querySelector( ".ytp-large-play-button" ).classList.toggle( "disable-Btn" );
  document.querySelector( ".ytp-large-pause-button" ).classList.toggle( "enable-Btn" );
  player.playVideo();
}

function tacaOPause() {
  document.querySelector( ".ytp-large-play-button" ).classList.toggle( "disable-Btn" );
  document.querySelector( ".ytp-large-pause-button" ).classList.toggle( "enable-Btn" );
  player.pauseVideo();
}

function sessaoDaTarde() {
  /* // var sessaoStateChange; */
  switch(sessaoStateChange) {
    case 0:
      /* // document.querySelector( ".ytp-large-play-button" ).classList.toggle( "disable-Btn" );
      // document.querySelector( ".ytp-large-pause-button" ).classList.toggle( "enable-Btn" ); */
      player.playVideo();
      sessaoStateChange = 1;
      document.querySelector( ".ytp-large-pause-button" ).classList.replace( "invisivel", "visivel" );
      document.querySelector( ".ytp-large-play-button" ).classList.replace( "enable-Btn", "disable-Btn" );
      document.querySelector( ".ytp-large-pause-button" ).classList.replace( "disable-Btn", "enable-Btn" );
      setTimeout(paused, 800);
      function paused() {
        document.querySelector( ".ytp-large-pause-button" ).classList.replace( "visivel", "invisivel" );
      }
      /* // document.getElementsByClassName( ".ytp-large-play-button" ) */
      break;
    case 1:
      /* // document.querySelector( ".ytp-large-play-button" ).classList.toggle( "disable-Btn" );
      // document.querySelector( ".ytp-large-pause-button" ).classList.toggle( "enable-Btn" ); */
      player.pauseVideo();
      sessaoStateChange = 0;
      document.querySelector( ".ytp-large-pause-button" ).classList.replace( "invisivel", "visivel" );
      document.querySelector( ".ytp-large-pause-button" ).classList.replace( "enable-Btn", "disable-Btn" );
      document.querySelector( ".ytp-large-play-button" ).classList.replace( "disable-Btn", "enable-Btn" );
      break;
  }
}

setTimeout(() => {
    window.scrollTo(0,0);
    document.querySelector(".headerbtn").style.display = "block";
    document.querySelector(".cardb").style.display = "block";
    document.querySelector(".cardb1").style.display = "block";
    document.querySelector("#aboutme").style.display = "flex";
    document.querySelector("#provasocial").style.display = "block";
    document.querySelector("#provasocial1").style.display = "block";
    document.querySelector("como-funciona").style.display = "block";
    document.querySelector("bonus").style.display = "block";
    document.querySelector("garantia").style.display = "block";
    document.querySelector("#rodape-m14").style.display = "flex";
    /* document.querySelector("comments").style.display = "none"; */
  }, 1096200);
// setCookie('returningVisitor','yes',today)