const newElement = () => {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("input").value = "";

  let Button = document.createElement("Button");
  let txt = document.createTextNode("\u00D7");
  Button.className = "close";
  Button.appendChild(txt);
  li.appendChild(Button);

  Button.onclick = (e) => {
    let ul = e.target.parentElement.parentElement;
    let li = e.target.parentElement;
    
    ul.removeChild(li);
  }
}

const deleteall = () => {
  let list = document.getElementById("myUL");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

document.getElementById('addButton').addEventListener('click', () => newElement());
document.getElementById('deleteAllButton').addEventListener('click', () => deleteall());



