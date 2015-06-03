const { Storage } = require("@google-cloud/storage");
const storage = new Storage();

await storage.bucket("my-bucket").upload("./file.txt");
- Minor cleanup — iteration 3 (2015)
- Document usage — iteration 6 (2015)
- Update config — iteration 10 (2015)
- Improve error handling — iteration 13 (2015)
- Refactor module — iteration 15 (2015)
