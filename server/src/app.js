const express = require("express");
const helmet = require("helmet");
const config = require("./config");
const loaders = require("./loaders");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const path = require("path");
const {
  ProductRoutes,
  VehicleRoutes,
  AuthRoutes,
  UserRoutes,
  DemandRoutes,
  OfferRoutes,
  DemageRoutes,
  StatusRoutes,
  DocumentRoutes,
} = require("./api-routes");

config();
loaders();

const app = express();
app.use("/uploads", express.static(path.join(__dirname, "./", "uploads")));

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(fileUpload());

app.listen(process.env.APP_PORT, () => {
  console.log("Sunucu ayağa kalktı");
  app.use("/v1/products", ProductRoutes);
  app.use("/v1/vehicles", VehicleRoutes);
  app.use("/v1/auth", AuthRoutes);
  app.use("/v1/user", UserRoutes);
  app.use("/v1/demands", DemandRoutes);
  app.use("/v1/offers", OfferRoutes);
  app.use("/v1/demage", DemageRoutes);
  app.use("/v1/status", StatusRoutes);
  app.use("/v1/document", DocumentRoutes);
});
