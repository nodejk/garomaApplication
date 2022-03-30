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
const axios_1 = __importDefault(require("axios"));
function downloadDataFromAPI(url, directory) {
    const returnPromise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.get(url);
        try {
            if (response.status === 200) {
                var fs = require("fs");
                fs.writeFile(directory, JSON.stringify(response.data), function (err) {
                    if (err) {
                        throw err;
                    }
                });
            }
        }
        catch (err) {
            reject(0);
        }
        resolve(1);
    }));
    return returnPromise;
}
exports.default = downloadDataFromAPI;
