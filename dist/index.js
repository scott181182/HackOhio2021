"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const PORT = 8080;
const clientDir = path_1.default.resolve(__dirname, "..", "client");
const publicDir = path_1.default.join(clientDir, "dist");
(async function main() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.static(publicDir));
    // Fallback to index for SPA.
    app.use((_req, res) => res.sendFile(path_1.default.join(publicDir, "index.html")));
    return app.listen(PORT, "0.0.0.0", () => {
        console.log(`Listening on port ${PORT}!`);
    });
})()
    .catch((err) => {
    console.error("A fatal error ocurred during startup:");
    console.error(err);
});
