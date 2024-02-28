## Events in JS

- In JavaScript, events are actions or occurrences that happen in the system you are programming, which the system may need to know about and respond to in some way.

1. **DOM Events**: These are events that occur within the Document Object Model (DOM) of a web page. Some common DOM events include **`click`**, **`mouseover`**, **`keydown`**, **`submit`**, etc. You can attach event listeners to DOM elements to handle these events. For example:

```jsx
document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked!");
});
```

2. **Event Handlers**: Event handlers are functions that get executed when a particular event occurs. They can be assigned directly as attributes to HTML elements or set programmatically using JavaScript. For example:

```jsx
<button onclick="myFunction()">Click me</button>

<script>
function myFunction() {
    alert("Button clicked!");
}
</script>
```

3. **Event Listeners**: Event listeners are functions attached to elements to listen for specific events. They provide more flexibility than event handlers, especially when dealing with multiple events or elements. Example:

```jsx
document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked!");
});
```

4. **Event Object**: When an event occurs, an event object is created to contain information about the event. This object is passed as an argument to the event handler function. It contains properties and methods related to the event, such as **`event.target`**, **`event.preventDefault()`**

```jsx
document.getElementById("myInput").addEventListener("input", function(event) {
    console.log("Input value: " + event.target.value);
});
```

5. **Event Bubbling and Capturing**: In the DOM, events propagate in two phases: capturing phase and bubbling phase. Event capturing occurs from the top of the DOM tree down to the target element, while event bubbling occurs from the target element up to the top of the DOM tree. You can specify the event phase during event registration using **`addEventListener`** method's third parameter

```jsx
document.getElementById("myDiv").addEventListener("click", function() {
    console.log("Div clicked!");
}, true); // true indicates capturing phase, false (default) indicates bubbling phase
```

### addEventListener()

- **`addEventListener()`** is a method used in JavaScript to attach an event handler function to an element. It allows you to specify the type of event you want to listen for (such as "click", "mouseover", "keydown", etc.) and the function to be executed when the event occurs.

- basic syntax:

```jsx
element.addEventListener(event, function, useCapture);
```

- **`element`**: The DOM element to which the event listener is attached.
- **`event`**: A string representing the event type (e.g., "click", "mouseover", "keydown", etc.).
- **`function`**: The function to be executed when the event is triggered.
- **`useCapture`** (optional): A boolean value indicating whether to use event capturing (**`true`**) or event bubbling (**`false`**). This parameter is optional and defaults to **`false`**.

### event methods in JavaScript:

1. **addEventListener()**: This method attaches an event handler to the specified element without overwriting existing event handlers. It allows multiple event handlers to be registered on the same element for the same event.

```jsx
element.addEventListener(event, function, useCapture);
```

2. **removeEventListener()**: This method removes an event handler that has been attached with **`addEventListener()`**.

```jsx
element.removeEventListener(event, function);
```

3. **onclick**: This event occurs when a user clicks on an element.

```jsx
element.onclick = function() { /* code to be executed */ };
```

4. **onmouseover**: This event occurs when the mouse pointer is moved onto an element or its child elements.

```jsx
element.onmouseover = function() { /* code to be executed */ };
```

5. **onmouseout**: This event occurs when the mouse pointer leaves an element or its child elements.

```jsx
element.onmouseout = function() { /* code to be executed */ };
```

6. **onchange**: This event occurs when the value of an element has been changed (only for input elements like textboxes, checkboxes, etc.).

```jsx
element.onchange = function() { /* code to be executed */ };
```

7. **onkeydown**: This event occurs when a keyboard key is pressed down.

```jsx
element.onkeydown = function(event) { /* code to be executed */ };
```

8. **onkeyup**: This event occurs when a keyboard key is released.

```jsx
element.onkeyup = function(event) { /* code to be executed */ };
```

9. **onload**: This event occurs when an object has been loaded (e.g., an image or a script)

```jsx
element.onload = function() { /* code to be executed */ };
```

10. **onsubmit**: This event occurs when a form is submitted

```jsx
element.onsubmit = function() { /* code to be executed */ };
```