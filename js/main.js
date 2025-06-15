$(window).on('scroll', function () {
    $('.fade-in').each(function () {
      const elemPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
  
      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass('show');
      } else {
        $(this).removeClass('show'); // ← 表示領域から外れたら消す
      }
    });
  });