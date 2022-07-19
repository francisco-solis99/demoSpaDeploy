export default function Router(routes) {
  this.routes = routes;
  this.loadInitialRoute();
}

Router.prototype = {
  constructor: Router,

  loadInitialRoute() {
    const pathNameSplit = window.location.pathname.split("/");
    const urlSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : "";
    console.log("En el init => " + urlSegs);
    this.loadRoute(...urlSegs);
  },

  matchUrlToRoute(url) {
    console.log("En el  match => " + url);
    const matchedRoute = this.routes.find((route) => {
      const routePathSegs = route.path.split("/").slice(1);

      if (routePathSegs.length !== url.length) return false;

      return routePathSegs.every(
        (routePath, index) => routePath === url[index]
      );
    });
    return matchedRoute;
  },

  loadRoute(...urlSegs) {
    console.log("En el  load => " + urlSegs);

    const matchedRoute = this.matchUrlToRoute(urlSegs);

    const url = `/${urlSegs.join("")}`;
    window.history.pushState({}, "this works", url);

    const routerOutElm = document.querySelector("#app");
    routerOutElm.innerHTML = matchedRoute.template;
  }
};
