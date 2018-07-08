$(document).ready(function(){
   $('button#remplir').click(function(){
        $('div.rond').css('background', 'aqua');
        $('div.carre1').css('background', 'aqua');
        $('div.carre2').css('background', 'aqua');
        $('div.carre3').css('background', 'aqua');
        $('div.carre4').css('background', 'aqua');
        $('div#losange').css('background', 'aqua');
   });
});

$(document).ready(function(){
   $('button#vider').click(function(){
        $('div.rond').css('background', 'white');
        $('div.carre1').css('background', 'white');
       $('div.carre2').css('background', 'white');
       $('div.carre3').css('background', 'white');
       $('div.carre4').css('background', 'white');
        $('div#losange').css('background', 'white');
   });
});

$(document).ready(function(){
   $('.carre1').click(function(){
      $('.c2, .c1, .c3, .c4, .c5, .c6, .c11, .c16, .c21').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.carre2').click(function(){
      $('.c6, .c2, .c7, .c8, .c9, .c10, .c12, .c17, .c22').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.carre3').click(function(){
      $('.c16, .c17, .c18, .c19, .c20, .c4, .c9, .c14, .c24').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.carre4').click(function(){
      $('.c21, .c22, .c23, .c24, .c25, .c20, .c15, .c10, .c5').toggleClass('color');
   });
});

$(document).ready(function(){
   $('#losange').click(function(){
      $('.c3, .c8, .c11, .c12, .c13, .c14, .c15, .c18, .c23').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c2').click(function(){
      $('.c2').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c3').click(function(){
      $('.c3').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c4').click(function(){
      $('.c4').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c5').click(function(){
      $('.c5').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c6').click(function(){
      $('.c6').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c8').click(function(){
      $('.c8').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c9').click(function(){
      $('.c9').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c10').click(function(){
      $('.c10').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c11').click(function(){
      $('.c11').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c12').click(function(){
      $('.c12').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c14').click(function(){
      $('.c14').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c15').click(function(){
      $('.c15').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c16').click(function(){
      $('.c16').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c17').click(function(){
      $('.c17').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c18').click(function(){
      $('.c18').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c20').click(function(){
      $('.c20').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c21').click(function(){
      $('.c21').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c22').click(function(){
      $('.c22').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c23').click(function(){
      $('.c23').toggleClass('color');
   });
});

$(document).ready(function(){
   $('.c24').click(function(){
      $('.c24').toggleClass('color');
   });
});
