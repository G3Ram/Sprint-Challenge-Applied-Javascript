/*
 *  TabLink is a constructor to create TabLink objects. For every tab in the screen this object will be created. One TabLink
 *  object will be created for every tabData value.
 *
 *  @properties
 *   tabElement - Refers to the DOM tab element
 *   tabData - contains the data-tab value for each data - All, Javascript, Technology, Node.JS, JQuery or Bootstrap
 *   cards - Based on the tabData the appropriate cards will be created. This is an array object containing TabCards objects.
 *
 *  @Method
 *   selectTab - This method shows the cards on the screen based on the tab clicked.
 *
 */

class TabLink {
  constructor(tabElement) {
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;

    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:
    if (this.tabData === "all") {
      this.cards = document.querySelectorAll(`.card[data-tab]`);
    } else {
      this.cards = document.querySelectorAll(
        `.card[data-tab="${this.tabData}"]`
      );
    }
    // Map over the newly converted NodeList we just created in our if statement above.
    //Convert each this.cards element into a new instance of the TabCard class.
    //Pass in a card object to the TabCard class.
    this.cards = Array.from(this.cards).map(card => {
      this.tabCard = new TabCard(card);
      return this.tabCard;
    });

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener("click", () => {
      this.selectTab();
    });
  }

  selectTab() {
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(".tab");

    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => {
      tab.classList.remove("active-tab");
    });

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(".card");

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => {
      card.style.display = "none";
    });

    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.toggle("active-tab");

    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class.
    // Just un-comment the code and study what is happening here.
    this.cards.forEach(card => {
      card.selectCard();
    });
  }
}

/*
 * This class represents the class=card object in the DOM.
 *
 * @properties
 *  cardElement = respresents the DOM class = card elements
 *
 * @Method
 *  selectCard() - This card sets the display style to flex so the items are row wrapped
 *
 */
class TabCard {
  constructor(cardElement) {
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard() {
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = "flex";
  }
}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/

// Creating objects for each tab. Invoking the TabLink constructor for each tab.

let tabs = document.querySelectorAll(".tab").forEach(tab => {
  new TabLink(tab);
});
