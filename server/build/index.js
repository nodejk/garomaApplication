"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const initialSetup_1 = __importDefault(require("./initialSetup"));
/*
the purpose of this nodeJS application is to download the data from the API given,
save it and return the results to the angular web application.
*/
const app = (0, express_1.default)();
exports.PORT = 5000;
app.set("port", exports.PORT);
const url = "http://mock-shirt-backend.getsandbox.com/shirts";
const promise = (0, initialSetup_1.default)(url, "./data/tempFile.json");
promise.then((data) => {
    if (data === 1) {
        app.get("/products", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
            const data = require("../data/tempFile.json");
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.statusCode = 200;
            res.send(JSON.stringify(data));
        }));
    }
    else {
        app.get("/products", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
            res.statusCode = 404;
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send({ message: "data can not be found in the url: + " + url });
        }));
    }
});
exports.default = app;
