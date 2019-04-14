// This is a Carousel component. The Carousel can have any number of image and the carousel will show the images
// one after the other based on the button clicked.
class Carousel {
  constructor(carouselElement) {
    // getting the carousel Element
    this.carouselElement = carouselElement;

    // getting the reference to left button
    this.leftButton = document.querySelector(".left-button");

    // getting the reference to right button
    this.rightButton = document.querySelector(".right-button");

    //Gets all the images for carousel and creates an Image object.
    this.images = Array.from(document.querySelectorAll(".carousel img")).map(
      image => {
        this.tabImage = new Image(image);
        return this.tabImage;
      }
    );

    // setting the counter
    let count = 0;

    //On right button click
    this.rightButton.addEventListener("click", () => {
      count = count + 1;
      count = this.displayImage(count);
    });

    //On left button click
    this.leftButton.addEventListener("click", () => {
      count = count - 1;
      count = this.displayImage(count);
    });
  }

  // This method checks the value of the counter and displays the appropriate image.
  displayImage(count) {
    if (count >= this.images.length) {
      count = 0;
    } else if (count <= -1) {
      count = this.images.length - 1;
    }
    this.images.forEach(image => {
      image.imageElement.classList.remove("img-active");
    });
    this.images[count].imageElement.classList.toggle("img-active");
    return count;
  }
}

// Constructor class for Image object
class Image {
  constructor(image) {
    this.imageElement = image;
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
