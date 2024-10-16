let foods = {};
let foodCounts = {};
let log = []; // 日志记录
let recentChoices = [];
let tableBody = document.querySelector('#foodTable tbody');
let resultLabel = document.getElementById('resultLabel');
let greetingLabel = document.getElementById('greeting');
let timePeriodDic = {
    morning: "早上",
    brunch: '早中',
    noon: "中午",
    evening: "晚上"
};
let editing = false; //用于跟踪是否处于编辑模式
let selectedRows = []; // 用于存储选中的行

function init() {
    // 恢复数据
    let storedData = JSON.parse(localStorage.getItem('foodData'));
    if (storedData) {
        foods = storedData.foods || {};
        foodCounts = storedData.foodCounts || {};
        log = storedData.log || [];
        updateRecentChoices();
        updateTable();
    }
    updateGreeting();
    document.addEventListener("DOMContentLoaded", function () {
        var buttons = document.querySelectorAll('button');
        buttons.forEach(function (button) {
            button.addEventListener('mousedown', function () {
                this.classList.add('pressed');
            });
            button.addEventListener('mouseup', function () {
                this.classList.remove('pressed');
            });
            // 支持触摸设备
            button.addEventListener('touchstart', function () {
                this.classList.add('pressed');
            });
            button.addEventListener('touchend', function () {
                this.classList.remove('pressed');
            });
        });
    });
    // 更新选择行的监听器
    tableBody.addEventListener('click', function (event) {
        selectedRows = document.querySelectorAll('#foodTable tbody tr.highlighted');
    });
}

function editSelected() {
    if (editing) leaveEditMode();
    else enterEditMode();
}
function clearInputs() {
    document.getElementById('foodName').value = '';
    document.getElementById('morningWeight').value = '';
    document.getElementById('noonWeight').value = '';
    document.getElementById('eveningWeight').value = '';
}

function enterEditMode() {
    if (selectedRows.length !== 1) { alert("请选择单行进行编辑"); return; }
    editing = true;
    document.getElementById('editButton').innerText = '提交';
    document.getElementById('foodName').value = selectedRows[0].cells[0].textContent;
    document.getElementById('morningWeight').value = selectedRows[0].cells[1].textContent;
    document.getElementById('noonWeight').value = selectedRows[0].cells[2].textContent;
    document.getElementById('eveningWeight').value = selectedRows[0].cells[3].textContent;
}

function leaveEditMode() {
    editing = false;
    document.getElementById('editButton').innerText = '编辑';
    selectedRows[0].cells[0].textContent = document.getElementById('foodName').value;
    selectedRows[0].cells[1].textContent = document.getElementById('morningWeight').value;
    selectedRows[0].cells[2].textContent = document.getElementById('noonWeight').value;
    selectedRows[0].cells[3].textContent = document.getElementById('eveningWeight').value;
    clearInputs();
}


function addFood() {
    let foodName = document.getElementById('foodName').value;
    let morningWeight = parseFloat(document.getElementById('morningWeight').value);
    let noonWeight = parseFloat(document.getElementById('noonWeight').value);
    let eveningWeight = parseFloat(document.getElementById('eveningWeight').value);

    if (!foodName || foodName.length === 0) {
        alert("请输入有效的食物名称。");
    } else if (foodName in foods) {
        alert("此食物已存在，不能重复插入。");
    } else if (!isNaN(morningWeight) && !isNaN(noonWeight) && !isNaN(eveningWeight)) {
        foods[foodName] = {
            morning: morningWeight,
            noon: noonWeight,
            evening: eveningWeight
        };
        foodCounts[foodName] = 0;
        updateTable();
        saveData();
        console.log(foodName + "添加成功！");
    } else {
        alert("权重需要是正数");
    }
    clearInputs();
}

function removeSelected() {
    if (selectedRows.length === 0) {
        alert("点击选中上面的食物就可以删除了哦~");
        return;
    }
    else
        selectedRows.forEach(row => {
            let foodName = row.cells[0].textContent;
            delete foods[foodName];
            delete foodCounts[foodName];
            tableBody.removeChild(row);
        });
    saveData();
}

