
function logBefore(message, func) {
  console.log(message);

  func();
}

logBefore('First message', () => {
  console.log('Second message');
});

// ----------------------------------------------------------------------

function runIf(bool, func) {
  if (bool) {
    func();
  }
}

runIf(true, () => {
  console.log('You will see this since the first argument is true');
});

runIf(false, () => {
  console.log('You will not see this since the first argument is false');
});

// ----------------------------------------------------------------------

function wrap(value, func) {
  return function() {
    return func(value);
  };
}

const wrapFunc = wrap(5, (returnedValue) => {
  console.log('Value returned with the callback is ' + returnedValue);
});

wrapFunc();

// Another wrap example (function decoration)
function addStringToName(func) {
  return function(name) {
    const progString = name + ' is a programmer';
    func(progString);
  }
}

function sayName(name) {
  console.log(name);
}

const programmer = addStringToName(sayName);
programmer('Zach'); // output: Zach is a programmer
// or
addStringToName(sayName)('Tim') // output: Tim is a programmer



// ----------------------------------------------------------------------
const fs = require("fs");

// Callbacks appear in familiar places, like fs.writeFile.
fs.writeFile("log.txt", "Log message!", function(err) {
  if (err) {
    console.log(err);
  }

  console.log("File saved!");
});

// Alternatively, we can assign our function to a variable,
// and pass it by name.
const writeFileCallback = function(err) {
  if (err) {
    console.log(err);
  }

  console.log("File saved!");
};

fs.writeFile("log.txt", "Log message!", writeFileCallback);
