---
title: Algorithm Study - Sums
date: "2021-10-17T22:19:33.284Z"
description: "Learning about summing algorithms"
---

One of the specific post-graduate topics that Flatiron School students are advised to work on is algorithms and data structures. While we learn quite a lot about data and development during the program, we know that we need to do further study to be able to effectively take and pass technical interviews. I received advice from a tech colleague to work on problems from LeetCode with the following technique:

1. Choose and work on a problem for no more than 10 minutes.
2. Study other people's solutions to understand the pattern to evaluate and solve the challenge.

I chose what should have been an easy challenge - checking an array for 2 numbers that summed to the target number, with the assumption that there is always 1 and only 1 solution within the array. It sounded similar to a question I worked on in a mock technical interview so I thought I would be able to solve it without too much trouble. I spent about 45 minutes (35 minutes longer than I was advised) to work on the challenge with no luck. 

Once I started reviewing other solutions, I realized I was quite close to the answer and the answer was quite cool. I decided to write about this challenge to continue to embed my understanding of it together with the solution.

The function body given was similar to this:

```JavaScript
const sumNumbers = function(arr, target) {
  return arr
}
```

A few of the test cases:

```JavaScript
console.log(sumNumbers([2,11,7,15],9)) // needs to return [0,2]
console.log(sumNumbers([3,2,4],6)) // needs to return [2,1]
console.log(sumNumbers([3,3],6)) // needs to return [0,1]
```

I haven't yet done a lot of study about Big O notation and space/time efficiency with algorithms, but my mock technical interviewer had spoken with me some about these topics when I was working on the similar challenge. Using a double loop to solve this kind of challenge would return the correct answer but would also not be very efficient. 

My recollection was that we used an object to hold some portion of data for the solution, so I tried some versions of that logic. My thought was that I had to subtract each array item from the target number to get a result, store that result, and be able to reference it again at some point. I tried to store the result data with the original array index as the key as well as storing the index of the original array number with the result. The main cases passed with these solutions, but the edge cases failed.

```JavaScript
const sumNumbers = function(arr, target) {
    const arrIndices = []
    const remainder = {}

    // arr.forEach(item => {
    //   remainder[item] = target-item
    // })

    arr.forEach((item,index) => {
      remainder[index] = target-item
    })

    // TODO: Find index of both the remainder number 
    // and the number being compared
    console.log(remainder)

    for (let i = 0; i < arr.length; i++) {
      // if (arr.includes(remainder[arr[i]])) {
      //   arrIndices.push(arr.indexOf(remainder[arr[i]]))
      // }
      console.log(i,arr[i])
    }

    return arrIndices
};
```

When I decided to start reviewing other solutions, the very first submission was simple and exactly what I was trying to recall from my mock technical interview! I had been very close, but I had missed 2 things:

1. I needed to store the result of subtracting each array item from the target as the key in the object and the index of the original number as the value.
2. I could use the `in` keyword to check for an array item being a key in the object I was using to store data.

By using these 2 pieces of logic, I could check whether the array item I was currently evaluating was in my check object as a key, the result of another array item being subtracted from the target. Since the index of that other array item was stored as the value, I immediately had both indices I needed to return. Below is the code I re-wrote together with comments explaining each portion.

```JavaScript
const sumNumbers = function(arr, target) {
    const valsObj = {}

    for (let i = 0; i < arr.length; i++) {
      // Using the `in` operator, check whether the current array item 
      // is a key produced from the result of subtracting a 
      // previous array item from the target
      if (arr[i] in valsObj) {
        // If the current array item is a key in the object, 
        // return an array of the index of the current item (second term) 
        // and the index of the first term, which is the value 
        // for the found key
        return [i,valsObj[arr[i]]]
      }

      // Store the result of the current array item - target 
      // as the key of a new key-value pair. The value portion 
      // is the index of the current array item
      valsObj[target - arr[i]] = i
    }
};
```

This solution ensures that the code only needs to traverse the array once, and that the result will be returned as soon as it is found with no additional operations being run. Once I recalled that the `in` operator would quickly allow checking the object keys (`hasOwnProperty` also works here), I understood I had started my solution "backward" trying to store the result item along with the original array item. I had gotten closer by trying to store the result as the key but had gotten offtrack by trying to store the original array item as the value. The suggested solution ensures that the code doesn't need to try to determine any indices by checking values, ensuring efficieny and accuracy.

I plan to allow a week for this pattern to fully settle into my brain, then re-attempt the associated LeetCode challenge. With consistent study, I know I will be able to see and explain the patterns in these challenges, and learn the best efficient methods to solve them.