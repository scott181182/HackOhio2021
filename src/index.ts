
import path from "path";
import express from "express";

import { getData } from "./data";



const PORT = 8080;
const clientDir = path.resolve(__dirname, "..", "client");
const publicDir = path.join(clientDir, "dist");



(async function main() {
    const app = express();
    app.use(express.json());

    app.get("/api/data", async (_req, res) => res.json(await getData()));

    app.use(express.static(publicDir));
    // Fallback to index for SPA.
    app.use((_req, res) => res.sendFile(path.join(publicDir, "index.html")));



    return app.listen(PORT, "0.0.0.0", () => {
        console.log(`Listening on port ${PORT}!`);
    });
})()
    .catch((err) => {
        console.error("A fatal error ocurred during startup:");
        console.error(err);
    });
