function addTask()
{

var listItems=document.createElement("li");
var content=document.getElementById("searchbar").value;

var delBtn=document.createElement("button");
var svBtn=document.createElement("button");
var btnContainer=document.createElement("div");
// Assign Empty value in input after extracting value
document.getElementById("searchbar").value="";
listItems.textContent=content;
// create group of button container and button also.
btnContainer.id="btn-container";
btnContainer.class="btn-container";

svBtn.textContent="Save";
svBtn.id="save-btn";
svBtn.class="save-btn";
btnContainer.appendChild(svBtn)

delBtn.textContent="Delete";
delBtn.id="del-btn";
delBtn.class="del-btn";

btnContainer.appendChild(delBtn);

var addbtn=document.getElementById("taskbtn");



// if the li value has some aplhabetical or numeric vaue the only perform below operation
if(listItems.textContent!="")
    {
        document.getElementById("my-list").appendChild(listItems);
        document.getElementById("my-list").appendChild(btnContainer);
    }
// function for remove list item
delBtn.addEventListener("click",function(){
listItems.remove();
btnContainer.remove();
});
svBtn.addEventListener("click",function()
{
alert("Task saved");
});

}
