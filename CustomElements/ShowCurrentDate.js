class CurrentDate extends HTMLElement {
  connectedCallback() {
    const now = new Date();
    this.textContent = now.toLocaleDateString();
    this.style.color="red";
    
  }
}

customElements.define("custom-date", CurrentDate);
