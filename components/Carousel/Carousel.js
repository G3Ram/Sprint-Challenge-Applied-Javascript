class Carousel {
  constructor(carouselElement) {
    // getting the carousel Element
    this.carouselElement = carouselElement;

    // getting the reference to left button
    this.leftButton = document.querySelector(".left-button");

    // getting the reference to right button
    this.rightButton = document.querySelector(".right-button");

    this.images = Array.from(document.querySelectorAll(".carousel img")).map(
      image => {
        this.tabImage = new Image(image);
        return this.tabImage;
      }
    );

    let count = 0;
    this.rightButton.addEventListener("click", () => {
      if (count === this.images.length - 1) {
        count = -1;
      }
      count = count + 1;
      this.images.forEach(image => {
        image.imageElement.classList.remove("img-active");
      });
      this.images[count].imageElement.classList.toggle("img-active");
    });

    this.leftButton.addEventListener("click", () => {
      count = count - 1;
      if (count === -1) {
        count = 3;
      }
      this.images.forEach(image => {
        image.imageElement.classList.remove("img-active");
      });
      this.images[count].imageElement.classList.toggle("img-active");
    });
  }
}

class Image {
  constructor(image) {
    this.imageElement = image;
  }

  displayImage() {
    this.image.classList.toggle("image-active");
  }
}

let carousel = new Carousel(document.querySelector(".carousel"));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
