# view-binder
This library provides a simple and efficient way to manage data flow between your HTML templates and JavaScript components, eliminating the need for manual DOM manipulation and boilerplate code.

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
