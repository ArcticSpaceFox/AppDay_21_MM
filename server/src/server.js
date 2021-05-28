const express = require('express')
const fs = require("fs/promises");

async function setup(app) {

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

}

async function main() {
    const content = await fs.readFile("./configuration/default.json");
    const configuration = JSON.parse(content.toString());
    console.log("configuration", configuration);
    const { http } = configuration;

    const app = express();
    await setup(app);

    const port = http.port ?? 6002;

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });

}

main().then(() => {
    console.log("main exited successfully");
}).catch((e) => {
   console.error("an error occurred while executing the app.");
   console.error(e);
});
