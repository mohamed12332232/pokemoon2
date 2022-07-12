

const grass_count = 40,
grasss_class = "grass";

const pokeball_count = 4,
pokeball_class = "pokeball";



let player_Pos = {
    
    x:0,
    y:0,
    
}


let player_vel = {
  x: 0,
  y: 0,
};



const start_point ={
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
}
const player = document.querySelector(".player");

const player_speed = 1.8;

const sound = new Audio("assets/coin.mp3")


function start() {
    generate_random_element(grass_count, grasss_class);
    generate_random_element(pokeball_count, pokeball_class);
    player_Pos = start_point;
}


function update() {
    
    player_Pos.x += player_vel.x
    player_Pos.y += player_vel.y

    player.style.left = player_Pos.x + "px"
    player.style.top = player_Pos.y + "px"
    
    
    
    check_collisions();

    requestAnimationFrame(update);
}






// ======== handle player movenet =======

window.addEventListener("keydown", e => {

    if (e.key == "ArrowUp") {
        player_vel.y = -1 * player_speed;
        player.style.backgroundImage = "url(assets/player_front.png)"
    }
    
    if (e.key == "ArrowDown") {
        player_vel.y = 1 * player_speed;
        player.style.backgroundImage =" url(assets/player_back.png)"
    }
    if (e.key == "ArrowLeft") {
        player_vel.x = -1 * player_speed;
        player.style.backgroundImage =" url(assets/player_left.png)"
    }
    if (e.key == "ArrowRight") {
        player_vel.x = 1 * player_speed;
        player.style.backgroundImage =" url(assets/player_right.png)"
    }

    player.classList.add("walk");
    
    
    
    
})

window.addEventListener("keyup", e => {
    player_vel.x  = 0;
    player_vel.y  = 0;
    player.classList.remove("walk");
    
    
})

 // ===== check check_collisions
function check_collisions() {
    pokeballs = document.querySelectorAll(".pokeball");

    pokeballs.forEach((pokeballs) => {
      if (collision(pokeballs, player)) {

          
        // if collision code
           pokeballs.style.left = Math.random() * 100 + "%";
          pokeballs.style.top = Math.random() * 100 + "%";
            sound.play();
      }
    });

}



// =============== check collision between 2 divs =====



function collision($div1, $div2) {
  var x1 = $div1.getBoundingClientRect().left;
  var y1 = $div1.getBoundingClientRect().top;
  var h1 = $div1.clientHeight;
  var w1 = $div1.clientWidth;
  var b1 = y1 + h1;
  var r1 = x1 + w1;

  var x2 = $div2.getBoundingClientRect().left;
  var y2 = $div2.getBoundingClientRect().top;
  var h2 = $div2.clientHeight;
  var w2 = $div2.clientWidth;
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}




// start generate random element


function generate_random_element(ele_count, className) {
    for (let count = 0; count < ele_count; count++) {
        const new_ele = document.createElement("div");
        new_ele.classList.add(className);
        new_ele.style.left = Math.random() * 100 + "%";
        new_ele.style.top = Math.random() * 100 + "%";
        
        document.body.appendChild(new_ele);
    }
}


start();
update();
