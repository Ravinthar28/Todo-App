
import { GetElement } from "./functions.js";
import { introPics_Load } from "./functions.js";

const tl = gsap.timeline();
let mm = gsap.matchMedia();

    /* FOR INTRODUCTION PAGE */

const introLayer = GetElement('#intro-layer')
introPics_Load(introLayer)

const loader = GetElement('#loader');
const faceImg = GetElement('#face-img');
const floatImg1 = GetElement('.float-img-1');
const floatImg2 = GetElement('.float-img-2');

const corner1 = GetElement('.corner-1');
const corner2 = GetElement('.corner-2');
const corner3 = GetElement('.corner-3');
const corner4 = GetElement('.corner-4');

const infoContainer = GetElement('#info-container');


export function Intro(){

  /* FOR MOBILE SCREENS */

  mm.add('(max-width: 600px)', () => {
    tl.to(loader,{
      y:500,
      ease:'bounce.out',
      duration:3
    }
    );
    setTimeout(()=>{
      loader.style.background = "none";
      loader.style.border = "3px solid #ec684c";
      },3000);
    
    tl.to(loader,{
      duration:1,
      scale: 40 ,
    }
    );

    tl.to(faceImg,{
      y:0,
      duration:3,
      ease:'power1.in'
    }, '-=4'
  );
    tl.to(floatImg1,{
      x:-250,
      duration: 2,
      opacity:1,
      rotate: -30,
      delay:2
    },'-=2');
    tl.to(floatImg2, {
      x:200,
      duration: 2,
      opacity:1,
      rotate:30,
    },'-=2');
    tl.to(corner1,{
      x: 150,
      y:150
    }, '-=1'
    );
    tl.to(corner2,{
      x: 150,
      y:-150
    }, '-=1'
    );
    tl.to(corner3,{
      x:-150,
      y:150
    }, '-=1'
    );
    tl.to(corner4,{
      x:-150,
      y:-150
    }, '-=1'
    );
    tl.to(infoContainer,{
      y:0,
      duration:2
    }, '-=1'
  );
  });

  /* FOR TAB SCREENS */

  mm.add('(max-width: 900px)', () => {
    tl.to(loader,{
      y:500,
      ease:'bounce.out',
      duration:3
    }
    );
    setTimeout(()=>{
      loader.style.background = "none";
      loader.style.border = "3px solid #ec684c";
      },3000);
    
    tl.to(loader,{
      duration:1,
      scale: 40 ,
    }
    );

    tl.to(faceImg,{
      y:0,
      duration:3,
      ease:'power1.in'
    }, '-=4'
  );
    tl.to(floatImg1,{
      x:-250,
      duration: 2,
      opacity:1,
      rotate: -30,
      delay:2
    },'-=2');
    tl.to(floatImg2, {
      x:200,
      duration: 2,
      opacity:1,
      rotate:30,
    },'-=2');
    tl.to(corner1,{
      x: 150,
      y:150
    }, '-=1'
    );
    tl.to(corner2,{
      x: 150,
      y:-150
    }, '-=1'
    );
    tl.to(corner3,{
      x:-150,
      y:150
    }, '-=1'
    );
    tl.to(corner4,{
      x:-150,
      y:-150
    }, '-=1'
    );
    tl.to(infoContainer,{
      y:0,
      duration:2
    }, '-=1'
  );
  });

  /* FOR LAP AND PC SCREENS */

  mm.add('(min-width:900px)', () => {
    tl.to(loader,{
      y:500,
      ease:'bounce.out',
      duration:3
    }
    );
    setTimeout(()=>{
      loader.style.background = "none";
      loader.style.border = "3px solid #ec684c";
      },3000);
    
    tl.to(loader,{
      duration:1,
      scale: 40 ,
    }
    );

    tl.to(faceImg,{
      y:0,
      duration:3,
      ease:'power1.in'
    }, '-=4'
  );
    tl.to(floatImg1,
      {
        x:-500,
        y:100,
        duration: 2,
        opacity:1,
        rotate: -30,
        delay:2
      },'-=2'
    );
    tl.to(floatImg2,
      {
        x:500,
        y:100,
        duration:2,
        opacity: 1,
        rotate: 30,
      }, '-=2'
    );
    tl.to(corner1,{
      x: 150,
      y:150
    }, '-=1'
    );
    tl.to(corner2,{
      x: 150,
      y:-150
    }, '-=1'
    );
    tl.to(corner3,{
      x:-150,
      y:150
    }, '-=1'
    );
    tl.to(corner4,{
      x:-150,
      y:-150
    }, '-=1'
    );
    tl.to(infoContainer,{
      y:0,
      duration:2
    }, '-=1'
  );
  });
}




