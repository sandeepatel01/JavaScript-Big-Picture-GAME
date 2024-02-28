## 1. document.getElementById()

- **`document.getElementById`** is a JavaScript method used to retrieve a reference to an HTML element in a web page using its unique identifier, known as the **`id`** attribute.
- This method is part of the Document Object Model (DOM) API, which provides a structured representation of the document as a tree, allowing scripts to dynamically access and modify the content and structure of a web page.

- example of how **`document.getElementById`** is used:

```jsx
<!DOCTYPE html>
<html>
<head>
  <title>Document.getElementById Example</title>
</head>
<body>

<div id="myDiv" class="heading">This is a div element.</div>

<script>
// Get a reference to the div element with the id "myDiv"
var divElement = document.getElementById("myDiv");

// Change its content
divElement.textContent;
divElement.innerHTML = "This content has been updated dynamically.";
divElement.innerText

// Change its styling
divElement.style.backgroundColor = 'green';
divElement.style.padding = '20px';

</script>

</body>
</html>

```

 **`document.getElementById("myDiv")`** retrieves the reference to the **`<div>`** element with the **`id`** attribute set to "myDiv". Once the reference is obtained, you can perform various operations on that element, such as modifying its content, styling, or behavior.

```jsx
var divElement = document.getElementById("myDiv").id;
```

```jsx
var divElement = document.getElementById("myDiv").className;
```

```jsx
var divElement = document.getElementById("myDiv").getAttribute('id');
```

```jsx
var divElement = document.getElementById("myDiv").setAttribute('class', 'test');
```

```jsx
var divElement = document.getElementById("myDiv").setAttribute('class', 'test heading');
```

- You are first using **`document.getElementById("myDiv")`** to retrieve a reference to the HTML element with the ID **`"myDiv"`**. Then, you're accessing the **`id`** property of that element.

- breakdown of what this code does:
1. **`document.getElementById("myDiv")`**: This retrieves the HTML element with the ID **`"myDiv"`**.
2. **`.id`**: This accesses the **`id`** property of the element obtained in step 1.

- So, if you have an HTML element like this:

```jsx
<div id="myDiv">Hello, world!</div>
```

```jsx
'heading'
```

## 2. document.querySelector()

- **`document.querySelector()`** is a method in JavaScript that allows you to select and retrieve the first element within the document that matches a specified CSS selector.
- It belongs to the Document Object Model (DOM) API, which provides a structured representation of the document as a tree, allowing you to interact with and manipulate its elements.

- Here's the basic syntax:

```jsx
document.querySelector(selector);
```

- **`selector`** is a string representing the CSS selector for the element you want to select.
- This method returns the first element within the document that matches the specified selector, or null if no matches are found.

→  example, if you have an HTML document like this:

```jsx
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <div id="container">
        <p class="paragraph">This is the first paragraph.</p>
        <p class="paragraph">This is the second paragraph.</p>

        <label for="name">Name (4 to 8 characters):</label>
        <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />

        <ul>
            <li class="list-item">One</li>
            <li class="list-item">Two</li>
            <li class="list-item">Three</li>
            <li class="list-item">Four</li>
        </ul>

    </div>
</body>
</html>
```

You can use **`document.querySelector()`** to select the first paragraph element with the class "paragraph" like this:

```jsx
const firstParagraph = document.querySelector('.paragraph');
console.log(firstParagraph); 
console.log(firstParagraph.textContent); // Output: "This is the first paragraph."

const ids = document.querySelector('#container');
console.log(ids);

const tags = document.querySelector('p');
console.log(tags);

const inputField = document.querySelector('input[type="text"]');
console.log(inputField);

const unOrderList = document.querySelector('ul');
console.log(unOrderList);

const list =  unOrderList.querySelector('li');
console.log(list);

list.innerText = "five";

const changeCSSProps =  list.style.backgroundColor = 'green';
console.log(changeCSSProps);

```

This method is particularly useful when you need to select elements by their class, ID, tag name, or any other CSS selector, and it simplifies DOM manipulation in JavaScript.

## 3. document.querySelectorAll()

- **`document.querySelectorAll()`** is a JavaScript method used to select and retrieve a list of elements from the DOM (Document Object Model) that match a specified CSS selector.
- It returns a NodeList, which is a collection of DOM elements that can be iterated over.

- Here's an example of how to use it:

```jsx
// Select all <p> elements in the document
const paragraphs = document.querySelectorAll('p');

paragraphs[0].style.backgroundColor = 'green';

// Iterate over the NodeList and do something with each <p> element
paragraphs.forEach(paragraph => {
    paragraphs.style.backgroundColor = 'green';
    console.log(paragraph.textContent);
});
```

**`document.querySelectorAll('p')`** selects all **`<p>`** elements in the document, and then we use **`forEach()`** to iterate over each paragraph and log its text content to the console

## 4. document.getElementByClassName()

- **`document.getElementsByClassName()`** is a method in the Document Object Model (DOM) API of JavaScript. Its purpose is to retrieve a collection of elements that have a specific class name within the document.
- The syntax for **`document.getElementsByClassName()`** is as follows:

```jsx
var elements = document.getElementsByClassName(classNames);
```

**`classNames`**: This is a string representing one or more space-separated class names. It specifies the class or classes to look for in the document

