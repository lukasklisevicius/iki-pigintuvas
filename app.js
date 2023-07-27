
var speed;
var num = 4;

let mouseOver = false

function balloonsGame() {
  renderEl()
          clicks = 0;
    var container0 = document.getElementById('container0');
    var container1 = document.getElementById('container1');

    gsap.set('#container0,#container1',{opacity:0})
    gsap.to('#container0,#container1',1,{opacity:1,delay:1})
    gsap.set('#container0,#container1',{y:600})
    gsap.to('#container0,#container1',2,{y:0,delay:1})

     speed = 0.2; // low speed
     var posx0 = Math.random()*200; 
     var posy0 = Math.random()*350;
     var stepx0 = Math.random()*3;
     var stepy0 = Math.random()*3;

     var posx1 = Math.random()*200; 
     var posy1 = Math.random()*350;
     var stepx1 = Math.random()*3;
     var stepy1 = -Math.random()*3;

     var posx2 = Math.random()*200; 
     var posy2 = Math.random()*350;
     var stepx2 = Math.random()*3;
     var stepy2 = Math.random()*3;

     var posx3 = Math.random()*200; 
     var posy3 = Math.random()*350;
     var stepx3 = -Math.random()*3;
     var stepy3 = -Math.random()*3;

     var posx4 = Math.random()*200; 
     var posy4 = Math.random()*350;
     var stepx4 = -Math.random()*3;
     var stepy4 = Math.random()*3;

     var posx5 = Math.random()*200; 
     var posy5 = Math.random()*350;
     var stepx5 = Math.random()*3;
     var stepy5 = -Math.random()*3;

     var posx6 = Math.random()*200; 
     var posy6 = Math.random()*350;
     var stepx6 = -Math.random()*3;
     var stepy6 = -Math.random()*3;

     var posx7 = Math.random()*200; 
     var posy7 = Math.random()*350;
     var stepx7 = Math.random()*3;
     var stepy7 = -Math.random()*3;

     var posx8 = Math.random()*200; 
     var posy8 = Math.random()*350;
     var stepx8 = Math.random()*3;
     var stepy8 = -Math.random()*3;

     var posx9 = Math.random()*200; 
     var posy9 = Math.random()*350;
     var stepx9 = -Math.random()*3;
     var stepy9 = -Math.random()*3;

    //  const balloonImg = {
    //   0:'img/apelsinas.png',
    //   1:'img/brok.png',
    //   2:'img/banana.png',
    //   3:'img/pomidoras.png',
    //   4:'img/sur.png',
    //   5:'img/darz.png',
    //   6:'img/pienas.png',
    //   7:'img/zuvis.png',
    //   8:'img/vais.png',
    //   9:'img/mesa.png'
    //  }
    

    var ball0 = document.getElementById('ball0');
    var ball1 = document.getElementById('ball1')
    var ball2 = document.getElementById('ball2')
    var ball3 = document.getElementById('ball3')
    var ball4 = document.getElementById('ball4')
    var ball5 = document.getElementById('ball5')
    var ball6 = document.getElementById('ball6')
    var ball7 = document.getElementById('ball7')
    var ball8 = document.getElementById('ball8')
    var ball9 = document.getElementById('ball9')

    // ball0.children[0].src = balloonImg[0]
    // ball1.children[0].src = balloonImg[1]
    // ball2.children[0].src = balloonImg[2]
    // ball3.children[0].src = balloonImg[3]
    // ball4.children[0].src = balloonImg[4]
    // ball5.children[0].src = balloonImg[5]
    // ball6.children[0].src = balloonImg[6]
    // ball7.children[0].src = balloonImg[7]
    // ball8.children[0].src = balloonImg[8]
    // ball9.children[0].src = balloonImg[9]

    gsap.to(`#ball0,#ball1,#ball2,#ball3,#ball4,#ball4,#ball5,#ball6,#ball7,#ball8,#ball9`,1,{opacity:1})

    
    
    var hball0 = ball0.offsetHeight; 
    var wball0 = ball0.offsetWidth;

    var hball1 = ball1.offsetHeight; 
    var wball1 = ball1.offsetWidth;

    var hball2 = ball2.offsetHeight; 
    var wball2 = ball2.offsetWidth;

    var hball3 = ball3.offsetHeight; 
    var wball3 = ball3.offsetWidth;

    var hball4 = ball4.offsetHeight; 
    var wball4 = ball4.offsetWidth;

    var hball5 = ball5.offsetHeight; 
    var wball5 = ball5.offsetWidth;

    var hball6 = ball6.offsetHeight; 
    var wball6 = ball6.offsetWidth;

    var hball7 = ball7.offsetHeight; 
    var wball7 = ball7.offsetWidth;

    var hball8 = ball8.offsetHeight; 
    var wball8 = ball8.offsetWidth;

    var hball9 = ball9.offsetHeight; 
    var wball9 = ball9.offsetWidth;

    var hcont0 = container0.offsetHeight; 
    var wcont0 = container0.offsetWidth;
    var hcont1= container1.offsetHeight; 
    var wcont1 = container1.offsetWidth;
    
    var t = setInterval(move, 6);
  
    function move() {

    
    //stepx = speed;
    //stepy = speed*2;


        if(posx0 >= (wcont0-wball0) || posx0 <= 0) {
            stepx0 *= -1;
        }
        if(posy0 >= (hcont0-hball0) || posy0 <= 0) {
            stepy0 *= -1;
        }
        
            posx0 += stepx0 * speed;
            posy0 += stepy0 * speed;
            ball0.style.left = posx0+'px';
            ball0.style.top = posy0+ "px";

        if(posx1 >= (wcont0-wball1) || posx1 <= 0) {
            stepx1 *= -1;
         }
        if(posy1 >= (hcont0-hball1) || posy1 <= 0) {
            stepy1 *= -1;
        }
            
            posx1 += stepx1 * speed;
            posy1 += stepy1 * speed;
            ball1.style.left = posx1+'px';
            ball1.style.top = posy1+ "px";

        if(posx2 >= (wcont0-wball2) || posx2 <= 0) {
            stepx2 *= -1;
        }
        if(posy2 >= (hcont0-hball2) || posy2 <= 0) {
            stepy2 *= -1;
        }
                
            posx2 += stepx2 * speed;
            posy2 += stepy2 * speed;
            ball2.style.left = posx2+'px';
            ball2.style.top = `${posy2}px`; 
        
        if(posx3 >= (wcont1-wball3) || posx3 <= 0) {
            stepx3 *= -1;
        }
        if(posy3 >= (hcont1-hball3) || posy3 <= 0) {
            stepy3 *= -1;
        }
                    
            posx3 += stepx3 * speed;
            posy3 += stepy3 * speed;
            ball3.style.left = posx3+'px';
            ball3.style.top = `${posy3}px`;  

        if(posx4 >= (wcont1-wball4) || posx4 <= 0) {
            stepx4 *= -1;
        }
        if(posy4 >= (hcont1-hball4) || posy4 <= 0) {
            stepy4 *= -1;
        }
                        
            posx4 += stepx4 * speed;
            posy4 += stepy4 * speed;
            ball4.style.left = posx4+'px';
            ball4.style.top = `${posy4}px`;  
        
        if(posx5 >= (wcont0-wball5) || posx5 <= 0) {
            stepx5 *= -1;
        }
        if(posy5 >= (hcont0-hball5) || posy5 <= 0) {
            stepy5 *= -1;
        }                            
            posx5 += stepx5 * speed;
            posy5 += stepy5 * speed;
            ball5.style.left = posx5+'px';
            ball5.style.top = `${posy5}px`;

        if(posx6 >= (wcont0-wball6) || posx6 <= 0) {
            stepx6 *= -1;
        }
        if(posy6 >= (hcont0-hball6) || posy6 <= 0) {
            stepy6 *= -1;
        }                            
            posx6 += stepx6 * speed;
            posy6 += stepy6 * speed;
            ball6.style.left = posx6+'px';
            ball6.style.top = `${posy6}px`;

            if(posx7 >= (wcont1-wball7) || posx7 <= 0) {
                stepx7 *= -1;
            }
            if(posy7 >= (hcont1-hball7) || posy7 <= 0) {
                stepy7 *= -1;
            }                            
                posx7 += stepx7 * speed;
                posy7 += stepy7 * speed;
                ball7.style.left = posx7+'px';
                ball7.style.top = `${posy7}px`;

                if(posx8 >= (wcont1-wball8) || posx8 <= 0) {
                    stepx8 *= -1;
                }
                if(posy8 >= (hcont1-hball8) || posy8 <= 0) {
                    stepy8 *= -1;
                }                            
                    posx8 += stepx8 * speed;
                    posy8 += stepy8 * speed;
                    ball8.style.left = posx8+'px';
                    ball8.style.top = `${posy8}px`;

                    if(posx9 >= (wcont1-wball9) || posx9 <= 0) {
                        stepx9 *= -1;
                    }
                    if(posy9 >= (hcont1-hball9) || posy9 <= 0) {
                        stepy9 *= -1;
                    }                            
                        posx9 += stepx9 * speed;
                        posy9 += stepy9 * speed;
                        ball9.style.left = `${posx9}px`;
                        ball9.style.top = `${posy9}px`;
    }

    bal0C = ball0.children
    ball0.addEventListener('mouseenter',(e)=>{
        inIner(ball0)
        // if(ball0.getBoundingClientRect().width - e.offsetX >200){
        //     gsap.to(bal0C[0],1,{x:50})}
        // if(ball0.getBoundingClientRect().width - e.offsetX <150){
        //     gsap.to(bal0C[0],1,{x:-50})}
        // if(ball0.getBoundingClientRect().height - e.offsetY <100){
        //     gsap.to(bal0C[0],1,{y:-50})}
        // if(ball0.getBoundingClientRect().height - e.offsetY >200){
        //     gsap.to(bal0C[0],1,{y:50})}
        // gsap.to(bal0C[0],1,{x:0,y:0,delay:1})
    })

    bal1C = ball1.children
    ball1.addEventListener('mouseenter',(e)=>{
        inIner(ball1)
    })

    bal2C = ball2.children
    ball2.addEventListener('mouseenter',(e)=>{  
        inIner(ball2)
    })
    bal3C = ball3.children
    ball3.addEventListener('mouseenter',(e)=>{   
        inIner(ball3)
    })

    bal4C = ball4.children
    ball4.addEventListener('mouseenter',(e)=>{
        inIner(ball4)
    })


    bal5C = ball5.children
    ball5.addEventListener('mouseenter',(e)=>{
        inIner(ball5)
    })
    bal6C = ball6.children
    ball6.addEventListener('mouseenter',(e)=>{
        inIner(ball6)
    })
    bal7C = ball7.children
    ball7.addEventListener('mouseenter',(e)=>{    
        inIner(ball7)
    })
    bal8C = ball8.children
    ball8.addEventListener('mouseenter',(e)=>{     
        inIner(ball8)
    })
    bal9C = ball9.children
    ball9.addEventListener('mouseenter',(e)=>{
        inIner(ball9)
    })
   

    
    ball0.addEventListener('mouseout',()=>{
        outIner(ball0)
    })
    ball1.addEventListener('mouseout',()=>{
        outIner(ball1)
    })
    ball2.addEventListener('mouseout',()=>{
        outIner(ball2)
    })
    ball3.addEventListener('mouseout',()=>{
        outIner(ball3)
    })
    ball4.addEventListener('mouseout',()=>{
        outIner(ball4)
    })
    ball5.addEventListener('mouseout',()=>{
        outIner(ball5)
    })
    ball6.addEventListener('mouseout',()=>{
        outIner(ball6)
    })
    ball7.addEventListener('mouseout',()=>{
        outIner(ball7)
    })
    ball8.addEventListener('mouseout',()=>{
        outIner(ball8)
    })
    ball9.addEventListener('mouseout',()=>{
        outIner(ball9)
    })
    
}

