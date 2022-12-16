import { parser } from "../ink.js";
import fs from "fs";

fs.readFile("./example.ink", "utf8", (err, data) => {
    console.log(data)
    const tree = parser.parse(data);
    var str = JSON.stringify(tree, null, 2);
    console.log(str);
});