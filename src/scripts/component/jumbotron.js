class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero">
              <!--<img src="./images/hero-image_4.jpg" alt="Jumbotron">-->
              <picture>
                <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
                <img src='./images/hero-image_4-large.jpg' alt="Jumbotron">
              </picture>
              
              <div class="hero__inner">
                  <p class="hero__tagline1">Satisfy Your Inner Monster!</p>
                  <p class="hero__tagline2">Savor the Moment, Indulge in Flavors</p>
              </div>
            </div>
          `;
  }
}

customElements.define('jumbotron-element', Jumbotron);
