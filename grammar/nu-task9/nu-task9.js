// 유저는 할일을 추가할 수 있다.
// 각 할일에 삭제와 체크버튼이 있다.
// 삭제버튼을 클릭하면 할일이 리스트에서 삭제된다.
// 체크버튼을 누르면 할일이 끝난것으로 간주하고 밑줄이간다.
// 끝난 할일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
// 모바일 버전에서도 확인할 수 있는 반응형 웹이다
// 인풋값 초기화
// 입력한 할일이 없다면 아이템이 추가 안되게 막기( 버튼을 disable 시키거나 or 버튼 클릭시 할일을 입력해주세요 메세지가 뜬다)

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let taskList = [];
let mode = 'all';
let filterList = [];
let underLine = document.getElementById("under-line");

tabs.forEach((menu)=>
    menu.addEventListener("click",(e)=> tabsIndicator(e))
);

function tabsIndicator(e){
    underLine.style.left = e.currentTarget.offsetLeft +5 + "px";
    underLine.style.width = e.currentTarget.offsetWidth -10 + "px";
    underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight -3 + "px";
}

addButton.addEventListener("click",addTask);
taskInput.addEventListener("focus",function clear(){
    taskInput.value = "";
})
for(let i = 1; i < tabs.length; i++){
    tabs[i].addEventListener("click", function(event){
        filter(event);
    })
}

function addTask(){
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false,
    };
    if(taskInput.value == ""){
        return alert("할일을 입력해주세요.")
    }
    taskList.push(task);
    console.log(taskList);
    render();
}

function render(){
    let list = [];
    if(mode === "all"){
        list = taskList;
    }else if(mode === "ongoing" || mode === "done"){
        list = filterList;
    }
    let resultHTML = "";
    for(let i = 0; i< list.length; i++){
        if(list[i].isComplete == true){
            resultHTML += `<div class="task task-done">
                    <span>${list[i].taskContent}</span>
                    <div class="button-box">
                        <button class="" onclick="toggleComplete('${taskList[i].id}')">
                        <i class="fa-solid fa-rotate-left return"></i>
                        </button>
                        <button onclick="deleteTask('${list[i].id}')">
                        <i class="fa-solid fa-trash trash"></i>
                        </button>
                    </div>
                </div>`
        }else {
            resultHTML += `<div class="task">
                    <span>${list[i].taskContent}</span>
                    <div class="button-box">
                        <button onclick="toggleComplete('${list[i].id}')">
                        <i class="fa-solid fa-check check"></i>
                        </button>
                        <button onclick="deleteTask('${list[i].id}')">
                        <i class="fa-solid fa-trash trash"></i>
                        </button>
                    </div>
                </div>`;
        }
        
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}


function toggleComplete(id){
    for (let i = 0; i< taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
        console.log(taskList);
    }
    filter({target: {id: mode}});
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}

function filter(event){
    mode = event.target.id;
    filterList = [];
    if(mode === "all"){
        render();
    }else if(mode === "ongoing"){
        for(let i =0; i<taskList.length; i++){
            if(taskList[i].isComplete === false){
                filterList.push(taskList[i]);
            }
        }
        render();
    }else if(mode === "done"){
        for(let i =0; i<taskList.length; i++){
            if(taskList[i].isComplete === true){
                filterList.push(taskList[i]);
            }
        }
        render();
    }
}

function deleteTask(id){
    for (let i = 0; i< taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1)
            break;
        }
        console.log(taskList);
    }
    filter({target: {id: mode}});
}