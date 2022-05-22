let arr = [];
document.getElementById("button_add").addEventListener("click", () => {
  let discr_task = document.getElementById("dis_task");
  let DateTask = document.getElementById("date_task");
  let TimeTask = document.getElementById("time_task");
  if (discr_task.value == "" || DateTask.value == "" || TimeTask.value == "") {
    alert("you have an empty input");
  } else {
    let obj = {
      task_name: discr_task.value,
      task_date: DateTask.value,
      task_time: TimeTask.value,
    };
    arr.push(obj);
    saveLocal();

    addtotable(obj);
    discr_task.value = "";
    DateTask.value = "";
    TimeTask.value = "";
  }
});
//----------------------------------
function addtotable(obj) {

  let src2 =
    "https://toppng.com/uploads/preview/delete-circle-icon-11563655960vxqxj7ly3u.png";
  let tablebody = document.getElementById("table_data");
  let task1 = document.createElement("label");
  let date1 = document.createElement("label");

  let time1 = document.createElement("label");

  let img2 = document.createElement("img");

  img2.classList.add("imge");
  //------

  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  //--------
  let tr = document.createElement("tr");
  //--------
  task1.textContent = obj.task_name;
  date1.textContent = obj.task_date;
  time1.textContent = obj.task_time;

  img2.src = src2;

  img2.addEventListener("click", () => {
    let index = arr.indexOf(obj);
    arr.splice(index, 1);
    saveLocal();
    tr.remove();
  });
  //-------


  td2.appendChild(task1);
  td3.appendChild(date1);
  td4.appendChild(time1);
  td5.appendChild(img2);
  //--------

  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  //---
  tablebody.appendChild(tr);
}
//---------------------------
function datafromlocal() {
  if (localStorage.getItem("mytask")) {
    arr = JSON.parse(localStorage.getItem("mytask"));
    for (let i = 0; i < arr.length; i++) {
      addtotable(arr[i]);
    }
  } else {
    alert("no data");
  }
}


//-------------
function saveLocal() {
  localStorage.setItem("mytask", JSON.stringify(arr));
}
datafromlocal();
