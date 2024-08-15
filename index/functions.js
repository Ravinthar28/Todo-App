import { introPics } from "../data.js";


/* FUNCTION TO GET ELEMENT */

export function GetElement(element){
  return document.querySelector(element);
}

/* FUNCTION TO CREATE THE INTRO PICS HTML CODE */  

export function introPics_Load(introLayer){
  let txt = ``;
  introPics.forEach(pics => {
    if( pics.id === 'float-img'){
      txt += `
      <img src="${pics.pic}" alt="Loading..." id = '${pics.id}' class = '${pics.class}'> 
    `
    }
    else{
    txt += `
    <div id = 'face-img-container'>
      <img src="${pics.pic}" alt="Loading..." id = '${pics.id}'> 
      <div id ='info-container'>
        <h2 id = 'info-title'>
          <span id = 'info-title-span'>
            T
          </span>
          askMinder
        </h2>
        <p id = 'info-description'>
          TaskMinder is a simple, intuitive to-do list app that helps you organize tasks, set priorities, and stay productive. Perfect for managing daily errands, work projects, or long-term goals, it offers customizable lists, reminders, and progress tracking to keep you on track.
        </p>
        <p style = 'text-align:center;'>
          <button id = 'start-btn'>
              Begin Tasking
          </button>
        <p>
      </div>
    </div>
    `
    }
  });
  console.log(txt);
  introLayer.innerHTML = txt;

}

export function LinkToNxtPage(){
  window.location.href = '/listpage/listpage.html';
}
