class CustomButton extends HTMLElement {
  constructor() {
    super();

    //1. create shadow root
    this._shadowRoot = this.attachShadow({ mode: "open" });

    //2. Create custom element with functionalities like label, id and more like here button has been created
    const button = document.createElement("button");
    button.textContent = this.getAttribute("label") || "Submit";
    button.style.cssText = this.getAttribute("style") || "";
    button.id = this.getAttribute("id") || "";

    //3. attach it with _shadowRoot
    this._shadowRoot.appendChild(button);

    //4. add event listeners to perform action

    button.addEventListener("click", (e) => {
      const clickEvent = new CustomEvent("button-click", {
        detail: {
          id: button.id,
          label: button.textContent,
        },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(clickEvent);
    });
  }
}

customElements.define("custom-button", CustomButton);
