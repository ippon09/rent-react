 
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: true
      },
      
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    // Clean up the Swiper instance on component unmount
    return () => {
      swiper.destroy();
    };
  }, []); // Пустой массив зависимостей, чтобы эффект сработал только один раз после монтирования