function chooseFood() {
    let currentHour = new Date().getHours();
    let timePeriod = determineTimePeriod(currentHour);
    let validFoods = getValidFoods();
    console.log(`当前可选食物：${validFoods}`);
    let weightsForTimePeriod = getTimePeriodWeights(timePeriod, validFoods);
    console.log(weightsForTimePeriod);
    let totalWeight = Object.values(weightsForTimePeriod).reduce((sum, weight) => sum + weight, 0);
    if (totalWeight === 0) {
        alert("当前时段所有可选食物的概率都为零。无法选择！");
        return undefined;
    }
    let randNum = Math.random() * totalWeight;
    let cumulativeWeight = 0;
    for (let i = 0; i < validFoods.length; i++) {
        let food = validFoods[i];
        cumulativeWeight += weightsForTimePeriod[food];
        if (cumulativeWeight >= randNum) {
            console.log(`选择了${food}`);
            foodCounts[food]++;
            log.push(food);
            updateTable();
            updateRecentChoices();
            resultLabel.textContent = `今天${timePeriodDic[timePeriod]}要吃的食物是${food}！`;
            saveData();
            return;
        }
    }
}
function getValidFoods() {
    let lastTwoChoices = log.slice(-2);
    console.log(`最近两次的选择：${lastTwoChoices}`);
    let validFoods = [];

    // 获取所有选中的行中的食物名称
    let selectedFoodNames = Array.from(selectedRows).map(row => row.cells[0].textContent);

    // 如果有行被选中
    if (selectedRows.length > 0) {
        console.log("有行被选中，仅考虑选中的行中的食物。");

        // 检查过去30次的选择记录
        let neverChosenFoods = selectedFoodNames.filter(food => !recentChoices.includes(food));

        if (neverChosenFoods.length === 0) {
            console.log("过去30次内没有没被选中的食物，将随机选择。");
            validFoods = selectedFoodNames.filter(food => !(lastTwoChoices[0] === food && lastTwoChoices[1] === food));
        } else {
            validFoods = neverChosenFoods;
        }
    } else {
        // 检查过去30次的选择记录
        let neverChosenFoods = Object.keys(foods).filter(food => !recentChoices.includes(food));
        if (neverChosenFoods.length === 0) {
            console.log("过去30次内没有没被选中的食物，将随机选择。");
            validFoods = Object.keys(foods).filter(food => !(lastTwoChoices[0] === food && lastTwoChoices[1] === food));
        } else {
            validFoods = neverChosenFoods;
        }
    }

    return validFoods;
}

function determineTimePeriod(hour) {
    if (hour >= 6 && hour < 9) {
        return 'morning';
    } else if (hour >= 9 && hour < 11) {
        return 'brunch'; // 新增早中饭时间段
    } else if (hour >= 11 && hour < 14) {
        return 'noon';
    } else {
        return 'evening';
    }
}

function getTimePeriodWeights(timePeriod, validFoods) {
    console.log("读取时间：" + timePeriod);
    let weights = {};
    validFoods.forEach(validFood => {
        if (timePeriod === 'brunch') { // 新增早中饭时间段
            weights[validFood] = foods[validFood].morning + foods[validFood].noon;
        } else {
            weights[validFood] = foods[validFood][timePeriod];
        }
    });
    return weights;
}
function updateTable() {
    tableBody.innerHTML = '';
    for (let food in foods) {
        let newRow = tableBody.insertRow();
        newRow.insertCell().textContent = food;
        newRow.insertCell().textContent = foods[food].morning;
        newRow.insertCell().textContent = foods[food].noon;
        newRow.insertCell().textContent = foods[food].evening;
        newRow.insertCell().textContent = foodCounts[food] || 0;
        newRow.addEventListener('click', function () {
            this.classList.toggle('highlighted');
        });
    }
    selectedRows = []; //清空已选择的行
}


function saveData() {
    localStorage.setItem('foodData', JSON.stringify({
        foods, foodCounts, log
    }));
}
function updateGreeting() {
    let currentHour = new Date().getHours();
    let greeting = timePeriodDic[determineTimePeriod(currentHour)];
    greetingLabel.textContent = `${greeting}好呀~ 小宝贝~(#^.^#)`;
}

function updateRecentChoices() {
    recentChoices = log.slice(-30);
}

init();