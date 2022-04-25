---
title: Data Structure and Algorithm Problem Solving Toolbox
date: "2022-04-24T21:15:33.284Z"
description: "Problem solving techniques I have assembled for working on data structure and algorithm practice"
---

I have been working on solving data structure and algorithm problems for about 8 months. It's interesting to recall how lost I was when I first started - it was like being in school and first learning word problems for math! I now have some tools I refer to that have helped me become stronger and faster with my solutions.

## Fully Read the Question/Problem

I internalized this piece of advice after watching a [Bytes of Bree video](https://www.youtube.com/user/beccibri/videos). She was describing a coding challenge she was working on in which the person giving the challenge asked her to read the question and determine what it was asking her. She said that she had been getting too complex with her answer, and one of the accepted solutions was quite simple. She found it only after focusing on what the challenge was asking her specifically to do.

I often rush through things I don't know well, as if getting through the exercise with my eyes closed will allow it to magically solve itself. I have been working on slowing down and really understanding the information that has been given to me. This is easier on sites and in situations where there is no timer, but I have found value in not worrying about timers and taking the time I need.

I was able to apply this recently to a problem involving finding the gaps in binary numbers. I remember trying to tackle this problem a couple months ago and feeling pretty frustrated. When I picked it up this time and read the question, I realized the input value was an integer and I would need to convert it to binary; I had been assuming a binary number was being passed in the test suite.

One other key point to this item is that the problem will usually tell you what is most important - efficiency or correctness. I like correctness problems, because you can focus on accuracy and not worry about the time complexity. Now that I have some experience with problems, I know efficiency means I should be looking for a solution that performs the fewest possible passes through the input.

## Check All Inputs and Outputs

Although I now read through problems completely and understand what's being asked, I needed to also check the inputs and outputs that the problem was expecting.

I recently worked through a problem that involved rotating elements of an array. I read through the problem, started the solution in my head (_I'll need to splice out a portion of the array and unshift the array to add to the beginning_), quickly implemented my solution, and started the test suite on the site I was using. I only received 87%! What did I do wrong?

I examined the failed test case example and realized that I had not checked what values the rotation count could take in. After examining the inputs for the function, I saw that it could be larger than length of the array. I hadn't accounted for that, and there was a straightforward way to do so. After implementing a couple of revisions of my solution, I was able to score 100%.

## Use Your Search Tools

When you are practicing, go ahead and Google the things you can't quite remember. At this point, you don't need to have everything at your fingertips, because you're working on knowing HOW to solve the problems first.

In the problem I discussed above, I knew I could get a remainder of the number of move positions for the array elements. My poor brain decided the way to do this was to divide one number by the other, then apply the `floor` function I confirmed via Google to get back to an integer. Makes sense, right?

I tested the solution and received 75%, which was lower than my first score. I studied the failed example test case, and did another Google search. If I had done a little additional searching the first time, my memory would have served up the `modulo` function, which is a much more accurate remainder for the operation I was doing. I also Googled the best function to convert an integer to a binary from the earlier problem I worked on.

## Take a Break

Many of us that study software engineering are perfectionists, problem-solvers, focused or all 3. It's easy for us to get stuck on something; we just KNOW we're going to figure out this problem, we just need to keep hammering away at it!

I've found the greatest success is in taking a break. Classic Pomodoro method states that focus work should be 25 minutes in length. I've seen advice that after 20 minutes of working on a problem, take a break or review solutions on the site you are using, if they are available. There are also people that are in a "zen flow state" and take a break when they lose focus.

I have used all of these methods with good results. The only time I don't have good results is when I try to keep pushing through to prove a point. Always take those breaks!

## Summarize Your Work

After I solve problems now, I document them in my own words. This helps me review and understand the steps I took and to see what patterns start to emerge from those solutions. I include where I got hung up, any interim scores I received for my submitted solutions, and the time it took for me to work on the problem, in the event I have a timed set of problems to work on.

I use [Replit](https://replit.com) to work on my problems before adding them back to the site the problem is on. This helps me focus better because I'm already totally familiar with the tools and how to use them. It also allows me to save my working copies, add comments and reference them later. I include the link to the specific `repl` in my summary document for the problem. You may also choose to set up a repo with a test suite for this same purpose. Either way you have a source of code from which to summarize your solution and conclusions.

## Seek Resources

More than just looking for the best function or some insight, seeking resources means finding people and videos that can help deepen your understanding.

I am a member of some Slack workspaces for developers where people discuss data structure and algorithm problems. I've talked with colleagues about what they know. I've read solutions on [LeetCode](https://leetcode.com/). I've watched other developers' videos.

All of these resources give me a different perspective on how to solve problems as well as techniques and information I am not yet familiar with. I write blogs about this information so that I can be a resource to others as well; finding a resource that "speaks your language" allows you to make great leaps in your understanding and ability. I encourage everyone to be the resource they can be for this reason!

## Don't Give Up

This isn't a counter-statement to the **Take a Break** item above, it is a complementary item. Sometimes these problems can seem insurmountable and that you may never be able to solve them. You may even set them aside for some period of time. I encourage you, and myself, to pick these problems up again in another session. I know these problems are valuable for learning patterns, efficiency and problem-solving, and I don't want to leave any knowledge behind.

If there is a problem I can't solve in 1 session, I will submit what I do have, take note of any feedback and save it in my `repl` for the problem. I can then pick up another problem-solving session with my previous input. I find my brain will be working on new approaches while I sleep, or go running, or take a shower, so having a good stopping point to pick up from allows me to keep working efficiently.

## Conclusion

I am early in my journey of mastering data structures and algorithms. I appreciate these tools I have defined to assist me, and I look forward to identifying more as I continue my learning.
