import express from "express";
import path from "path";
import router from "./routes/routes.js";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use('/', express.static(path.join(__dirname, 'static')))

app.set("view engine", "ejs");
app.set("views", "./server/views");

app.use((request, response, next) => {
    response.append("Access-Control-Allow-Origin", ["*"]);
    response.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    response.append("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(router);
app.use(express.static(__dirname + '/public'))
export default app;