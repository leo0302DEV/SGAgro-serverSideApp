import "dotenv/config";
import app from "./src/app.js";

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
    console.log("Server runing on http://localhost:80");
});
