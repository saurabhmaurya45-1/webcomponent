import "../Components/Button.js";

class CustomCounter extends HTMLElement {
  // setting observer for attribute which need to be observed
  static get observedAttributes() {
    return ["data-step", "data-initialValue"];
  }

  countElement;
  incrementBtn;
  decrementBtn;
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.innerHTML = `
      <custom-button label="-" id="decrement" style="font-size:26px;border-radius:8px; background:green;color:white"></custom-button>
      <span id="currentValue" style="font-size:26px;"></span>
      <custom-button label="+" id="increment" style="font-size:26px;border-radius:8px; background:green;color:white"></custom-button>
    `;

    this.countElement = this._shadowRoot.querySelector("#currentValue");
  }

  //getters and setters for initialValue and step
  get initialValue() {
    return parseInt(this.getAttribute("data-initialValue") || 0, 10);
  }
  set initialValue(val) {
    if (val) {
      this.setAttribute("data-initialValue", val);
    } else {
      this.removeAttribute("data-initialValue");
    }
  }
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

  //
  connectedCallback() {
    this.count = this.initialValue || 0;
    this.countElement.textContent = this.count;
    //add event listeners for increment and decrement
    this.incrementBtn = this._shadowRoot.querySelector("#increment");
    this.incrementBtn.addEventListener(
      "button-click",
      this._increment.bind(this)
    );
    this.decrementBtn = this._shadowRoot.querySelector("#decrement");
    this.decrementBtn.addEventListener(
      "button-click",
      this._decrement.bind(this)
    );
  }

  _increment() {
    this.count += 1;
    this.countElement.textContent = this.count;
  }
  _decrement() {
    this.count -= this.step;
    this.countElement.textContent = this.count;
  }

  disconnectedCallback() {
    this.incrementBtn.removeEventListener(
      "button-click",
      this._increment.bind(this)
    );
    this.decrementBtn.removeEventListener(
      "button-click",
      this._decrement.bind(this)
    );
  }
}

customElements.define("custom-counter", CustomCounter);
