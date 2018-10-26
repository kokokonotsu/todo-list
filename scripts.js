var enterButton = document.getElementById("enter");
var taskInput = document.getElementById("taskInput");
var timeInput = document.getElementById("timeInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
var title = document.getElementById("title");
//var listLength = item.length;
var progress = 0;

function inputLength(){
  return taskInput.value.length;
}
function listLength(){
  return item.length;
}
function updateProgress(){
  //Insert code that increments var progress every time function 'crossOut' toggles True//
}
function showInput(){
  if(taskInput.style.display === "none" && timeInput.style.display === "none" && enterButton.style.display === "none"){
      taskInput.style.display = "inline";
      timeInput.style.display = "inline";
      enterButton.style.display = "inline";
  } else {
    taskInput.style.display = "none";
    timeInput.style.display = "none";
    enterButton.style.display = "none";
  }
  if(taskInput.style.visibility === "hidden" && timeInput.style.visibility === "hidden" && enterButton.style.visibility === "hidden"){
    taskInput.style.visibility = "visible";
    timeInput.style.visibility = "visible";
    enterButton.style.visibility = "visible";
    title.style.visibility = "visible";
  } else {
    taskInput.style.visibility = "hidden";
    timeInput.style.visibility = "hidden";
    enterButton.style.visibility = "hidden";
    title.style.visibility = "visible";
  }
}

function createListElement(){
  var span = document.createElement("span");
  var li = document.createElement("li");//creates an element "li"
  span.classList.add("time");
  const timeItem = `@${timeInput.value}`;
  span.insertAdjacentHTML('beforeend', timeItem);

  li.appendChild(document.createTextNode(taskInput.value));

  //const newItem = `<li> ${taskInput.value} @ <span class="time"> ${timeInput.value} </span></li>`;
  //makes text from the 'input field' the text of the li
  //ul.insertAdjacentHTML('beforeend', newItem);
  ul.appendChild(li);//adds li to the ul
  taskInput.value=""; //resets the text field
  timeInput.value="";
  displayProgress();

//Start Strikethrough
function crossOut(){
li.classList.toggle("done");
  displayProgress();
}
li.addEventListener("click", crossOut);

//End Strikethrough
//Display Progress
function displayProgress(){
  var liLength = document.querySelectorAll("li").length;
  var tasksDone = document.querySelectorAll(".done").length;
  var progressReport = document.getElementById("progress");
  progressReport.innerHTML = tasksDone + " of " + liLength + " Tasks Completed";
}
//START ADD DELETE BUTTON
var deleteBtn = document.createElement("button");
deleteBtn.appendChild(document.createTextNode("X"));
li.appendChild(deleteBtn);
deleteBtn.addEventListener("click", deleteListItem);
li.appendChild(span);
//Add Class Delete (display:none)
function deleteListItem(){
li.classList.add("delete");
}
//End Ass Class Delete

}

function addListAfterClick(){
  if(inputLength()>0){
    createListElement();
  }
}
function addListAfterEvent(event){
if(inputLength() > 0 && event.which === 13){
  createListElement();
}
}
enterButton.addEventListener("click", addListAfterClick);
taskInput.addEventListener("keypress", addListAfterEvent);
timeInput.addEventListener("keypress", addListAfterEvent);
