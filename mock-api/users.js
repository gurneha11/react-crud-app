import jsonServer from "json-server";
import { join } from "path";

export default async function handler(req, res) {
  const server = jsonServer.create();
  const router = jsonServer.router(join(process.cwd(), "db.json"));
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(jsonServer.bodyParser);

  // CORS headers
  server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
    next();
  });

  // Call JSON Server
  server(req, res);
}




// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults({
//   noCors: false, 
// });

// server.use(middlewares);
// server.use(jsonServer.bodyParser);

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); // allow all origins
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

// server.use(router);

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`JSON Server running on port ${PORT}`);
// });
