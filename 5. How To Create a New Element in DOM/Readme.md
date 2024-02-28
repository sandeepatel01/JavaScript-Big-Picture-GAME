## document.createElement()

- **`document.createElement()`** is a method in JavaScript used to dynamically create a new HTML element. It's part of the Document Object Model (DOM) API, which allows JavaScript to interact with HTML elements and modify a web page's structure and content.

- **Syntax**:

```jsx
document.createElement(tagName)
```

**`tagName`**: A string representing the name of the HTML element you want to create. For example, **`"div"`**, **`"p"`**, **`"span"`**, etc.

- **Return value**: **`document.createElement()`** returns a new HTML element node that corresponds to the specified tag name. This element is created but not yet added to the document structure
- **Usage**:

```jsx
// Example: Creating a new paragraph element
var paragraph = document.createElement("p");

// Setting inner text
paragraph.innerText = "This is a dynamically created paragraph.";

// Adding a CSS class
paragraph.classList.add("highlight");

// Appending it to the document body
document.body.appendChild(paragraph);
```

a new **`<p>`** (paragraph) element is created, its inner text and CSS class are set, and then it's appended to the **`<body>`** of the document

- **Dynamic Content**: **`document.createElement()`** is particularly useful for generating dynamic content in response to user actions, API calls, or other events. It allows developers to create and manipulate elements on the fly, enabling more interactive and responsive web applications.

```html
 const div = document.createElement('div')
    console.log(div);

    //    ******* set Attribute ****** 
    div.className = "main"
    // div.id = "myId"
    // div.id = Math.random()
    div.id = Math.round(Math.random() * 10 + 1)

    //  ****** Custome Attribute ****** 
    div.setAttribute("title", "generated title")
    div.style.backgroundColor = "green"
    div.style.padding = "12px"
    // div.innerText = "Chai aur code"
    const addText = document.createTextNode("Chai aur code")
    div.appendChild(addText)

    document.body.appendChild(div)
```

- This JavaScript code creates a new **`<div>`** element dynamically, customizes its attributes and styles, and appends it to the **`<body>`** of the HTML document.
1. **`const div = document.createElement('div')`**: This line creates a new **`<div>`** element and assigns it to the variable **`div`**.
2. **`console.log(div);`**: This line logs the newly created **`<div>`** element to the console, showing its initial state before any modifications.
3. **`div.className = "main"`**: This line sets the class name of the **`<div>`** element to "main".
4. **`div.id = Math.round(Math.random() * 10 + 1)`**: This line generates a random number between 1 and 10, rounds it, and sets it as the **`id`** attribute of the **`<div>`** element. This will result in a random ID being assigned to the **`<div>`**.
5. **`div.setAttribute("title", "generated title")`**: This line sets a custom attribute "title" with the value "generated title" to the **`<div>`** element.
6. **`div.style.backgroundColor = "green"`**: This line sets the background color of the **`<div>`** element to green.
7. **`div.style.padding = "12px"`**: This line sets the padding of the **`<div>`** element to 12 pixels.
8. **`const addText = document.createTextNode("Chai aur code")`**: This line creates a text node with the content "Chai aur code" and assigns it to the variable **`addText`**.
9. **`div.appendChild(addText)`**: This line appends the text node created in the previous step as a child of the **`<div>`** element, effectively adding the text "Chai aur code" inside the **`<div>`**.
10. **`document.body.appendChild(div)`**: Finally, this line appends the modified **`<div>`** element to the **`<body>`** of the HTML document, making it visible in the rendered page.