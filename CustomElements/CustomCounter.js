class CustomCounter extends HTMLElement {
  static get observedAttributes() {
    return ["data-step", "data-initialValue"];
  }

  // define attribute to perform operation
  countElement;
  incrementBtn;
  decrementBtn;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.innerHTML = `<br><br><br>
      <button id="decrement">-</button>
      <span id="currentValue">0</span>
      <button id="increment">+</button>
    `;
    this.countElement = this._shadowRoot.querySelector("#currentValue");
    this.incrementBtn = this._shadowRoot.querySelector("#increment");
    this.decrementBtn = this._shadowRoot.querySelector("#decrement");
  }
  //getter setter for initialValue and step
  get initialValue() {
    return this.getAttribute("data-initialValue");
  }
  set initialValue(value) {
    if (value) {
      this.setAttribute("data-initialValue");
    } else {
      this.removeAttribute("data-initialValue");
    }
  }
  get step() {
    return this.getAttribute("data-step");
  }
  set step(value) {
    if (value) {
      this.setAttribute("data-step");
    } else {
      this.removeAttribute("data-step");
    }
  }

  connectedCallback() {
    this.count = this.initialValue || 0;
    this.countElement.innerHTML = this.count;

    this.incrementBtn.addEventListener("click", this.incrementMethod.bind(this))
    this.decrementBtn.addEventListener("click", this.decrementMethod.bind(this))

  }
  attributeChangedCallback(name, oldValue, newValue){

  }
  incrementMethod(){
    this.count = +this.count + +this.step
    this.countElement.innerText = this.count;
  }
  decrementMethod(){
    this.count = this.count - this.step
    this.countElement.innerText = this.count;
  }

  disconnectedCallback(){
    this.incrementBtn.removeEventListener("click", this.incrementMethod.bind(this))
    this.decrementBtn.removeEventListener("click", this.decrementMethod.bind(this))
  }
}

customElements.define("custom-counter", CustomCounter);
