# Personal website development notes

## Notes to self

### Markdown Guide
- Md syntax cheatsheet
- [Markdown_syntax_cheatsheet] (https://www.markdownguide.org/cheat-sheet/)

### Making excess text become ellipses
- To constrain text to a consistent box size, use `text-overflow` property in CSS
- [MDN_web-docs] (https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow#)
- [W3Schools] (https://www.w3schools.com/css/tryit.asp?filename=trycss3_text-overflow)

### Bootstrap explainers
`<div class="container mt-5">`
- A container with a margin of 5 (3 rem) at the top

`<div class="container py-5" id="big-nav-buttons">`
- A container with an unique id of "big-nav-buttons" and padding of of 5 (3 rem) at the top and bottom

### Uncategorized Notes
- "&#x1F44B" is html entity for hand waving emoji
- KEYBOARD BINDINGS TO CREATE COMMENT(S)
    - CMD + / comments out multiple lines
    - Shift + option + A creates a new comment
    - WHITE SPACES IN BOOTSTRAP ARE CALLED "GUTTERS"
- If `Git: RPC failed; HTTP 400 curl 22 The requested URL returned error: 400` message appeas again
    - Run `git config --global http.postBuffer 157286400` in Terminal
    - It will do something to something else.
    - The specifics aren't important. More important is that it'll allow you to push and sync your repo

### SNS icons
# Attribution
    - <a href="https://www.flaticon.com/free-icons/brands-and-logotypes" title="brands and logotypes icons">Brands and logotypes icons created by Freepik - Flaticon</a> <!--X-->
    - <a href="https://www.flaticon.com/free-icons/instagram-logo" title="instagram logo icons">Instagram logo icons created by Freepik - Flaticon</a> <!--insta-->
    - <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a><!--LinkedIn-->
    - <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a> <!--Github-->
# Resizing SNS icons
    - Order in which stylesheets are linked _*are*_ important
    - Local stylesheets come _after_ Bootstrap is linked