// const balloonPopImg = {
//   0:'img/s-apelsinas.png',
//   1:'img/s-brok.png',
//   2:'img/s-banana.png',
//   3:'img/s-pomidoras.png',
//   4:'img/s-sur.png',
//   5:'img/s-darz.png',
//   6:'img/s-pienas.png',
//   7:'img/s-zuvis.png',
//   8:'img/s-vais.png',
//   9:'img/s-mesa.png' 
//  }
let counter = 0;
let pops = 0;
let total = 0
window.addEventListener('click',(e)=>{

    if(e.target.classList.contains('ball-img')){
      if(e.target.parentElement.classList.contains('ball0')){
        // dhtml.sendEvent('1','kiti-balionai')
        pops +=1
        total +=1
        pop(e.target,0)
      }
      if(e.target.parentElement.classList.contains('ball1')){
        // dhtml.sendEvent('1','kiti-balionai')
        pops +=1
        total +=1
        pop(e.target,1)
      }
      if(e.target.parentElement.classList.contains('ball2')){
        // dhtml.sendEvent('1','kiti-balionai')
        pops +=1
        total +=1
        pop(e.target,2)
      }
      if(e.target.parentElement.classList.contains('ball3')){
        // dhtml.sendEvent('1','kiti-balionai')
        pops +=1
        total +=1
        pop(e.target,3)
      }
      if(e.target.parentElement.classList.contains('ball4')){
        // dhtml.sendEvent('1','kiti-balionai')
        pops +=1
        total +=1
        pop(e.target,4)
      }
        
        if(e.target.parentElement.classList.contains('ball5')){
          // dhtml.sendEvent('2','darzoviu kainos')
          pops +=1
          counter +=1
          total +=1

            pop(e.target,5)
            setTimeout(()=>{
                let s = document.querySelector('.bal3')
                pop(s,3)
            },400)
            setTimeout(()=>{
              if5main(counter,pops)
            },1000)
        }
        if(e.target.parentElement.classList.contains('ball6')){
          // dhtml.sendEvent('3','pieno kainos')
            pop(e.target,6)
            counter +=1
            pops +=1
            total +=1
            setTimeout(()=>{
                let s = document.querySelector('.bal4')
                pop(s,4)
            },600)
            setTimeout(()=>{
              if5main(counter,pops)
            },1000)
        }
        if(e.target.parentElement.classList.contains('ball7')){
          // dhtml.sendEvent('4','zuvies kainos')
            pop(e.target,7)
            counter +=1
            pops +=1
            total +=1
            setTimeout(()=>{
                let s = document.querySelector('.bal0')
                pop(s,0)
            },200)
            setTimeout(()=>{
              if5main(counter,pops)
            },1000)
        }
        if(e.target.parentElement.classList.contains('ball8')){
          // dhtml.sendEvent('5','vaisiu kainos')
            pop(e.target,8)
            counter +=1
            pops +=1
            total +=1
            setTimeout(()=>{
                let s = document.querySelector('.bal1')
                pop(s,1)
            },600)
            setTimeout(()=>{
              if5main(counter,pops)
            },1000)
        }
        if(e.target.parentElement.classList.contains('ball9')){
          // dhtml.sendEvent('6','mesos kainos')
            pop(e.target, 9)
            counter +=1
            pops +=1
            total +=1
            setTimeout(()=>{
                let s = document.querySelector('.bal2')
                pop(s,2)
            },500)
            setTimeout(()=>{
              if5main(counter,pops)
            },1000)
        }
    }
})

