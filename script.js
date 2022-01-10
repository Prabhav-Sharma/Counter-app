//ES6 Version

const addElement= name => document.getElementById(name);

let count = 0 ,logArray = [], btnEdit =addElement(`btn-edit`);
btnEdit.style.visibility=`hidden`;

let inputName = addElement(`input-name`);
inputName.focus();
inputName.addEventListener("change", event => {
    let name = String(event.target.value);
    addElement("counter-name").innerText = `${name}:`;
    inputName.style.display = "none";
    btnEdit.style.visibility="visible";
});


btnEdit.addEventListener("click", () => {
    inputName.style.display = "block";
    inputName.style.float="right";
});

addElement("btn-plus").addEventListener("click", () => {
    count++;
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    logArray.push(`${count} at ${time} \n`);
    updateCount(count);
});


addElement("btn-minus").addEventListener("click", () => {
    count--;
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    logArray.push(`${count} at ${time} \n`);
    updateCount(count);
})

let details = addElement("log");

const updateCount= count => {
    addElement("count").innerText = `${count}`
    let logStr = logArray.reduce((a, b) => b.concat(a));
    details.innerText = `${logStr}`;
}