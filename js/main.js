let write = document.querySelector(".write");
let add = document.querySelector(".plus");
let inputt = document.querySelector(".input");
write.onclick = function () {
    inputt.focus();
    inputt.style.outline = " 2px solid rgb(137, 204, 244)"
}
add.onclick = function () {
    inputt.style.outline = "none"
    if (inputt.value == "") {
        alert("Enter item first")
        return
    } else {
        let ul = document.querySelector("ul");
        ul.style.backgroundColor = " rgb(183, 170, 153);";
        let element = document.createElement("li")
        element.innerText = inputt.value;
        inputt.value = "";
        let icon = document.createElement("i")
        icon.className = "fa-solid fa-xmark";
        icon.style.cssText = "float:right;padding:2px;;color: rgb(255, 237, 192); margin-top: 1px"
        element.appendChild(icon)
        ul.appendChild(element)
        icon.onclick = function () {
            element.remove();
        }
        element.onclick = function () {

            element.style.cssText = "text-decoration:line-through;background-color: rgba(249, 237, 220, 0.61);"

        }
    }
}