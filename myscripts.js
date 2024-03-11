// document.querySelectorAll('.carousel-tabs button').forEach((button, index) => {
//     button.addEventListener('click', () => {
//       const currentImage = document.querySelector('.carousel-images .active');
//       const currentInfo = document.querySelector('.carousel-info .info-content.active');

//       currentImage.classList.remove('active');
//       currentInfo.classList.remove('active');

//       document.querySelectorAll('.carousel-images img')[index].classList.add('active');
//       document.querySelectorAll('.carousel-info .info-content')[index].classList.add('active');
//     });
//   });

function changeImageAndText(num) {
  // Hide all images and text
  const images = document.querySelectorAll(".image-container img");
  const texts = document.querySelectorAll(".text-container p");
  const texths = document.querySelectorAll(".text-container h3");
  images.forEach((img) => (img.style.display = "none"));
  texts.forEach((text) => (text.style.display = "none"));
  texths.forEach((texthead) => (texthead.style.display = "none"));

  // Show the selected image and text
  const image = document.getElementById(`image${num}`);
  const text = document.getElementById(`text${num}`);
  const texth = document.getElementById(`texth${num}`);
  image.style.display = "block";
  text.style.display = "block";
  texth.style.display = "block";
}

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
//   const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
//   slideButtons.forEach(button => {
//       button.addEventListener("click", () => {
//           const direction = button.id === "prev-slide" ? -1 : 1;
//           const scrollAmount = imageList.clientWidth * direction;
//           imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       });
//   });

   // Show or hide slide buttons based on scroll position
//   const handleSlideButtons = () => {
//       slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
//       slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
//   }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
    //   handleSlideButtons();
  });
}



    // When the user scrolls down 600px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            document.getElementById("topBtn").style.display = "block";
        } else {
            document.getElementById("topBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
