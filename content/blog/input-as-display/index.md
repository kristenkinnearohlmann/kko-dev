---
title: Using Input Element as Display
date: "2022-06-05T21:30:33.284Z"
description: "Using the input element for both input and display"
---

This week I picked a project back up that I set aside - the visual ITU alphabet for ham radio operators. Hams may need to spell out words and the ITU alphabet defines a regular English "code" word for each letter to ensure the letter is understood over the air very clearly. I had had a difficult time in the past memorizing the proper words. I know that tying a visual to a concept can assist with memory, so I created [Visual ITU Alphabet](https://visual-itu.netlify.app/).

I was returning back through projects to add [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) to manage how the content fit on the page, and I recalled that I had to not yet resolved the slight shift when the display letter was clicked and changed to an input. I wanted to make the transition as smooth as possible between the display state and the input state.

The original layout of the page contained a block element to display the current letter, and a hidden input that was invoked when the block element was clicked:

```html
<div id="display-frame">
  <div id="display-letter" style="background-color: blue"></div>
  <div class="hidden change-letter" id="change-letter">
    <input
      class="change-letter"
      id="change-letter-input"
      type="text"
      maxlength="1"
      pattern="[A-Za-z]{1}"
    />
  </div>
</div>
```

At some point after I released Visual ITU Alphabet, I created [Minutes Only Timer](https://minutes-only.netlify.app/) for my husband. For that project, I resolved the issues of having an input that accepted numbers for time by using an input element for both the display and the input. I realized I could take this same approach with Visual ITU Alphabet.

The simplest step was to remove the former display block and retain only the input; I revised the block elements and classes to handle the styling for alignment and font:

```html
<div class="display-frame">
  <div class="letter-entry">
    <input
      class="letter-input"
      id="letter-input-entry"
      type="text"
      maxlength="1"
      pattern="[A-Za-z]{1}"
    />
  </div>
</div>
```

I styled the classes to ensure the input element, whether in "display mode" or "entry mode", would have a font and size that correlated to the other elements on the page, as well as maintain a consistent margin between the input and the letter image:

```css
.display-frame {
  display: flex;
  flex-flow: column nowrap;
  margin: 2%;
  width: 75%;
}

.letter-entry {
  align-content: center;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

.letter-input {
  border: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 5rem;
  text-align: center;
  width: 200px;
}
```

These changes allowed me to simplify the logic that handled the letter processing itself, as well as ensure the focus is removed from the input so the "display mode" looks like normal text:

```javascript
const displayAlpha = () => {
  currentLetter = new AlphaLetter(alpha[alphaPosition])

  // after retrieving the letter value, invoke the blur() function to deselect the input
  letterInputEntry.value = currentLetter.letter
  letterInputEntry.blur()
  displayLetterImg.innerHTML = currentLetter.renderLetterImg()

  phoneticWord.textContent = currentLetter.phoneticWord
  pronunciation.innerHTML = currentLetter.stressPronounce()
}

const updateDisplayLetter = event => {
  const newLetter = event.target.value.toUpperCase()
  const newLetterPosition = alpha
    .map(element => element.letter)
    .indexOf(newLetter)
  alphaPosition = newLetterPosition

  displayAlpha()
}

// clear the value from the input
letterInputEntry.addEventListener("click", event => {
  letterInputEntry.value = ""
})

// update the letter if one was entered and the user clicked out of the field
letterInputEntry.addEventListener("blur", event => {
  if (letterInputEntry.value.length === 0) {
    letterInputEntry.value = currentLetter.letter
  }
  updateDisplayLetter(event)
})

// update the letter if one was entered and the user pressed enter
letterInputEntry.addEventListener("keyup", event => {
  const keyPressed = event.key

  if (keyPressed === "Enter") {
    if (letterInputEntry.value.length === 0) {
      letterInputEntry.value = currentLetter.letter
    }
    updateDisplayLetter(event)
  }
})
```

It's quite delightful to be able to view the site on my mobile phone. Clicking and changing the letter no longer shifts content on the page, and the current letter is restored if a user clears the input, fails to put in a new letter and exits the input. While there are still other opportunities for refactoring this code, this functionality enhancement makes the app even easier to use while I review other changes.
