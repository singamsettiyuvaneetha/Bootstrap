let f = (a, b) => a + b;

let a = () => {
    console.log("hi");
};

function f2() {
    console.log("a");
    setTimeout(() => {
        console.log("b");
    }, 100);
    console.log("c");
    return "a c"; 
}
