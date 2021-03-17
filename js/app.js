// 組み合わせると
$(function () {
    // この中に記述
    // $("#a").on("click", function(){
    //     // alert(1);  

    //     // jQueryの操作でCSSを動かす
    //     // $("#a").css("color", "blue")  
        
    //     // jQueryの操作でHTMLを動かす
    //     // $("#a").append("追加されました")
    //     // $("#a").prepend("追加されました")

    // });
    
    $("#hide").on("click", function(){
            $(".ex").fadeOut(2000);
        });
        
    var count = 0; 

    $("#show").on("click", function(){
            count++;
            $(".ex").fadeIn(2000);
            $(".ex").html(count);
            $(".ex").css("border", `solid red ${count}`);
        });

    // $(".test").slick();

    $(".test").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      });
    // この下は消しちゃダメ
  });

  