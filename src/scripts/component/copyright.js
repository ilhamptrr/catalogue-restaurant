class Copyright extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="copyright">Hamry Monster &#169; 2023</div>
    `;
  }
}

customElements.define('copy-right', Copyright);
