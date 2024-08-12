import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import {
  StaticRouterProvider,
  createStaticRouter,
  createStaticHandler,
} from "react-router-dom/server";
import { routes } from "../client/routes";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";
import { handleAsciiArtGeneration } from "./controllers/asciiArtController";

const server = express();

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "../../src/views"));

server.use(express.json());
server.use(logger);
server.use(express.static(path.join(__dirname, "../../public")));

server.get("*", async (req, res) => {
  const { query, dataRoutes } = createStaticHandler(routes);
  const remixRequest = createFetchRequest(req);
  const context = await query(remixRequest);

  if (context instanceof Response) {
    throw context;
  }

  const router = createStaticRouter(dataRoutes, context);

  const app = ReactDOMServer.renderToString(
    <StaticRouterProvider router={router} context={context} />,
  );

  res.render("index", { app });
});

server.post("/ascii3d", handleAsciiArtGeneration);

server.use(errorHandler);

// Helper function to convert Express request to Fetch API Request
function createFetchRequest(req: express.Request): Request {
  const origin = `${req.protocol}://${req.get("host")}`;
  const url = new URL(req.url, origin);

  const controller = new AbortController();
  req.on("close", () => controller.abort());

  const headers = new Headers();

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  const init: RequestInit = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req.body;
  }

  return new Request(url.href, init);
}

export default server;