The method returns a live HTMLCollection of elements that match the specified class name(s). An HTMLCollection is an array-like object containing all the elements found, in the order they appear in the document.

### **Example:**

```jsx
<!DOCTYPE html>
<html>
<head>
    <title>getElementsByClassName Example</title>
</head>
<body>

<div class="exampleClass">Element 1</div>
<div class="exampleClass">Element 2</div>
<div class="exampleClass">Element 3</div>

<script>
    // Retrieve all elements with the class name "exampleClass"
    var elements = document.getElementsByClassName("exampleClass");

    // Loop through the collection and log each element's content
    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i].textContent);
    }
   
   const convertedArray = Array.from(elements);
   convertedArray.forEach(tag => {
    tag.style.color = 'blue';
    console.log(tag.textContent);
});

</script>

</body>
</html>
```

- We have three **`<div>`** elements, each having the class name "exampleClass".
- We use **`document.getElementsByClassName("exampleClass")`** to retrieve all elements with the class name "exampleClass".
- We then loop through the returned collection and log the text content of each element to the console.

- If no elements match the specified class name(s), an empty HTMLCollection will be returned.
- The class names passed to **`getElementsByClassName()`** must match exactly the class attribute values of the elements. It does not work with partial matches or wildcards.
- The returned HTMLCollection is live, meaning if elements are added, removed, or their class names changed dynamically in the document, the collection automatically updates to reflect those changes

## NodeList

- **`nodeList`** in the DOM (Document Object Model) is a collection of nodes, typically returned by methods like **`querySelectorAll()`** or properties like **`childNodes`**. A **`nodeList`** is similar to an array, but it is not an array; it is a "live" collection of DOM elements or nodes that dynamically reflects changes made to the DOM.

- some key points about **`nodeList`**:
1. **Collection of Nodes**: A **`nodeList`** is an ordered collection of nodes. These nodes can be elements, text nodes, comments, etc., found within a specific portion of the DOM.
2. **Zero-based Indexing**: Like arrays, you can access individual items in a **`nodeList`** using zero-based indexing.
3. **Not an Array**: Although **`nodeList`** objects look and behave like arrays, they are not actual arrays. They lack some array methods like **`forEach()`**, **`map()`**, etc., although you can often use these methods on them by converting them to arrays.
4. **Live Collection**: A **`nodeList`** is "live," meaning it is automatically updated when the DOM changes. If elements are added, removed, or modified in the DOM that match the selector used to create the **`nodeList`**, the **`nodeList`** is automatically updated to reflect these changes.
5. **Static NodeList**: Some collections, like those returned by **`querySelectorAll()`**, are static **`nodeList`**s. This means they do not update when the DOM changes. They represent a snapshot of the DOM at the time of the query.

- Example:

```jsx
// Selecting all <p> elements in the document
const paragraphs = document.querySelectorAll('p');

// Iterating through the nodeList
paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});

// Adding a new <p> element to the document
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New paragraph';
document.body.appendChild(newParagraph);

// As `paragraphs` is a live nodeList, it automatically includes the newly added <p> element

```

## HTMLCollection

**`HTMLCollection`** is an array-like object that represents a collection of HTML elements in the DOM (Document Object Model). It's similar to a NodeList but has some differences.

Here are some key points about **`HTMLCollection`**:

1. **Live Collection**: An **`HTMLCollection`** is live, meaning it's automatically updated when the underlying DOM changes. If you add or remove elements from the DOM, the **`HTMLCollection`** is automatically updated to reflect those changes.
2. **Zero-based Indexing**: Like arrays, you can access elements in an **`HTMLCollection`** using zero-based indexing (e.g., **`collection[0]`**, **`collection[1]`**, etc.).
3. **Getter**: **`HTMLCollection`** usually represents a set of elements with a specific tag name, such as all **`<div>`** elements or all **`<p>`** elements. You can obtain an **`HTMLCollection`** using methods like **`getElementsByTagName()`** or **`getElementsByClassName()`**.

→  example of how to work with an **`HTMLCollection`**:

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTMLCollection Example</title>
</head>
<body>
    <div class="container">
        <p>This is paragraph 1.</p>
        <p>This is paragraph 2.</p>
        <p>This is paragraph 3.</p>
    </div>

    <script>
        // Accessing HTMLCollection
        const paragraphs = document.getElementsByTagName('p');

        // Accessing individual elements
        console.log(paragraphs[0].textContent); // Outputs: This is paragraph 1.
        console.log(paragraphs[1].textContent); // Outputs: This is paragraph 2.
        console.log(paragraphs[2].textContent); // Outputs: This is paragraph 3.

        // Length of HTMLCollection
        console.log(paragraphs.length); // Outputs: 3

        // Adding a new paragraph
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a new paragraph.';
        document.body.appendChild(newParagraph);

        // HTMLCollection is automatically updated
        console.log(paragraphs.length); // Outputs: 4
    </script>
</body>
</html>
```

 **`paragraphs`** is an **`HTMLCollection`** containing all **`<p>`** elements on the page. You can access individual elements using array-like indexing (**`paragraphs[0]`**, **`paragraphs[1]`**, etc.). Additionally, when a new paragraph is added to the DOM, the **`HTMLCollection`** **`paragraphs`** is automatically updated to reflect this change.