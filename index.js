let screen = document.getElementById("display");
buttons = document.querySelectorAll("button");
let screenValue = "";
// console.log("1:", screenValue);

for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        // console.log("2:", buttonText);

        if (buttonText == "X") {
            buttonText = "*";
            screenValue = screenValue + buttonText;
            screen.value = screenValue;
            // console.log("3:", screenValue);

        } else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "=") {
            var result;
            try {
                result = eval(screen.value);


            } catch (error) {
                result = "Expression Error";
            }
            screen.value = result;
        } else {
            screenValue = screenValue + buttonText;
            screen.value = screenValue;
        }
    });
}