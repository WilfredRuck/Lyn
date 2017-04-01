 $(".images div").slice(5).hide();

 var mincount = 5;
 var maxcount = 20;

 $(window).scroll(function () {
     if ($(window).scrollTop() + $(window).height() >= $(document).height() - 5) {
         $(".images div").slice(mincount, maxcount).slideDown(100);

         mincount = mincount + 10;
         maxcount = maxcount + 10
     }
 });