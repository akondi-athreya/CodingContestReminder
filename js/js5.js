var type = document.getElementsByClassName("typewriter")[0];
var arr = ["Hey Jitendra", "Now you can set your reminder"];
var i = 0;
var n = arr.length;

function change() {
  if (i == n) {
    i = 0;
  }
  type.innerHTML = `${arr[i]}`;
  i++;
}

setInterval(() => {
  change();
}, 4000);

var root = document.getElementsByClassName("cardcenter")[0];
var c = 0;
var wrong;
var btn1 = document.getElementsByClassName("username1")[0];

document.getElementsByTagName("input")[0].addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    fun();
  }
});

document.getElementsByTagName("textarea")[0].addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    fun();
  }
});

// Load tasks from localStorage on page load
window.onload = function() {
  loadTasks();
  // updateDeleteCount();
};

function fun() {
  c = 0;
  var f = document.getElementsByTagName("input")[0].value;
  var g = document.getElementsByTagName("textarea")[0].value;

  if (f) {
    c = 1;
    if (wrong) {
      document.getElementsByClassName("wrong")[0].remove();
    }
    
    const task = {
      id: Date.now(),
      title: f,
      description: g,
      time: getCurrentTime()
    };

    saveTask(task);
    addTaskToDOM(task);

    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("textarea")[0].value = "";
  }

  if (c == 0) {
    if (!document.getElementsByClassName("wrong")[0]) {
      wrong = document.createElement("div");
      wrong.className = "wrong";
      wrong.innerHTML = "Please Fill all detail";
      wrong.style.color = "red";
      btn1.insertAdjacentElement("afterEnd", wrong);
    }
  }
}

function getCurrentTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  if (minutes < 10) minutes = '0' + minutes;
  let timeString = hours + ':' + minutes + ' ' + ampm;
  return timeString;
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToDOM(task));
}

function addTaskToDOM(task) {
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('data-id', task.id);

  const Element = document.createElement('div');
  Element.className = "first";

  const name = document.createElement("div");
  name.className = "name";
  name.innerHTML = task.title;
  Element.appendChild(name);

  const descElement = document.createElement('div');
  descElement.className = 'desc';
  descElement.innerHTML = task.description;
  Element.appendChild(descElement);

  const time = document.createElement("div");
  time.className = "time";
  time.innerHTML = task.time;
  Element.appendChild(time);

  card.appendChild(Element);

  var check = document.createElement("input");
  check.className = "check";
  check.setAttribute("type", "checkbox");
  check.addEventListener('change', function() {
    if (this.checked) {
      const box = document.createElement("div");
      box.className = "box";
      const box1 = document.createElement("div");
      box1.className = "box1";
      box1.innerHTML = "If you complete this task click yes otherwise no";

      const box2 = document.createElement("div");
      box2.className = "box2";

      const yes = document.createElement("button");
      const no = document.createElement("button");
      yes.innerHTML = "Yes";
      no.innerHTML = "No";
      yes.addEventListener("click", function() {
        card.remove();
        box.remove();
        deleteTask(task.id);
      });
      no.addEventListener("click", function() {
        check.checked = false;
        box.remove();
      });
      box2.appendChild(yes);
      box2.appendChild(no);
      box.appendChild(box1);
      box.appendChild(box2);

      const rt = document.getElementsByClassName("notification")[0];
      rt.insertAdjacentElement("afterbegin", box);
    }
  });

  card.appendChild(check);
  // console.log(card);
  root.appendChild(card);
  
  var arr =document.querySelectorAll(".card");
  arr.forEach((ele)=>
  {
    ele.setAttribute("data-aos","slide-right")
    
  })
 
}

function deleteTask(id) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  incrementDeleteCount();
}
function incrementDeleteCount() {
  let deleteCount = JSON.parse(localStorage.getItem('deleteCount')) || 0;
  deleteCount++;
  localStorage.setItem('deleteCount', JSON.stringify(deleteCount));
  star();
}

star();
function star()
{
  var dc=localStorage.getItem("deleteCount");
for(var i=0;i<=dc;i++)
{
  if(i>=5)
  {
    localStorage.setItem("deleteCount",-1);
    // star();
    i=0;
    document.querySelectorAll("fa-star").style.color="white"
   
  }
  const gold=document.getElementsByClassName("fa-star")[i].style.color="gold";
}
}



// mouse hover
document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementsByTagName('body')[0];
  const hoverBorder = document.getElementById('hoverBorder');

  box.addEventListener('mousemove', (event) => {
      const rect = box.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      hoverBorder.style.display = 'flex';
      hoverBorder.style.top = (rect.top + y - 5) + 'px';
      hoverBorder.style.left = (rect.left + x - 5) + 'px';
  });

  box.addEventListener('mouseleave', () => {
      hoverBorder.style.display = 'none';
  });
});

// github  

var left1=document.getElementsByClassName("timeset")[0];
left1.setAttribute("data-aos","slide-up")
left1.setAttribute("data-aos-duration","1000")

var right1=document.getElementsByClassName("notification")[0];
right1.setAttribute("data-aos","slide-up")
right1.setAttribute("data-aos-duration","1000")