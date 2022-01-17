---
title: Designing with Viewport
date: "2022-01-16T22:04:33.284Z"
description: "Using the viewport meta tag to design for various screen sizes"
---

After taking a holiday break, in which I still wrote code but did not take the time to blog, I am starting back documenting the challenges and successes I find while working on various projects.

This week, I tackled a project my husband wants - a timer that runs in minutes and seconds only, even if the time is entered in hours, minutes and seconds. I wanted to design this site mobile-first, since I know my husband feels better about using JavaScript-enhanced sites on his phone than his desktop machine.

I spent quite a lot of time with the design of the page to get the elements positioned as I had planned. Then I opened Chrome Developer tools, added media queries to my CSS and ...

Nothing.

I updated my media queries to show colors at various screen sizes, but the colors displaying were all wrong as I tried resizing my browser and choosing different device emulations. I kept trying different things until my brain reminded me that there might be something else I needed to add - viewport.

To set the viewport information for a site, you must add a meta tag to the `<head>` section of your HTML page(s). I had to Google the syntax to remind myself to code it properly:

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

When the `viewport` meta tag is added, both the Chrome device emulation and a target device will respond to the directive set by your site. This allows you to use media queries to handle various screen sizes and review how your site will display. Once I had the `viewport` tag set, I was able to adjust my designs and see the results. This will ensure that as I work on my site, I can consider my husband using his Android phone as the main user story, as well as account for using the site on my browser.

## Resources

- Media queries: [https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- Viewport: [https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
