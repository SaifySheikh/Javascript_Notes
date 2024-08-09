// Explanation of innerText, textContent, and innerHTML in JavaScript

// 1. innerText
// innerText returns the visible text content of an element, considering CSS styles.
// It does not include text from hidden elements (e.g., elements with display: none).
// It triggers a reflow to ensure only the visible text is returned, which can make it slower.

const element1 = document.getElementById("example1"); // Assuming example1 is an existing element
console.log("innerText Example:", element1.innerText);

// Example:
// <div id="example1" style="display: none;">Hello, World!</div>
// Output: "" (because the element is hidden)

// 2. textContent
// textContent returns the raw text content of an element, including hidden text.
// It does not consider CSS styles, so it returns all text within the element as it is in the DOM.
// It is faster than innerText because it doesn't trigger reflows.

const element2 = document.getElementById("example2"); // Assuming example2 is an existing element
console.log("textContent Example:", element2.textContent);

// Example:
// <div id="example2">Hello, <span style="display: none;">hidden</span> World!</div>
// Output: "Hello, hidden World!" (includes text from hidden span)

// 3. innerHTML
// innerHTML returns the HTML content of an element, including tags and attributes.
// When setting innerHTML, it parses the provided string as HTML and creates elements accordingly.
// It allows you to insert HTML structures, but be cautious with user input to avoid security risks like XSS.

const element3 = document.getElementById("example3"); // Assuming example3 is an existing element
console.log("innerHTML Example:", element3.innerHTML);

// Example:
// <div id="example3">Hello, <b>World!</b></div>
// Output: "Hello, <b>World!</b>"

// Setting innerHTML
element3.innerHTML = "<p>New content!</p>";
console.log("Updated innerHTML:", element3.innerHTML);

// Summary of Differences:
// - innerText: Returns only visible text, considers CSS styles, triggers reflows.
// - textContent: Returns all text, ignores CSS styles, faster than innerText.
// - innerHTML: Returns or sets HTML content, includes tags and attributes, allows for dynamic HTML updates.

