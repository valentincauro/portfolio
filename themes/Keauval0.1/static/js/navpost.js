var whenScrlBottom = function() {
  var win_h = (self.innerHeight) ? self.innerHeight : document.body.clientHeight;    // gets window height

  var scrl_pos = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;

  if (document.body.scrollHeight <= (scrl_pos + win_h)) {
    document.getElementById('navright').classList.remove("collapse");
    document.getElementById('navleft').classList.remove("collapse");
  }
  else{
    document.getElementById('navright').classList.add("collapse");
    document.getElementById('navleft').classList.add("collapse");

  }
}

window.onscroll = whenScrlBottom;
