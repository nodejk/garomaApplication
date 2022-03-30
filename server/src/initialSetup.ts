import axios from "axios";

export default function downloadDataFromAPI(
  url: string,
  directory: string
): Promise<Number> {
  const returnPromise = new Promise<Number>(async (resolve, reject) => {
    const response = await axios.get(url);

    try {
      if (response.status === 200) {
        var fs = require("fs");
        fs.writeFile(
          directory,
          JSON.stringify(response.data),
          function (err: Error) {
            if (err) {
              throw err;
            }
          }
        );
      }
    } catch (err) {
      reject(0);
    }

    resolve(1);
  });

  return returnPromise;
}
