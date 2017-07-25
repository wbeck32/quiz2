const url = require("url");
const { URLSearchParams } = require("url");

module.exports = function app(req, res) {
  const parsedUrl = url.parse(req.url);
  const params = new URLSearchParams(parsedUrl.search);
  const name = params.get("name") || "<p>Hello world</p>";
  const since = params.get("since") || "";
  const route = parsedUrl.pathname;
  const method = req.method;

  if (method === "GET") {
    if (route === "/coder") {
      const coder = info(name, since);
      res.end(coder);
    } else {
      const err = info(name, since);
      res.end(err);
    }
  } else {
    console.log("bye bye");
  }

  function info(name, since) {
    return name + " " + since;
  }
};
