class Carousel {
  constructor(carouselElement) {
    // getting the carousel Element
    this.carouselElement = carouselElement;

    // getting the reference to left button
    this.leftButton = document.querySelector(".left-button");
    console.log(
      "---------this.left button -------" + this.leftButton.classList
    );

    // getting the reference to right button
    this.leftButton = document.querySelector(".right-button");

    // get the images in an Array
    this.images = Array.from(document.querySelectorAll("img")).map(image => {
      console.log("-----------images ---------" + image.innerHTML);
      this.image = new Image(image);
      return this.image;
    });

    this.leftButton.style.cursor = "pointer";
    this.leftButton.onClick = function() {};
    // this.leftButton.addEventListener("click", () => {
    //   console.log("------clicking left button -------------");
    // });

    // this.rightButton.addEventListener("click", () => {
    //   console.log("------clicking right button -------------");
    // });
  }
}

class Image {
  constructor(image) {
    console.log("----------------within image constructor -----------");
    this.image = image;
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
