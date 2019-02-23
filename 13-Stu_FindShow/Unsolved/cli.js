const TV = require("./tv");

// Create a new TV object
const tv = new TV();

let search = process.argv[2];
let term = process.argv.slice(3).join(" ");

const tv = new TV();

if (!search) {
  search = "show";
}

if (!term) {
  term = "Andy Griffith";
}

if (search === "show") {
  console.log("Searching for TV Show");
  tv.findShow(term);
} else {
  console.log("Searching for TV Actor");
}
