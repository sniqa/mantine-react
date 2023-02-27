import Fastify from "fastify";
import { jsonDispatch } from "./dispatch";

const fastify = Fastify({ logger: true });

fastify.get("/test", async (req, res) => res.send("hello world"));

const dispatch = jsonDispatch({
  test: async () => "hello world 1",
});

fastify.post("/phl", async (request, response) => {
  const body = request.body as Record<string, any>;

  console.log(body);

  const res = await dispatch(body);

  console.log(res);

  response.send(res);
});

const start = async () => {
  await fastify.listen({ port: 8080 });
};

start();
