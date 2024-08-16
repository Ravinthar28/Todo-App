

/* INTRO PICS DATA */ 

export const introPics = [
  {
     pic: "/images/360_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.jpg",
     id : 'float-img',
     class : 'float-img-2'
  },
  {
    pic: "/images/Block-Scheduling.webp",
    id : 'face-img'
  },
  {
    pic:"/images/Switch-to-Employee-Scheduling-Software.jpg",
    id : 'float-img',
    class: 'float-img-1'
  }
];

export let task_list = [
  'Doing Project',
  'Submiting Project',
  'Result Of The Project',
  'Review of the  Project ',
  'playing games',
  'watching TV'
];


export let completed_task = [];

export let deleted_task = [];

localStorage.setItem('task_list',JSON.stringify(task_list));