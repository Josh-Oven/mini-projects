// 3 horizontily parallel sectoins. the two outside sections will be identical in function. the middle section will push the pixels out further.

// possible methods:

// have each 'pixel' be one square div. its height will stay the same, but its width will increase in time. when it hits a random length at a restriced measurement it will shrink and repeat.

// have multiple 'pixels' be divs with consistent hights and widths.
// they will travel horizontily at a set pace. they will 'fizzle' out at a random distance.

//

// spawn one div that shares the pixels length but not height.
// it will stand verticaly and reach the length of the outer container.
// pixels will be spawned as individual divs inside of the vertical div.
// the vertical div will travel the length of the outer container
// as the vertical div moves the pixels will each be removed from the document -
// -  at random distances.
// as the vertical div reaches the end of the outer container it will delete itself.
// vertical divs will spawn in a way that the user wont be able to see gaps or pauses inbetween them.


let outerContainer = document.getElementById('pixel-flame-outer-container');
let pixelContainer = document.getElementById('pixel-container');
let pixel = document.getElementById('pixel');

let container = outerContainer.id;
let mainCounter = 0;
let pixelCounter = 0;

///////////////////////////////////////////////////////////////////////////////

function Creator (pColor, pHeight, pWidth) {

  let npc = pixelContainer.cloneNode();
  npc.id = 'newPixelContainer' + mainCounter.toString();

  if (pixelCounter >= 9){
    pixelCounter = 0;
  }

  for (let i = 0; i <= 9; i++){
    let np = pixel.cloneNode();
    np.id = 'newPixel' + pixelCounter.toString();
    np.style.cssText = 'height:'+ pHeight + 'px;width:'+ pWidth +'px;background:'+ pColor +';position:absolute;top:' + (pixelCounter * 10) + 'px;margin:auto';
    npc.appendChild(np);
    pixelCounter++;
  }

  new Pusher(npc, npc.id);
  mainCounter++;
  // return;
}

///////////////////////////////////////////////////////////////////////////////

  let pColor = 'violet';
  let pHeight = 10;
  let pWidth = 10;
  let pcSpeed;
  // console.log(pHeight)

  new Creator(pColor, pHeight, pWidth);

// let clear = (pc) => {
//   clearInterval(moveInterval);
//   pc.remove();
// }

///////////////////////////////////////////////////////////////////////////////



function Pusher (container, id){

  let leftPosition = -12;
  this.container = container;
  this.id = id;
  container.style.cssText = 'height:100%;width:10px;background:blue;left:' + leftPosition + 'px'+';position:absolute;border:none;display:inline-block';
  // outerContainer.appendChild(container);
  outerContainer.prepend(container);

  let now = () => {
    clearInterval(moveInterval);
    container.remove();
  }

  let moveInterval = setInterval(() => {
    leftPosition;
    if (leftPosition >= 300){
      now();
      return;
    }
        container.style.cssText = 'height:100%;width:10px;background:;left:' + leftPosition + 'px'+';position:absolute;border:;display:inline-block';
        leftPosition+=1;
        if (leftPosition === 1){
          new Creator(pColor, pHeight, pWidth);
        }
        if (leftPosition === 90){
          for(let i = 0; i <= container.children.length; i++){
            if (container.children[i] != undefined) {
              let midNum = Math.floor(Math.random() * (10 - 4));
              let outNum = Math.floor(Math.random() * (3 - 1));

              if (container.children[i].style.top >= 99 || container.children[i].style.top <= 33){
                container.children[i].style.opacity = 0;
                container.children[i].style.transitionDuration = (outNum + 's').toString();
                return;
              } else {
                container.children[i].style.opacity = 0;
                container.children[i].style.transitionDuration = (midNum + 's').toString();
                // return;
              }
              container.children[i].style.border = 'none';

            }
          }
          return;
        }
      }, 1000/60)

  return;
}

///////////////////////////////////////////////////////////////////////////////

let remover = (pc) => {
  pc.remove()
}


///////////////////////////////////////////////////////////////////////////////
