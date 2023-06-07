class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="mobile_container">
                <div class="nameapp_mobile"><span>H</span>amry <span>M</span>onster</div>
                <button id="hamburger">&#9776;</button>
            </div>

            <nav id="drawer">
                <div class="nameapp"><span>H</span>amry <span>M</span>onster</div>
                <ul>
                    <li class="drawer__item"><a href="#/list">Home</a></li>
                    <li class="drawer__item"><a href="#/like">Favorite</a></li>
                    <li class="drawer__item"><a href="https://www.linkedin.com/in/ilhamptrr/">About Us</a></li>
                </ul>
            </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
