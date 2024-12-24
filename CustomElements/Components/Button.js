class CustomButton extends HTMLElement {
  get observedAttributes() {
    return ["style", "label", "id"];
  }
  button;
  constructor() {
    super();
    //1. create shadow root
    this._shadowRoot = this.attachShadow({ mode: "open" });
    //2. Create custom element with functionalities like label, id and more like here button has been created
    this.button = document.createElement("button");

    //3. attach it with _shadowRoot
    this._shadowRoot.appendChild(this.button);

    //4. add event listeners to perform action

    this.button.addEventListener("click", (e) => {
      const clickEvent = new CustomEvent("button-click", {
        detail: {
          id: this.button.id,
          label: this.button.textContent,
        },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(clickEvent);
    });
  }

  connectedCallback() {
    this.button.textContent = this.getAttribute("label") || "Submit";
    this.button.style.cssText = this.getAttribute("style") || "";
    this.button.id = this.getAttribute("id") || "";
  }
}

customElements.define("custom-button", CustomButton);
