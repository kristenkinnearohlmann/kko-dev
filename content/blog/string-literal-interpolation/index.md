---
title: Favorite String Literals
date: "2022-07-10T22:00:33.284Z"
description: "My favorite ways to use string literals in some of the languages I code in"
---

I was recently listening to a JavaScript tutorial on 2x speed when I caught something that caused me to slow down and rewind. The presenter was talking about strings, concatenation, and ES6 string literals. The statement that caught my attention I summarized as "Go ahead and start with template literals first so you don't need to change to backticks later when you need to use a variable".

**JavaScript**

```Javascript
// instead of concatenation
// start with a template literal
let numberOfCats = 5;
console.log(`I have ${numberOfCats} cats.`);
console.log(`Now I have ${numberOfCats+1} cats.`);
```

This struck me as very sensible! There are many advantages to using a string literal instead of a basic statement or simple concatenation and you would save yourself time in refactoring code if you were already using them. They are more readable than other ways of formatting strings; they look like normal sentences and allow you to more easily identify portions to change or update.

I realized I could apply this kind of strategy to some of the other languages I know as well:

**Python**

```Python
# instead of concatenation
# use an 'f' string in Python 3 right away
number_of_cats = 5
f"I have {number_of_cats} cats"
```

**C#**

```csharp
// instead of String.Format() (ex. Console.WriteLine("Hello {0}", "world"))
// use string interpolation
string numberOfCats = 5;
Console.WriteLine($"I have {numberOfCats} cats.");
```

By using these techniques right away in your code, you save time and effort and increase the accuracy of your code when changes occur.

## Further Reading

- [Template literals (template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals): MDN
- [f-Strings: A New and Improved Way to Format Strings in Python](https://realpython.com/python-f-strings/#f-strings-a-new-and-improved-way-to-format-strings-in-python): Real Python
- [$ - string interpolation (C# reference)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated): Microsoft Docs
