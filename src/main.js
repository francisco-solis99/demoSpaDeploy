import './style.css'
import { routes } from "./router/routes.js";
import Router from "./router/router.js";

const myRouter = new Router(routes);

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    myRouter.loadRoute(e.target.dataset.path);
  });
});
