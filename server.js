import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { engine } from "express-handlebars";
import { router } from "./routes.js";

//Added by ckuo =w=+
import expressHbs from "express-handlebars";
import { stationAnalytics } from "./utils/stationAnalytics.js";


const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(fileUpload());
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use("/", router);

const hbs = expressHbs.create({});

// register new function
hbs.handlebars.registerHelper('getFormattedDate', stationAnalytics.getFormattedDate)

const listener = app.listen(process.env.PORT || 4000, function () {
  console.log(`Todolist started on http://localhost:${listener.address().port}`);
});
