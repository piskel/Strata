import express, {Application} from "express";


const app: Application = express();

const HTTP_PORT = 8080


app.use('/', express.static(__dirname + '/../public'));

app.listen(HTTP_PORT, () => {
    console.info(`Started listening at http://localhost:${HTTP_PORT}`);
});
