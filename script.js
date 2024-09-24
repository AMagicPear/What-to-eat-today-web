let foods = {};
let foodCounts = {};
let log = []; // 日志记录
let recentChoices = [];
let tableBody = document.querySelector('#foodTable tbody');
let resultLabel = document.getElementById('resultLabel');
let greetingLabel = document.getElementById('greeting');
let timePeriodDic = {
    morning: "早上",
    noon: "中午",
    evening: "晚上"
};

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
}

function addFood() {
    let foodName = document.getElementById('foodName').value;
    let morningWeight = parseFloat(document.getElementById('morningWeight').value);
    let noonWeight = parseFloat(document.getElementById('noonWeight').value);
    let eveningWeight = parseFloat(document.getElementById('eveningWeight').value);

    if (!foodName) {
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
}

function removeSelected() {
    let selectedRows = document.querySelectorAll('#foodTable tbody tr.highlighted');
    if (selectedRows.length === 0)
        alert("点击选中上面的食物就可以删除了哦~");
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
    for (let i in validFoods) {
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
    //检查过去30次的选择记录
    let neverChosenFoods = Object.keys(foods).filter(food => !recentChoices.includes(food));
    if (neverChosenFoods.length === 0) {
        console.log("过去30次内没有没被选中的食物，将随机选择。");
        validFoods = Object.keys(foods).filter(food => !(lastTwoChoices[0] === food && lastTwoChoices[1] === food));
    } else {
        validFoods = neverChosenFoods;
    }
    return validFoods;
}

function determineTimePeriod(hour) {
    if (hour >= 6 && hour < 10) {
        return 'morning';
    } else if (hour >= 10 && hour < 14) {
        return 'noon';
    } else {
        return 'evening';
    }
}

function getTimePeriodWeights(timePeriod, validFoods) {
    console.log("读取时间：" + timePeriod);
    let weights = {};
    validFoods.forEach(validFood => { weights[validFood] = foods[validFood][timePeriod]; })
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