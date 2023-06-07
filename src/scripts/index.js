import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './component/app-bar';
import './component/jumbotron';
import './component/copyright';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
  hamburger: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('.hero'),
  main: document.querySelector('main'),
});

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#maincontent');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
