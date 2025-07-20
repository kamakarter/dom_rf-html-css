document.addEventListener('DOMContentLoaded', function() {
    // Получаем все карточки с слайдерами
    const cards = document.querySelectorAll('.house_categories_card');
    
    cards.forEach(card => {
        const sliderContainer = card.querySelector('.house_categories_slider_container');
        const dots = card.querySelectorAll('.house_categories_slider_dot');
        const images = card.querySelectorAll('.house_categories_slider_image');
        let currentIndex = 0;
        
        // Функция обновления слайдера
        function updateSlider() {
            sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Обновляем активную точку
            dots.forEach((dot, index) => {
                dot.classList.toggle('house_categories_slider_dot_active', index === currentIndex);
            });
        }
        
        // Автоматическая прокрутка
        let interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        }, 3000);
        
        // Обработчики для точек
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
                // Сброс интервала при ручном переключении
                clearInterval(interval);
                interval = setInterval(() => {
                    currentIndex = (currentIndex + 1) % images.length;
                    updateSlider();
                }, 3000);
            });
        });
        
        // Остановка автоматической прокрутки при наведении
        const sliderElement = card.querySelector('.house_categories_slider');
        sliderElement.addEventListener('mouseenter', () => {
            clearInterval(interval);
        });
        
        sliderElement.addEventListener('mouseleave', () => {
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                updateSlider();
            }, 3000);
        });
    });
});

// // старый код слайдера для одной карточки категории дома

// document.addEventListener('DOMContentLoaded', function() {
//             const slider = document.querySelector('.house_categories_slider_container');
//             const dots = document.querySelectorAll('.house_categories_slider_dot');
//             const images = document.querySelectorAll('.house_categories_slider_image');
//             let currentIndex = 0;
            
//             // Функция обновления слайдера
//             function updateSlider() {
//                 slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                
//                 // Обновляем активную точку
//                 dots.forEach((dot, index) => {
//                     dot.classList.toggle('house_categories_slider_dot_active', index === currentIndex);
//                 });
//             }
            
//             // Автоматическая прокрутка
//             let interval = setInterval(() => {
//                 currentIndex = (currentIndex + 1) % images.length;
//                 updateSlider();
//             }, 3000);
            
//             // Обработчики для точек
//             dots.forEach((dot, index) => {
//                 dot.addEventListener('click', () => {
//                     currentIndex = index;
//                     updateSlider();
//                     // Сброс интервала при ручном переключении
//                     clearInterval(interval);
//                     interval = setInterval(() => {
//                         currentIndex = (currentIndex + 1) % images.length;
//                         updateSlider();
//                     }, 3000);
//                 });
//             });
            
//             // Остановка автоматической прокрутки при наведении
//             const sliderContainer = document.querySelector('.house_categories_slider');
//             sliderContainer.addEventListener('mouseenter', () => {
//                 clearInterval(interval);
//             });
            
//             sliderContainer.addEventListener('mouseleave', () => {
//                 interval = setInterval(() => {
//                     currentIndex = (currentIndex + 1) % images.length;
//                     updateSlider();
//                 }, 3000);
//             });
//         });


