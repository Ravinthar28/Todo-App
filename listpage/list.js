import { GetElement} from "../index/functions.js";
import { listIntro} from "./listgsap.js";
import { taskList,add_todo_func,completed_list,deleted_list} from "./llistFunctions.js";

const body = GetElement('body');
body.addEventListener('load',listIntro());

const task_list = GetElement('#list-container');
task_list.addEventListener('click', taskList);


const add_todo = GetElement('#add-todo');
add_todo.addEventListener('click', add_todo_func);

const completed_todo = GetElement('#completed-todo');
completed_todo.addEventListener('click',completed_list)

const deleted_todo = GetElement('#deleted-todo');
deleted_todo.addEventListener('click',deleted_list);
