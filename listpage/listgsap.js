import { GetElement } from "../index/functions.js";
import { initialInfo } from "./llistFunctions.js";

initialInfo();

const tl = gsap.timeline();
const mm = gsap.matchMedia();

const headLine = GetElement('#head-line');
const sideBar = GetElement('#sidebar');

const contentContainer = GetElement('#contents');
const task_list = GetElement('#list-container i');
const add_todo = GetElement('#add-todo i');
const completed_todo = GetElement('#completed-todo i');
const deleted_todo = GetElement('#deleted-todo i');

const initial_txt = GetElement('#initial-info-txt');
const initial_quote = GetElement('#initial-info #quote');

export function listIntro(){
  tl.to(headLine, {
    width: '100%',
    duration: 3,
    opacity:1
  });
  tl.to(sideBar, {
    height:'100vh',
    duration:3,
    opacity:1
  }, '-=3');
  tl.to(task_list, {
    x:0,
  });
  tl.to(add_todo, {
    x:0,
  });
  tl.to(completed_todo, {
    x:0,
  });
  tl.to(deleted_todo, {
    x:0,
  });
  tl.to(contentContainer,{
    y:'-50%',
    x:'-5%',
    width:'80%',
    height:'80vh',
    opacity:1,
    duration:2
  },'-=2'
  );
  tl.to(initial_txt,{
    x:0,
    opacity:1,

  });
  tl.to(initial_quote,{
    x:0,
    opacity:1,

  });
}