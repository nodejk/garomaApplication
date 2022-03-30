import dotenv from "dotenv";
dotenv.config();

import express from "express";
import downloadDataFromAPI from "./initialSetup";
/*
the purpose of this nodeJS application is to download the data from the API given, 
save it and return the results to the angular web application.
*/

const app = express();
export const PORT = 5000;
app.set("port", PORT);

const url: string = "http://mock-shirt-backend.getsandbox.com/shirts";
const promise = downloadDataFromAPI(url, "./data/tempFile.json");

promise.then((data) => {
  if (data === 1) {
    app.get("/products", async (req, res, next) => {
      const data = require("../data/tempFile.json");
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.statusCode = 200;
      res.send(JSON.stringify(data));
    });
  } else {
    app.get("/products", async (req, res, next) => {
      res.statusCode = 404;
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.send({ message: "data can not be found in the url: + " + url });
    });
  }
});

export default app;