let totalpops = 0

function pop(balloon, i){
    totalpops++
    // balloon.src = balloonPopImg[i]
    let parent = balloon.parentElement
    setTimeout(()=>{
      balloon.style.display = 'none'
      parent.querySelector('.ball-pop').style.display = 'block'
    },50)
    gsap.to(balloon,0.1,{scale:1.3})
    gsap.to(balloon,0.1,{opacity:0,delay:0.1})
    setTimeout(()=>{
        playAudio(audioUrl[Math.floor(Math.random()*4)])
        balloon.parentElement.remove()
    },200)
}

function inIner(balloon){
    gsap.to(balloon.children,0.5,{y:-100,rotate:`+=${Math.random()*20}`})
}

function outIner(balloon){
    gsap.to(balloon.children,0.5,{y:0,rotate:`-=${Math.random()*15}`})
}



(function(global){
    var module = global.noise = {};
  
    function Grad(x, y, z) {
      this.x = x; this.y = y; this.z = z;
    }
    
    Grad.prototype.dot2 = function(x, y) {
      return this.x*x + this.y*y;
    };
  
    Grad.prototype.dot3 = function(x, y, z) {
      return this.x*x + this.y*y + this.z*z;
    };
  
    var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
                 new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
                 new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];
  
    var p = [151,160,137,91,90,15,
    131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
    190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
    88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
    77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
    102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
    135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
    5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
    223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
    129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
    251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
    49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
    138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
    // To remove the need for index wrapping, double the permutation table length
    var perm = new Array(512);
    var gradP = new Array(512);
  
    // This isn't a very good seeding function, but it works ok. It supports 2^16
    // different seed values. Write something better if you need more seeds.
    module.seed = function(seed) {
      if(seed > 0 && seed < 1) {
        // Scale the seed out
        seed *= 65536;
      }
  
      seed = Math.floor(seed);
      if(seed < 256) {
        seed |= seed << 8;
      }
  
      for(var i = 0; i < 256; i++) {
        var v;
        if (i & 1) {
          v = p[i] ^ (seed & 255);
        } else {
          v = p[i] ^ ((seed>>8) & 255);
        }
  
        perm[i] = perm[i + 256] = v;
        gradP[i] = gradP[i + 256] = grad3[v % 12];
      }
    };
  
    module.seed(0);
  
    /*
    for(var i=0; i<256; i++) {
      perm[i] = perm[i + 256] = p[i];
      gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
    }*/
  
    // Skewing and unskewing factors for 2, 3, and 4 dimensions
    var F2 = 0.5*(Math.sqrt(3)-1);
    var G2 = (3-Math.sqrt(3))/6;
  
    var F3 = 1/3;
    var G3 = 1/6;
  
    // 2D simplex noise
    module.simplex2 = function(xin, yin) {
      var n0, n1, n2; // Noise contributions from the three corners
      // Skew the input space to determine which simplex cell we're in
      var s = (xin+yin)*F2; // Hairy factor for 2D
      var i = Math.floor(xin+s);
      var j = Math.floor(yin+s);
      var t = (i+j)*G2;
      var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
      var y0 = yin-j+t;
      // For the 2D case, the simplex shape is an equilateral triangle.
      // Determine which simplex we are in.
      var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
      if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
        i1=1; j1=0;
      } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
        i1=0; j1=1;
      }
      // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
      // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
      // c = (3-sqrt(3))/6
      var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
      var y1 = y0 - j1 + G2;
      var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
      var y2 = y0 - 1 + 2 * G2;
      // Work out the hashed gradient indices of the three simplex corners
      i &= 255;
      j &= 255;
      var gi0 = gradP[i+perm[j]];
      var gi1 = gradP[i+i1+perm[j+j1]];
      var gi2 = gradP[i+1+perm[j+1]];
      // Calculate the contribution from the three corners
      var t0 = 0.5 - x0*x0-y0*y0;
      if(t0<0) {
        n0 = 0;
      } else {
        t0 *= t0;
        n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
      }
      var t1 = 0.5 - x1*x1-y1*y1;
      if(t1<0) {
        n1 = 0;
      } else {
        t1 *= t1;
        n1 = t1 * t1 * gi1.dot2(x1, y1);
      }
      var t2 = 0.5 - x2*x2-y2*y2;
      if(t2<0) {
        n2 = 0;
      } else {
        t2 *= t2;
        n2 = t2 * t2 * gi2.dot2(x2, y2);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to return values in the interval [-1,1].
      return 70 * (n0 + n1 + n2);
    };
  
    // 3D simplex noise
    module.simplex3 = function(xin, yin, zin) {
      var n0, n1, n2, n3; // Noise contributions from the four corners
  
      // Skew the input space to determine which simplex cell we're in
      var s = (xin+yin+zin)*F3; // Hairy factor for 2D
      var i = Math.floor(xin+s);
      var j = Math.floor(yin+s);
      var k = Math.floor(zin+s);
  
      var t = (i+j+k)*G3;
      var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
      var y0 = yin-j+t;
      var z0 = zin-k+t;
  
      // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
      // Determine which simplex we are in.
      var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
      var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
      if(x0 >= y0) {
        if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
        else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
        else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
      } else {
        if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
        else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
        else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
      }
      // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
      // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
      // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
      // c = 1/6.
      var x1 = x0 - i1 + G3; // Offsets for second corner
      var y1 = y0 - j1 + G3;
      var z1 = z0 - k1 + G3;
  
      var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
      var y2 = y0 - j2 + 2 * G3;
      var z2 = z0 - k2 + 2 * G3;
  
      var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
      var y3 = y0 - 1 + 3 * G3;
      var z3 = z0 - 1 + 3 * G3;
  
      // Work out the hashed gradient indices of the four simplex corners
      i &= 255;
      j &= 255;
      k &= 255;
      var gi0 = gradP[i+   perm[j+   perm[k   ]]];
      var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
      var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
      var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];
  
      // Calculate the contribution from the four corners
      var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
      if(t0<0) {
        n0 = 0;
      } else {
        t0 *= t0;
        n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
      }
      var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
      if(t1<0) {
        n1 = 0;
      } else {
        t1 *= t1;
        n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
      }
      var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
      if(t2<0) {
        n2 = 0;
      } else {
        t2 *= t2;
        n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
      }
      var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
      if(t3<0) {
        n3 = 0;
      } else {
        t3 *= t3;
        n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to return values in the interval [-1,1].
      return 32 * (n0 + n1 + n2 + n3);
  
    };
  
    // ##### Perlin noise stuff
  
    function fade(t) {
      return t*t*t*(t*(t*6-15)+10);
    }
  
    function lerp(a, b, t) {
      return (1-t)*a + t*b;
    }
  
    // 2D Perlin Noise
    module.perlin2 = function(x, y) {
      // Find unit grid cell containing point
      var X = Math.floor(x), Y = Math.floor(y);
      // Get relative xy coordinates of point within that cell
      x = x - X; y = y - Y;
      // Wrap the integer cells at 255 (smaller integer period can be introduced here)
      X = X & 255; Y = Y & 255;
  
      // Calculate noise contributions from each of the four corners
      var n00 = gradP[X+perm[Y]].dot2(x, y);
      var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
      var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
      var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);
  
      // Compute the fade curve value for x
      var u = fade(x);
  
      // Interpolate the four results
      return lerp(
          lerp(n00, n10, u),
          lerp(n01, n11, u),
         fade(y));
    };
  
    // 3D Perlin Noise
    module.perlin3 = function(x, y, z) {
      // Find unit grid cell containing point
      var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
      // Get relative xyz coordinates of point within that cell
      x = x - X; y = y - Y; z = z - Z;
      // Wrap the integer cells at 255 (smaller integer period can be introduced here)
      X = X & 255; Y = Y & 255; Z = Z & 255;
  
      // Calculate noise contributions from each of the eight corners
      var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
      var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
      var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
      var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
      var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
      var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
      var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
      var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);
  
      // Compute the fade curve value for x, y, z
      var u = fade(x);
      var v = fade(y);
      var w = fade(z);
  
      // Interpolate
      return lerp(
          lerp(
            lerp(n000, n100, u),
            lerp(n001, n101, u), w),
          lerp(
            lerp(n010, n110, u),
            lerp(n011, n111, u), w),
         v);
    };
  
  })(this);


