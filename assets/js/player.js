! function (e, s, t, a, d, n, r) {
    e.smrtvds || (d = e.smrtvds = function () {
        d.callMethod ? d.callMethod.apply(d, arguments) : d.queue.push(arguments)
    }, 
    e._smrtvds || (e._smrtvds = d), 
    d.push = d, 
    d.loaded = !0, 
    d.version = "1.1", 
    d.queue = [], 
    (n = s.createElement("script")).async = !0, 
    n.src = "../", 
    s.getElementsByTagName("head")[0].appendChild(n))
}(window, document);
document.getElementById('vid_623a36da34cf0a000e72b9e5') || (function (w, d, s, c) {
    s = d.getElementById('scr_623a36da34cf0a000e72b9e5');
    c = d.createElement('DIV');
    c.id = 'vid_623a36da34cf0a000e72b9e5';
    s.parentElement.insertBefore(c, s);
})(window, document);
window.smrtvds('vid_623a36da34cf0a000e72b9e5', '135e8f05-a687-40a8-a51d-5774a721a9f9', '623a0a0a34cf0a000e72b937', {
    "autoplay": "smartplay",
    "theme": "#1890FF",
    "foreground_color": "#FFFFFF",
    "video": {},
    "cdn": "cdn.converteai.net",
    "domains": [],
    "displays": {
        "big_play": true,
        "play_pause": true,
        "backward": false,
        "forward": false,
        "volume": false,
        "volume_bar": false,
        "time": false,
        "fullscreen": false,
        "seekbar": false,
        "seekbar_time": false,
        "speed": true
    },
    "callAction": [],
    "resume": true,
    "fake_bar": true,
    "smartplay_options": {
        "top_text": "Seu vídeo já começou",
        "bottom_text": "Clique para ouvir",
        "foreground_color": "#FFFFFF",
        "background_color": "rgba(24,144,255,0.7)"
    },
    "resume_options": {
        "play": "Continuar assistindo?",
        "title": "Você já começou a assistir esse vídeo",
        "replay": "Assistir do início?",
        "disable_pause": false,
        "foreground_color": "#FFFFFF",
        "background_color": "#4A90E2"
    },
    "fake_bar_options": {
        "height": 10
    }
});