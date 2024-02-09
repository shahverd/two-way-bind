## view-binder is a Two-Way Data Binding with JavaScript and HTML

### Overview
Are you fan of Pure Javascript?
This library provides a simple and efficient way to manage data flow between your HTML templates and JavaScript components, eliminating the need for manual DOM manipulation and boilerplate code.
This JavaScript class, `View`, facilitates two-way data binding between JavaScript and HTML elements. Two-way data binding means that changes made in the HTML elements reflect in the JavaScript objects, and vice versa, automatically.

### How to Use
1. **Instantiate the View Object:**
    ```javascript
    let view = new View();
    ```

2. **HTML Markup:**
    - Add elements with the desired attribute (default: `name`) to bind to the model.
    ```html
    <input name="sample_model">
    ```

3. **Interacting with Data:**
    - Interact with the `view.data` object to access and modify data globally. For example:
    ```javascript
    view.data.sample_model = "New Value"; // Updates the input field with name="sample_model"
    ```

### Features
- **Custom Attribute Binding:** By default, the `name` attribute is used for binding. You can specify a different attribute by passing it as an argument during `View` object instantiation.
- **Dynamic Updates:** Changes made to the bound data are automatically reflected in the HTML elements and vice versa, without explicit DOM manipulation.

### Implementation Details
- **Proxy Usage:** Utilizes JavaScript Proxy to intercept and handle property access and mutation.
- **Event Listeners:** Registers event listeners on elements with the specified attribute to capture user input and trigger updates.

### Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Two-Way Binding</title>
</head>
<body>
    <input name="username" value="SampleUserName">
    <input name="password" value="SamplePassword" type="password">
    
    <select name="password">
        <option value="SamplePassword">SamplePassword</option>
        <option value="easypass">easypass</option>
        <option value="diffcultpass">diffcultpass</opton>
    </select>
    
    <p>Hey, <span name="username"></span>!, Your password is: <span name="password"></span></p>

    <div contenteditable="true" name="text">Sample `div` with contenteditable="true"</div>
    <textarea name="text"></textarea>

    <script src="view.js"></script>
    <script>
        //You can alter the view by changing the view.data
        view.data.username = "Jack"
    </script>
</body>
</html>
```
And the result would be as follows (type as you go):

![Screenshot 2024-02-09 192548](https://github.com/shahverd/view-binder/assets/1610694/695b2fa2-b306-4258-bb60-7898cd355597)

### Note
- Ensure that JavaScript file containing the `View` class (`view.js` in this example) is included in the HTML file.
- If your script relies on DOM elements, consider wrapping the instantiation of the `View` object within a `DOMContentLoaded` event listener to ensure the DOM is fully loaded before executing JavaScript code. Example:
    ```javascript
    document.addEventListener("DOMContentLoaded", function() {
        let view = new View();
    });
    ```

### Compatibility
- This approach works across modern browsers that support JavaScript Proxy and the required DOM APIs.
- Ensure compatibility for older browsers if targeting a wider audience.

### Get Involved!
Your contributions to this project is welcome in any ways. Whether it's through pull requests, issue reporting, or spreading the word, your engagement is highly appreciated.