const el = document.querySelector('.mouse1');
const el2 = document.querySelector('.mouse2');
const con = document.querySelector('.container')
let lastMove = 0;

function onMouseMove (e) {
  x = e.clientX;
  y = e.clientY;
  updateMouse(x, y);
  lastMove = Date.now();
}

function updateMouse (x, y) {
    el.style.transform = `translate(${x}px, ${y}px)`;
    el2.style.transform = `translate(${x}px, ${y}px)`;
}

function render (a) {
  if (Date.now() - lastMove > 5000) {
    const noiseX = (noise.simplex3(2, 0, a*0.0004) + 1) / 2;
    const noiseY = (noise.simplex3(10, 0, a*0.0004) + 1) / 2;
    const x = noiseX * window.innerWidth;
    const y = noiseY * window.innerHeight;
    updateMouse(x, y);
  }
  
  requestAnimationFrame(render);
}

window.addEventListener('mousemove', onMouseMove);
requestAnimationFrame(render);


gsap.to('.cursor',1,{opacity:1,delay:3})

const audioUrl = {
    0:'sounds/pop1.mp3',
    1:'sounds/pop2.mp3',
    2:'sounds/pop3.mp3',
    3:'sounds/pop4.mp3'
}

const handUrl = {
  1:'img/hand-1.png',
  2:'img/hand-2.png'
}

