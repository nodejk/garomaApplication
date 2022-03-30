import { Request, Response } from "express";
import app from "./index";
import downloadDataFromAPI from "./initialSetup";
import request from "supertest";

describe("UNIT TEST FOR THE API: ", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseObject;
  let response: any;

  beforeAll(async () => {
    mockRequest = {};
    mockResponse = {
      statusCode: 0,
      send: jest.fn().mockImplementation((result) => {
        responseObject = result;
      }),
    };

    const url: string = "http://mock-shirt-backend.getsandbox.com/shirts";
    response = await downloadDataFromAPI(url, "./data/tempFile.json");
  });

  test("successfully downloaded the data from the remote api", async () => {
    expect(response).toEqual(1);
  });

  test("response status 200 after call", async () => {
    const expectedStatusCode = 200;

    const response = await request(app).get("/products");
    expect(response.statusCode).toEqual(expectedStatusCode);
  });

  test("fetched data contains all the required keys", async () => {
    const response = await request(app).get("/products");
    const productFetch = JSON.parse(response.body)[0];

    const keyProps = ["id", "price", "picture", "colour", "size", "name"];

    for (var key of keyProps) {
      expect(productFetch).toHaveProperty(key);
    }
  });
});
