// start server
const dotenv = require("dotenv");
dotenv.config();
const app = require("./src/app");
const connectDB = require("./src/db/db");
/* Invoke database connection */
connectDB();


app.listen(3000, () => {
    console.log("Server listining on port 3000 ");
});