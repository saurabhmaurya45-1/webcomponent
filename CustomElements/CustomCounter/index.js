import "../Components/Button.js"

class CustomCounter extends HTMLElement {
  // Observed attributes
  static get observedAttributes() {
    return ["data-step", "data-initialvalue"];
  }

  countElement;
  incrementBtn;
  decrementBtn;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: "open"});

    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");


    // Create and configure elements
    this.incrementBtn = document.createElement("custom-button");
    this.incrementBtn.setAttribute("label", "+");
    this.incrementBtn.setAttribute(
      "style",
      "font-size:26px;border-radius:8px;background:green;color:white;"
    );
    this.incrementBtn.setAttribute("id", "increment");

    this.decrementBtn = document.createElement("custom-button");
    this.decrementBtn.setAttribute("label", "-");
    this.decrementBtn.setAttribute(
      "style",
      "font-size:26px;border-radius:8px;background:green;color:white;"
    );
    this.decrementBtn.setAttribute("id", "decrement");

    this.countElement = document.createElement("span");
    this.countElement.setAttribute("id", "currentValue");
    this.countElement.setAttribute("style", "font-size:26px;");
    this.countElement.textContent = this.initialValue || 0;

    // Append elements to the custom counter
    wrapper.appendChild(this.decrementBtn);
    wrapper.appendChild(this.countElement);
    wrapper.appendChild(this.incrementBtn);
    console.log(wrapper);
    shadowRoot.appendChild(wrapper)
    // Bind event listeners
    this._increment = this._increment.bind(this);
    this._decrement = this._decrement.bind(this);
  }

  // Getter and setter for `data-step`
  get step() {
    return parseInt(this.getAttribute("data-step") || 1, 10);
  }
  set step(val) {
    if (val) {
      this.setAttribute("data-step", val);
    } else {
      this.removeAttribute("data-step");
    }
  }

  // Getter and setter for `data-initialValue`
  get initialValue() {
    return parseInt(this.getAttribute("data-initialvalue") || 0, 10);
  }
  set initialValue(val) {
    if (val) {
      this.setAttribute("data-initialvalue", val);
    } else {
      this.removeAttribute("data-initialvalue");
    }
  }

  // When the component is added to the DOM
  connectedCallback() {
    this.count = this.initialValue || 0;
    this.countElement.textContent = this.count;

    // Add event listeners
    this.incrementBtn.addEventListener("button-click", this._increment);
    this.decrementBtn.addEventListener("button-click", this._decrement);
  }

  // When the component is removed from the DOM
  disconnectedCallback() {
    this.incrementBtn.removeEventListener("button-click", this._increment);
    this.decrementBtn.removeEventListener("button-click", this._decrement);
  }

  // Increment the count
  _increment() {
    this.count += this.step;
    this.countElement.textContent = this.count;
  }

  // Decrement the count
  _decrement() {
    this.count -= this.step;
    this.countElement.textContent = this.count;
  }

  // Handle observed attribute changes
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === "data-step") {
        this.step = parseInt(newValue || 1, 10);
      } else if (name === "data-initialvalue") {
        this.count = parseInt(newValue || 0, 10);
        if (this.countElement) {
          this.countElement.textContent = this.count;
        }
      }
    }
  }
}

// Define the custom counter element
customElements.define("custom-counter", CustomCounter);
