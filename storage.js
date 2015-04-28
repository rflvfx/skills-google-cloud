const { Storage } = require("@google-cloud/storage");
const storage = new Storage();

await storage.bucket("my-bucket").upload("./file.txt");
- Minor cleanup — iteration 3 (2015)
