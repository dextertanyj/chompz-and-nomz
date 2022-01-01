import express from "express";

const app = express();
const port = 8080;

app.get("/", (_, response) => {
    response.send("Chompz & Nomz Backend");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