function playAudio(url){
    new Audio(url).play()
}

window.addEventListener('load',()=>{

  document.querySelector('.mouse1').style.display = 'block'
})

window.addEventListener('mousedown',()=>{

  document.querySelector('.mouse1').style.display = 'none'
  document.querySelector('.mouse2').style.display = 'block'
})

window.addEventListener('mouseup',()=>{

  document.querySelector('.mouse1').style.display = 'block'
  document.querySelector('.mouse2').style.display = 'none'
})


function if5main(counter,pops){
  if(counter === 5){
      clearInterval(Interval)
      gsap.to('.layer',{opacity:1})
      gsap.to('.mouse',0.2,{opacity:0})
    setTimeout(()=>{
      afterAnimation()
    },500)
  }
  if(counter === 1){

    gsap.to('.layer',{opacity:0.02})
  }
  if(counter === 2){
    gsap.to('.layer',{opacity:0.03})
  }
  if(counter === 3){
    gsap.to('.layer',{opacity:0.04})
  }
  if(counter === 4){
    gsap.to('.layer',{opacity:0.05})
  }
}


function afterAnimation(){
    document.querySelector('.layer').style.zIndex = '5000'
  setTimeout(()=>{
    document.querySelector('body').style.cursor = 'pointer'
  })

  

  let tl = gsap.timeline()
  
  tl.to('.img0',1,{opacity:0,delay:1})
  tl.to('.img0',0.5,{opacity:0,delay:0.5})
  tl.to('.img1',0.5,{opacity:1,display:'block'})
  tl.to('.img1',0.5,{opacity:0,delay:1.5})
  tl.to('.img2',0.5,{opacity:1,display:'block'})
  tl.to('.img2',0.5,{opacity:0,delay:1.5})
  tl.to('.img3',0.5,{opacity:1,display:'block'})
  tl.to('.img3',0.5,{opacity:0,delay:1.5})
  tl.to('.img4',0.5,{opacity:1,display:'block'})
  tl.to('.img4',0.5,{opacity:0,delay:1.5})
    tl.to('.img5',0.5,{opacity:1,display:'block'})
  tl.to('.img5',0.5,{opacity:0,display:'none',delay:1.5})
  tl.to('.img-col',0.5,{display:'flex',opacity:1})
  tl.to('.reload',0.5,{opacity:1,display:'block',display:'flex'})




}

