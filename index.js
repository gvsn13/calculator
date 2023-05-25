const inputElements = document.getElementById("dis");
// const buttons = document.getElementsByTagName("button"); not working ....
const buttons = document.querySelectorAll("button");



let str = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerHTML;

        if (value === "AC") {
            str = "";
            inputElements.innerHTML = str;
        } else if (value === "=") {
            if(str!="")inputElements.innerHTML = eval(str);
        } else {
            str += value;
            inputElements.innerHTML = str;
        }
    });
});