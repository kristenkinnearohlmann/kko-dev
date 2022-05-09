---
title: Practice LeetCode Problem - Implement strStr()
date: "2022-05-08T20:50:33.284Z"
description: "Documenting my work on the LeetCode problem Implement strStr()"
---

I have been diligently working on data structure and algorithm problems from various sources. Today I worked on the [`Implement strStr()`](https://leetcode.com/problems/implement-strstr/) problem using JavaScript. This problem is part of the Easy set that LeetCode maintains.

## Problem Setup

The basic premise of the problem is to find a shorter string (the "needle") within a longer string (the "haystack"). All LeetCode problems expect that you will solve the problem both correctly and efficiently.

The instructions gave some help with expectations and edge cases. It's always nice when you can get some "freebie" information, and it helps me learn to think about edge cases. With the following information, I could take a few actions right away:

- **Return 0 if no needle is given**: I checked the value of `needle` at the top of the function I wrote and added an immediate return for a falsey value
- **Return -1 if the needle is not found in the haystack**: I set my `returnVal` variable to -1 so that I could simply change the value if the `needle` was found in the `haystack` during processing

I confirmed I could check the length of the `needle` without converting it to an array, and I stored that value as `needleLength` so I could access it multiple times without invoking a processing cost.

## Loop Processing

I wanted to use a loop to perform the processing, and determined that I could use a `do` loop. The principal problem I wanted to solve was how to know when to end the loop. I tried a couple of iterations but I caused my [Replit.com](replit.com) repl to go into an infinite loop.

I decided to fall back to a simple `for` loop to try out my assumptions. I found that my use of the `slice` method needed to include `needleLength` + the current index position (represented by the classic `i`) to process the `haystack` substring properly. When I returned to my selected `do` loop, I realized I needed to use an `&&` condition in my `while` check for checking both the length of `haystack` left as well as the ability to short-circuit the loop if the `returnVal` was set to something other than the default -1.

I tried the test cases that were outlined in the problem, removed my extra code, and reviewed my function to see if I could make it more efficient before submission. Once tested and submitted, I found that I had failed a test case, an edge case I had not checked.

## Refactor

The edge case returned in the failed submission was to correctly return the start index if the `needle` was found at the end of the string. It was a little embarrassing - the `haystack` was a simple `'abc'` and the `needle` was `'c'`!

I added the failed test case to my repl to help refactor the code. I determined that my `while` check needed to check that the `needleLength + i` value was `<=` the length of `haystack`; I previously was checking for just `<`. I re-tested all of my test cases and re-submitted the solution.

## Outcome

The refactored solution was accepted with a runtime of 63 ms (faster than 87.45% of other submissions) and memory usage of 42.4 MB (less than 45.78% of other solutions). I checked the Discussion tab, filtered by JavaScript solutions, to see what other information I could gather. I found a few shorter solutions and one checking an edge case where `needle` already matched `haystack` that I will return to study.

With continued practice, I have noted that I am able to come up with a solution for a problem faster than I was able to previously, and can more easily resolve failed test cases. I still need to learn and practice identifying edge cases which will aid me in being able to craft a correct and efficient solution in a shorter timeframe. My work repl is located at <https://replit.com/@kristenkinnearo/LeetCode-strStr#index.js>