const head = document.querySelector('head')
const script = document.createElement('script')
script.src = `https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js?bv='${Math.random()}`;
head.appendChild(script);


window.addEventListener('DOMContentLoaded',()=>{

  balloonsGame()
})

document.querySelector('.reload').addEventListener('click',()=>{
                     clearInterval(Interval);
    setTimeout(()=>{
                 clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    },100)


  document.querySelector('.layer').style.zIndex = '0'
  counter = 0
  gsap.to('.mouse',1,{opacity:1})
  gsap.to('body',0.5,{cursor:'none'})
  gsap.to('.img-col',0.5,{opacity:0,display:'none'})
  gsap.to('.reload',0.5,{rotate:'-=360',opacity:0,display:'none'})
  balloonsGame()
  // dhtml.sendEvent('7','reload')
})

function renderEl(){

  gsap.to('.layer',1,{opacity:0.01,delay:3})
  gsap.to('.img0',1,{opacity:1,delay:3.3})
  let con0 = document.querySelector('#container0')
  let con1 = document.querySelector('#container1')
  const balloonImg = {
    0:'img/apelsinas.png',
    1:'img/brok.png',
    2:'img/banana.png',
    3:'img/pomidoras.png',
    4:'img/sur.png',
    5:'img/darz.png',
    6:'img/pienas.png',
    7:'img/zuvis.png',
    8:'img/vais.png',
    9:'img/mesa.png'
   }
   const balloonPopImg = {
    0:'img/s-apelsinas.png',
    1:'img/s-brok.png',
    2:'img/s-banana.png',
    3:'img/s-pomidoras.png',
    4:'img/s-sur.png',
    5:'img/s-darz.png',
    6:'img/s-pienas.png',
    7:'img/s-zuvis.png',
    8:'img/s-vais.png',
    9:'img/s-mesa.png' 
   }
  for(let i = 0;i < 10;i++){
    let ball = document.createElement('div')
    ball.id = `ball${i}`
    ball.classList.add('ball')
    ball.classList.add(`ball${i}`)
    ball.classList.add('noselect')
    ball.innerHTML = `<img src="${balloonImg[i]}" alt="" class="ball-img bal${i} noselect"><img src="${balloonPopImg[i]}" alt="" class="ball-img ball-pop bal${i} noselect">`
    if(i<3){con0.appendChild(ball)}
    if(i>2 && i<5){con1.appendChild(ball)}
    if(i>4 && i<7){con0.appendChild(ball)}
    if(i>6){con1.appendChild(ball)}
  }
  
}



  
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var Interval ;
  

  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  




let clicks = 0;

window.addEventListener('click',()=>{
    gsap.to('.timer',0.5,{opacity:1})
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
     if(totalpops === 10){
             clearInterval(Interval);
     }
})

