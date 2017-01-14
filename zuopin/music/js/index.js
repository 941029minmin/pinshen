function resize(originSize,type) {
    var type=type||"x";
    if(type=="x"){
        var width = document.documentElement.clientWidth;
        var scale = width / originSize * 100;
    }else if(type=="y"){
        var height = document.documentElement.clientHeight;
        var scale = width / originSize * 100;
    }
    document.getElementsByTagName("html")[0].style.fontSize = scale+"px";
}

window.onload = function() {
    resize(750);
     var tabsSwiper = new Swiper('#tabs-container',{
    speed:500,
    onSlideChangeStart: function(){
      $(".tabs .active").removeClass('active')
      $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active')  
    }
  })
  $(".tabs a").on('touchstart mousedown',function(e){
    e.preventDefault()
    $(".tabs .active").removeClass('active')
    $(this).addClass('active')
    tabsSwiper.slideTo( $(this).index() )
  })
  $(".tabs a").click(function(e){
    e.preventDefault()
  })
  
}