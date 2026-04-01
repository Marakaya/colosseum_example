import Fastify from "fastify";

const app = Fastify({ logger: true });

// Health check
app.get("/health", async () => {
  return { status: "ok", service: "bbm-relay" };
});

// Submit bundle
app.post("/bundle", async (request, reply) => {
  // TODO: implement pre-simulation and forwarding
  return reply.code(501).send({ error: "Not implemented yet" });
});

// Get bundle status
app.get("/bundle/:id", async (request, reply) => {
  // TODO: implement bundle status lookup
  return reply.code(501).send({ error: "Not implemented yet" });
});

const start = async () => {
  await app.listen({
    port: Number(process.env.BBM_RELAY_PORT) || 8080,
    host: process.env.BBM_RELAY_HOST || "0.0.0.0",
  });
};

start();
