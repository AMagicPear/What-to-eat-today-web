let foods = {};
let foodCounts = {};
let tableBody = document.querySelector('#foodTable tbody');
let resultLabel = document.getElementById('resultLabel');

function init() {
    // 恢复数据
    let storedData = JSON.parse(localStorage.getItem('foodData'));
    if (storedData) {
        foods = storedData.foods || {};
        foodCounts = storedData.foodCounts || {};
        updateTable();
    }
}

function addFood() {
    let foodName = document.getElementById('foodName').value;
    let probability = parseFloat(document.getElementById('probability').value);

    if (!foodName) {
        resultLabel.textContent = "请输入有效的食物名称。";
    } else if (foodName in foods) {
        resultLabel.textContent = "此食物已存在，不能重复插入。";
    } else if (!isNaN(probability) && probability >= 0) {
        foods[foodName] = probability;
        foodCounts[foodName] = 0;
        updateTable();
        saveData();
        resultLabel.textContent = foodName + "添加成功！";
    } else {
        resultLabel.textContent = "请输入有效的概率值。";
    }
}

function removeSelected() {
    let selectedRows = document.querySelectorAll('#foodTable tbody tr.highlighted');
    selectedRows.forEach(row => {
        let foodName = row.cells[0].textContent;
        delete foods[foodName];
        delete foodCounts[foodName];
        tableBody.removeChild(row);
    });
    saveData();
}

function chooseFood() {
    let totalWeight = Object.values(foods).reduce((sum, weight) => sum + weight, 0);
    resultLabel.textContent += "总权重："+totalWeight+"<br/>";
    if(totalWeight === 0) {
        alert("所有食物的概率不能都为零！");
        return undefined;
    }
    let randNum = Math.random() * totalWeight;
    resultLabel.textContent += "随机数是："+randNum+"<br/>";
    let cumulativeWeight = 0;
    let food_chosen;
    for(let food in foods){
        resultLabel.textContent += "当前食物增加权重："+foods[food]+"<br/>";
        cumulativeWeight += foods[food];
        if(randNum <= cumulativeWeight){
            resultLabel.textContent += "选到啦！";
            foodCounts[food]++;
            updateTable();
            resultLabel.textContent += `今天要吃的食物是${food}！<br/>`;
            saveData();
            return;
        }
    }
}

function updateTable() {
    tableBody.innerHTML = '';
    for (let food in foods) {
        let newRow = tableBody.insertRow();
        newRow.insertCell().textContent = food;
        newRow.insertCell().textContent = foods[food];
        newRow.insertCell().textContent = foodCounts[food] || 0;
        newRow.addEventListener('click', function () {
            this.classList.toggle('highlighted');
        });
    }
}

function saveData() {
    localStorage.setItem('foodData', JSON.stringify({ foods, foodCounts }));
}

init();