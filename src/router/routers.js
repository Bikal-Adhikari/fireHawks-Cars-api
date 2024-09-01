import carRouter from "./carRouter.js";

export default [
  {
    path: "/api/v1/car",
    middlewares: [carRouter],
  },
];
