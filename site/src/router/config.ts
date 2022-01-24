const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/visits"],
    exact: true,
    component: "Visits",
  },
  {
    component: "NotFound",
  },
];

export default routes;
