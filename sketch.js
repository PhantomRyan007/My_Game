var ken_jump,ken_rund,ken_stand,ken_jump,ken_downsa,ken_rund,ken_lefta,ken_rightd,ken_rightw,ken_guard,ken_rightspace,ken_punch,ken_f,ken_win

var Ken
var enemy

function preload(){
    ken_stand =loadAnimation("ken-stand/ken-stand (2).png")
    ken_jump = loadAnimation("Ken Jump/ken-_jump.png","Ken Jump/ken-_jump_1","Ken Jump/ken-_jump_2","Ken Jump/ken-_jump_3","Ken Jump/ken-_jump_4","Ken Jump/ken-_jump_5","Ken Jump/ken-_jump_6")
    ken_downsa = loadAnimation("ken-down+y/kwn_down+y.png","ken-down+y/kwn_down+y (1).png","ken-down+y/kwn_down+y (2).png","ken-down+y/kwn_down+y (3).png","ken-down+y/kwn_down+y (4).png","ken-down+y/kwn_down+y (5).png","ken-down+y/kwn_down+y (6).png","ken-down+y/kwn_down+y (7).png","ken-down+y/kwn_down+y (8).png","ken-down+y/kwn_down+y (9).png")
    ken_rund = loadAnimation("ken-run/ken-run(1)","ken-run/ken-run(2)","ken-run/ken-run(3)","ken-run/ken-run(4)","ken-run/ken-run(5)","ken-run/ken-run(6)") 
    backgroundI = loadImage("bgstg1.jpg")
    ken_lefta = loadAnimation("ken up_bi/ken_-_up__bi","ken up_bi/ken_-_up__bi(1)","ken up_bi/ken_-_up__bi(2)","ken up_bi/ken_-_up__bi(3)","ken up_bi/ken_-_up__bi(4)","ken up_bi/ken_-_up__bi(5)","ken up_bi/ken_-_up__bi(6)","ken up_bi/ken_-_up__bi(7)","ken up_bi/ken_-_up__bi(8)","ken up_bi/ken_-_up__bi(9)","ken up_bi/ken_-_up__bi(10)","ken up_bi/ken_-_up__bi(11)","ken up_bi/ken_-_up__bi(12)","ken up_bi/ken_-_up__bi(13)")
    ken_rightd = loadAnimation("ken-forward/ken-forward (1)","ken-forward/ken-forward (2)","ken-forward/ken-forward (3)","ken-forward/ken-forward (4)","ken-forward/ken-forward (5)","ken-forward/ken-forward (6)","ken-forward/ken-forward (7)","ken-forward/ken-forward (8)","ken-forward/ken-forward (9)")
    ken_rightw = loadAnimation("ken-jump+y/ken-_jump+y","ken-jump+y/ken-_jump+y (1)","ken-jump+y/ken-_jump+y (2)","ken-jump+y/ken-_jump+y (3)","ken-jump+y/ken-_jump+y (4)")
    ken_guard = loadAnimation("ken-guard/ken-guard (1),ken-guard/ken-guard (2),ken-guard/ken-guard (3),ken-guard/ken-guard (4)")
    ken_rightspace = loadAnimation("ken-koma-attac/ken-_koma_attac (1)","ken-koma-attac/ken-_koma_attac (2)","ken-koma-attac/ken-_koma_attac (3)","ken-koma-attac/ken-_koma_attac (4)","ken-koma-attac/ken-_koma_attac (5)",)
    ken_punch = loadAnimation("ken-biu/ken-biu (1)","ken-biu/ken-biu (2)","ken-biu/ken-biu (3)","ken-biu/ken-biu (4)",)
    ken_f = loadAnimation("ken-ultimate/ken_-_ultimate","ken-ultimate/ken_-_ultimate (1)","ken-ultimate/ken_-_ultimate (2)","ken-ultimate/ken_-_ultimate (3)","ken-ultimate/ken_-_ultimate (4)","ken-ultimate/ken_-_ultimate (5)","ken-ultimate/ken_-_ultimate (6)")
    ken_win = loadAnimation("ken-win/ken-win (1)","ken-win/ken-win (2)","ken-win/ken-win (3)","ken-win/ken-win (4)","ken-win/ken-win (5)","ken-win/ken-win (6)","ken-win/ken-win (7)","ken-win/ken-win (8)","ken-win/ken-win (9)","ken-win/ken-win (10)","ken-win/ken-win (11)","ken-win/ken-win (12)","ken-win/ken-win (13)","ken-win/ken-win (14)") 
}



