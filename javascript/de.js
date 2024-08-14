function f1() {
    var name = parseInt(document.getElementById("name").value);
    var pass = parseInt(document.getElementById("password").value);
    var su = name + pass; // Concatenate the values
    document.getElementById("sum").value = su; // Display the result in the 'sum' input field
}
