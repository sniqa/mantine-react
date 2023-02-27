import Fastify from "fastify";
import fs from "fs";
import multipart from "@fastify/multipart";
import util from "util";
import { pipeline } from "stream";
import { nanoid } from "nanoid";

const pump = util.promisify(pipeline);

const fastify = Fastify({ logger: true });

fastify.register(multipart, {
  limits: {
    fieldNameSize: 100,
  },
});

fastify.post("/upload", async (request, reply) => {
  const data = await request.file();

  if (data) {
    const hashFilename = nanoid() + "-" + data.filename;

    await pump(data.file, fs.createWriteStream(hashFilename));
  }

  reply.send();
});

fastify.listen({ port: 8081 }, (err) => console.log(err));
