const decrementNode = document.getElementById("decrement");
const incrementNode = document.getElementById("increment");
const counterNode = document.getElementById("counter");

const resetNode = document.getElementById("reset");
const saveNode = document.getElementById("save");
const listCountNode = document.getElementById("listCount");
const additionNode = document.getElementById("addition");
const additionCounterNode = document.getElementById("additionCounter");

const lists = [];
const initialCount = 0;
let count = initialCount;

// блокировка кнопок
incrementNode.disabled = false;
decrementNode.disabled = false;

//сложение
const handleIncrement = () => {
  if (count <= 15) {
    count++;
    counterNode.innerText = count;
    if (count >= 15) {
      incrementNode.disabled = true;
    }
  }
};

//вычитание
const handleDecrement = () => {
  if (count >= -15) {
    count--;
    counterNode.innerText = count;
    if (count <= -15) {
      decrementNode.disabled = true;
    }
  }
};

const renderList = () => {
  listCountNode.innerHTML = "";

  lists.forEach((list) => {
    const listItems = document.createElement("li");
    listItems.className = "list-items";
    listItems.innerText = list;
    listCountNode.appendChild(listItems);
  });
};

const handleSave = () => {
  if (!count) {
    return;
  }
  lists.push(count);

  renderList();
};

//очистка  каунтера

const additionCount = () => {
  let sum = 0;

  for (let i = 0; i < lists.length; i++) {
    sum += lists[i];
    console.log(sum);
  }

  additionCounterNode.innerText = sum;
};

const handleReset = () => {
  count = initialCount;
  counterNode.innerText = initialCount;
  listCountNode.innerHTML = "";
  lists.length = 0;
  additionCounterNode.innerHTML = "";
  additionCounterNode.innerText = initialCount;
};

incrementNode.addEventListener("click", handleIncrement);
decrementNode.addEventListener("click", handleDecrement);
saveNode.addEventListener("click", handleSave);
resetNode.addEventListener("click", handleReset);
additionNode.addEventListener("click", additionCount);
