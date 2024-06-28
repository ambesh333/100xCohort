import express from "express";
import { requestCountMiddleware } from "./metrics/requestCount";
import client from "prom-client";

const app = express();

app.use(express.json());

app.use(requestCountMiddleware);

app.get("/user", (req, res) => {
  res.send({
    name: "ambesh",
    age: 23,
  });
});

app.post("/user", (req, res) => {
  const user = req.body;
  res.send({
    ...user,
    id: 1,
  });
});

app.get("/metrics", async (req, res) => {
  const metrics = await client.register.metrics();
  res.set("Content-Type", client.register.contentType);
  res.end(metrics);
});

app.listen(3000);
