import app from "./index";
import { PORT } from "./index";

app.listen(PORT, () => console.log("Listening to port: " + PORT));
