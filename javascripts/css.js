// sets <footer> style
function setHeaderStyle(){
  $("header").css({
    "background-color": "orange",
    "font-size": "0.5in"
  });
}

function setFooterStyle(){
  $("footer").css({
    "background-color": "orange",
    "font-size": "0.5in"
  });
}

// sets <main> height
function setMainHeight(){
  var w  = $(window).height();
  var h  = $("header").height();
  var f  = $("footer").height();
  var p2 = setMainPadding() * 2;
  var nonMainHeight = h + f + p2;
  return w - nonMainHeight;
}

// sets <main> padding
function setMainPadding(){
  return 72;
}

// sets <main> style
function setMainStyle(){
  $("main").css({
    "background-color": "green",
    "height": setMainHeight(),
    "padding": setMainPadding()
  });
}

// sets .main-well style
function setMainWellStyle(){
  $(".main-well").css({
    "background-color": "pink",
    "height": setMainHeight()
  });
}

// sets style(s) on page
function setStyles(){
  setHeaderStyle()
  setFooterStyle();
  setMainStyle();
  setMainWellStyle();
}

// sets style(s) on window resize
function setStylesOnWindowResize(){
  $(window).resize(function(){
    setStyles();
  });
}

$(document).ready(function(){
  setStyles();
  setStylesOnWindowResize();
});
