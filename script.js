function addElement(name) {
    return document.getElementById(name);
}

let count = 0;
let logArray = [];


let inputName = addElement("input-name");
inputName.focus();
inputName.addEventListener("change", event => {
    let name = String(event.target.value);
    addElement("counter-name").innerText = `${name}`;
    inputName.style.visibility = "hidden";
});

addElement("btn-edit").addEventListener("click", function () {
    inputName.style.visibility = "visible";
});

addElement("btn-plus").addEventListener("click", function () {
    count++;
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    logArray.push(`${count} at ${time} \n`);
    updateCount(count);
});

addElement("btn-minus").addEventListener("click", function () {
    count--;
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    logArray.push(`${count} at ${time} \n`);
    updateCount(count);
})

let details = addElement("log");

function updateCount(count) {
    addElement("count").innerText = `${count}`
    let logStr = logArray.reduce((a, b) => a.concat(b));
    details.innerText = `${logStr}`;
}