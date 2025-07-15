// Import the framework and instantiate it
import Fastify from "fastify";
const fastify = Fastify();
const port = 80;

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { status: "Great success!" };
});

// Run the server!
try {
  await fastify.listen({ port, host: "0.0.0.0" });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
