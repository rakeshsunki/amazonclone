const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("items.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

// Enable CORS
server.use(cors());
server.use(middlewares);
server.use(router);

// Use Render-assigned PORT (Default: 5000 if running locally)
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Amazon Clone JSON Server is running on port ${PORT}`);
});
