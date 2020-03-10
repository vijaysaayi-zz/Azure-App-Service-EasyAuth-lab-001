const Hapi = require("hapi");

const server = new Hapi.Server({
  port: 3030
});

server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return "Hapi demo app, v3";
  }
});

const init = async () => {
  await server.start();
  console.log(`Hapi demo app, v3 running at ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
