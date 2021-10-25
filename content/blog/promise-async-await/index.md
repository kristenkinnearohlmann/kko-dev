---
title: Handling JavaScript Promises with Async and Await
date: "2021-10-24T20:41:33.284Z"
description: "Learning the equivalent syntax of async/await for promises and callback chaining"
---

While working on a Node.js project at work recently, I had the opportunity to expand on a number of concepts I learned during my bootcamp studies. I really got into a zen place where I was jamming out code the way I had during my projects!!

One of the things I delved into was learning async/await. The sample code we were using as a resource was using async/await to ensure data was returning from a call to a remote source. While I understood in theory how it should work, I hadn't had the chance to implement that syntax myself. I recalled one of my Flatiron instructors stating that I would be able to understand async/await when I was ready to study it, so I held onto that thought and dove into the code.

During my bootcamp studies, I learned to resolve promises by chaining callbacks, like this simple `GET` request.

```JavaScript
const getCats = () => {
    return fetch('./cats.json') // get the contents of a file
        .then(response => response.json()) // parse the return data as JSON
        .then(data => {
            console.log(data) // display the data in the console
        })
}
```

One of the reasons I selected Flatiron School for my studies was their use of spaced repetition to cement a concept. I practiced writing these kinds of promise resolutions at various intervals across several weeks. Both the syntax and the way the code was handling the data and callbacks became very ingrained in my working memory.

Because of this deep-seated knowledge, I was quickly able to comprehend and apply the example provided in the official Node documentation knowledge article ["Modern Asynchronous JavaScript with Async and Await"](https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await) to switch to using async and await. I explained the concepts to my colleagues with a similar alignment to that included in the article; the analogous lines are marked with the same comment.

**Resolving promises with callbacks**
```JavaScript
const getCats = () => {
    return fetch('./cats.json') // get the contents of a file
        .then(response => response.json()) // parse the return data as JSON
        .then(data => {
            console.log(data) // display the data in the console
        })
}
```

**Resolving promises with async/await**
```JavaScript
const getCats = async () => {
    const response = await fetch('./cats.json') // get the contents of a file
    const data = await response.json() // parse the return data as JSON
    console.log(data) // display the data in the console
}
```

Using async/await makes the code easier to read and understand. Per the Node.js article, another benefit relates to debugging. Because the compiler sees async/await as similar to synchronous code, it is possible to step into the code and resolve issues.

I enjoyed implementing an elegant solution using async/await and will be looking for more opportunities to practice using this new tool.
