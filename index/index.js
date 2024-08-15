
import { GetElement } from "./functions.js";
import { Intro } from "./GsapFunction.js";
import { LinkToNxtPage } from "./functions.js";


const body = GetElement('body');
body.addEventListener('load',Intro());

const startBtn = GetElement('#start-btn');
startBtn.addEventListener('click', LinkToNxtPage);