function setup(){
    createCanvas(windowWidth,windowHeight)

    Ken = createSprite(100,height/2+150)
    Ken.addAnimation("stand",ken_stand)
   
    Ken.scale =0.2
}

function draw(){
    background(backgroundI)

    if(keyWentDown("space")){
        Ken.addAnimation("jump",ken_jump)
        Ken.changeAnimation("jump",ken_jump)
    }
    else if (keyWentUp("space")){
    Ken.addAnimation("stand",ken_stand)

      Ken.changeAnimation("stand",ken_stand)
    }

    if(keyWentDown("s")&&keyWentDown("LEFT_ARROW")){
        Ken.addAnimation("downsa",ken_downsa)
        Ken.changeAnimation("downsa",ken_downsa)
    Ken.scale =0.3 

    }
    else if (keyWentUp("s")){

    Ken.addAnimation("stand",ken_stand)

      Ken.changeAnimation("stand",ken_stand)
      Ken.scale = 0.2  

    }
if(keyWentDown("d")){
        Ken.addAnimation("ken_rund",ken_rund)
        Ken.changeAnimation("ken_rund",ken_rund)
}

if(keyWentDown("a")&&keyWentDown(LEFT_ARROW)){
    Ken.addAnimation("ken_lefta",ken_lefta)
    Ken.changeAnimation("ken_lefta")
}
else if(keyWentUp("a")){
Ken.addAnimation("stand", ken_stand)
 Ken.changeAnimation("stand", ken_stand)
}

if(keyWentDown("d")&&keyWentDown(RIGHT_ARROW)){
    Ken.addAnimation("ken_rightd",ken_rightd)
    Ken.changeAnimation("ken_rightd")
}
else if(keyWentUp("d")){
Ken.addAnimation("stand", ken_stand)
 Ken.changeAnimation("stand", ken_stand)
}
if(keyWentDown(16)){
    Ken.addAnimation("ken_guard",ken_guard)
    Ken.changeAnimation("ken_guard")
}
else if(keyWentUp("d")){
Ken.addAnimation("stand", ken_stand)
 Ken.changeAnimation("stand", ken_stand)
}
if(keyWentDown("w")&&keyWentDown(RIGHT_ARROW)){
    Ken.addAnimation("ken_rightw",ken_rightw)
    Ken.changeAnimation("ken_rightw")
}
else if(keyWentUp("d")){
Ken.addAnimation("stand", ken_stand)
 Ken.changeAnimation("stand", ken_stand)
}

if(keyWentDown("w")&&keyWentDown(RIGHT_ARROW)){
    Ken.addAnimation("ken_rightw",ken_rightw)
    Ken.changeAnimation("ken_rightw")
}
else if(keyWentUp("d")){
Ken.addAnimation("stand", ken_stand)
 Ken.changeAnimation("stand", ken_stand)
}

if(keyWentDown("e")){
    Ken.addAnimation("ken_punch",ken_punch)
    Ken.changeAnimation("ken_punch")
}
else if(keyWentUp("e")){
Ken.addAnimation("stand", ken_stand)
 Ken.changeAnimation("stand", ken_stand)
}

if(keyWentDown("f")){
    Ken.addAnimation("ken_f",ken_f)
    Ken.changeAnimation("ken_f")
}
else if(keyWentUp("f")){
Ken.addAnimation("stand", ken_stand)
 Ken.changeAnimation("stand", ken_stand)
}
    drawSprites();
}