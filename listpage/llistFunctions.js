import { GetElement } from "../index/functions.js";
import { task_list,completed_task,deleted_task } from "../data.js";

const contentContainer = GetElement('#contents');

  /* FUNCTION FOR THE CODE THAT ARE INITIALLY SHOWN WHEN THE SCREEN IS LOADED */

export function initialInfo(){
  let code = ``;
  code += `
  <div id = 'initial-info'>
    <p id = 'initial-info-txt'>A to-do list helps you organize your life by turning goals into actionable steps, keeping you focused, productive, and moving forward each day. It ensures that you prioritize what matters most, making progress toward your personal and professional aspirations.</p>
    
    <p id = 'quote'>"Each checkmark on your to-do list is a small victory on the journey to your dreams."</p>
  </div>
  `
  ;
  contentContainer.innerHTML = code;
}
    /* CODE TO LIST THE TASKS AFTER CLICKING THE TASKS BUTTON */

export function taskList(){
  const tl = gsap.timeline({default:{duration:0.3}});
  tl.to(contentContainer,{
    x:1000,
    opacity:0
  });
  
  taskList_code_generator();

  const myTask_title = new SplitType('#task_title',{types : 'chars'});
  tl.fromTo(contentContainer,{
    x:-1000,
    opacity:0
  },{
    x:-50,
    opacity:1
  });
  tl.from('.char',{
    y:100,
    stagger:0.2,
    ease:'back.out'
  });
  tl.from(`#task_list li`,{
    y:-50,
    ease:'power2.out',
    stagger:0.5,
    duration:1.2,
    opacity:0
  });
}

/* CODE FOR TODO BUTTON */

export function add_todo_func(){
  let code = ``;
  const tl = gsap.timeline({default:{duration:0.3}});
  tl.to(contentContainer,{
    x:1000,
    opacity:0
  });
  code += `
    <div id = 'add-title-container'>
      <h2 id = 'add_title'>
        <span>A</span>dd 
        <span>N</span>ew 
        <span>T</span>asks 
        <span>I</span>nto 
        <span>T</span>he 
        <span>L</span>ist
      </h2>
    </div>
    <div id = 'add-input-container'>
      <p>
        Enter the Task Here:
      </p>
      <input id = 'add-input-box' type = 'text' placeholder = 'eg.Preparing for interview' />
      <button id = 'add-btn'>
        Add Task
      </button>
    </div>
  `;

  contentContainer.innerHTML = code;
  tl.fromTo(contentContainer,{
    x:-1000,
    opacity:0
  },{
    x:-50,
    opacity:1
  });
  const mytxt = new SplitType('#add_title',{types:'chars'});
  tl.from('.char',{
    y:1000,
    stagger:0.05
  });
  tl.from('#add-input-container p',{
    x:-1000,
    opacity:0,
    duration:1,
    ease:'back.out'
  });
  tl.from('#add-input-box',{
    y:-50,
    opacity:0,
    duration:1,
    ease:'power2.out'
  });
  tl.fromTo('#add-btn',{
    y:-20,
    opacity:0,
    duration:1,
    ease:'power2.out'
  },{
    y:0,
    opacity:1,
    ease:'power2.out'
  });

  let add_btn = GetElement('#add-btn');
  add_btn.addEventListener('click',() => {
    let input = GetElement('#add-input-box');
    if(input.value !== ''){
      task_list.push(input.value);
      input.value = ' ';  
      alert('New Task is Added to your TODO list')
    }
  })
}



function taskList_code_generator(){
  let code = ``;
  let listElement = ``;
  task_list.forEach((value,index) => {
    listElement += `<li id = 'list_element_${index}'> 
    ${value} 
    <div>
      <button id = 'complete-btn' value = '${value}'>
        <i class="fa-solid fa-check"></i>
      </button>
      <button id = 'delete-btn' value = '${value}'>
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
    `;
  });
  code += `
    <div id = 'task_title_container'>
      <h2 id = 'task_title'>
        <span>Y</span>our 
        <span>U</span>pcoming 
        <span>T</span>asks !
      </h2>
    </div>
    <ul id = 'task_list'>
      ${listElement}
    </ul>`

  contentContainer.innerHTML = code;

  let complete_btn = document.querySelectorAll('#complete-btn');
  complete_btn.forEach((x,i)=>{
    x.addEventListener('click',() => {
      complete_fun(i,x)
    });
  });

  let delete_btn = document.querySelectorAll('#delete-btn');
  delete_btn.forEach((x,i)=>{
    x.addEventListener('click',() => {
      delete_fun(i,x)
    });
  });
}

function complete_fun(i,x){
  completed_task.push(x.value);
  task_list.splice(i,1);
  taskList_code_generator();
}

function delete_fun(i,x){
  deleted_task.push(x.value);
  task_list.splice(i,1);
  taskList_code_generator();
}

export function completed_list(){
  const tl = gsap.timeline({default:{duration:0.3}});
  tl.to(contentContainer,{
    x:1000,
    opacity:0
  });
  completed_task_code();
  tl.fromTo(contentContainer,{
    x:-1000,
    opacity:0
  },{
    x:-50,
    opacity:1
  });

  const complete_title = new SplitType('#completed_title',{types: 'char'})
  tl.from('.char',{
    y:1000,
    stagger:0.03,
    duration:0.5,
    delay:0.3
  });
  tl.from(`#task_list li`,{
    y:-50,
    ease:'power2.out',
    stagger:0.5,
    duration:1.2,
    opacity:0
  });

}

function completed_task_code(){
  let code = ``;
  let list_element = ``;
  completed_task.forEach((x) => {
    list_element += `<li>
      ${x}
      <button id = 'delete-btn' value = '${x}'>
        <i class="fa-solid fa-trash"></i>
      </button>
      </li> `
  });

  code += `
    <div id = 'completed_title-container'>
      <h2 id = 'completed_title'>
        <span>C</span>ompleted
        <span>T</span>asks
      </h2>
    </div>
  <ul id = 'task_list'>
    ${list_element}
  </ul>
  `;
  contentContainer.innerHTML = code;

  let delete_btn = document.querySelectorAll('#delete-btn');
  delete_btn.forEach((x,i)=>{
    x.addEventListener('click',() => {
      complete_delete_fun(i);
    });
  });
}

function complete_delete_fun(i){
  completed_task.splice(i,1);
  completed_task_code();
}
  


