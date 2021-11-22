---
title: Throw a Custom Error in JavaScript
date: "2021-11-21T22:50:33.284Z"
description: "Brief tutorial on throwing a custom error in JavaScript"
---

In a recent code review, a more senior colleague asked that I throw an error in an exported function so I wasn't just writing a `console.log` that might not have meaning. The custom error was needed because the value I was checking was an HTTP status considered an error (ex. 404) instead of an error that Node would throw.

I wasn't aware there was a way to do this in Node.js so I did some research and found that it was really pretty straightforward!

When you write the function that is performing the evaluation, ensure you use the `throw` keyword to return a string containing your custom message when your defined error condition is hit so that Node.js recognizes it as an error.

```Javascript
const anything = (item) => {
  if (item === "nothing") {
    throw "It's not anything"
  } else {
    return "It's something"
  }
}
```

In the function that is performing the evaluation, add a `try...catch` block to handle an error if it is returned.

```Javascript
const checkThingness = (item) => {
  try {
    console.log(anything(item))
  }
  catch(err) {
    console.log(err)
  }
}
```

When you call the main function, an error will be handled properly by the `catch` block.

```Javascript
checkThingness("something")
// > It's something
checkThingness("nothing")
// > It's not anything
```

Here is the full sample code block.

```Javascript
const anything = (item) => {
  if (item === "nothing") {
    throw "It's not anything"
  } else {
    return "It's something"
  }
}

const checkThingness = (item) => {
  try {
    console.log(anything(item))
  }
  catch(err) {
    console.log(err)
  }
}

checkThingness("something")
// > It's something
checkThingness("nothing")
// > It's not anything
```

While this is a very simple example, it makes plain how to start using custom errors via the `throw` keyword to handle your code more robustly with a good coding pattern. Further examples are included in the [MDN entry for the `throw` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw).