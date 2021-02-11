class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",playerImg);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", playerImg);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(backImg, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         

                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);
                         
                     }
                    
                     //text to display player score.
                     fill("white");
                         textSize(20);
                 text("Player1 Supplies Catched :"+player1Score,100,200);
                 fill("white");
                         textSize(20);
                 text("Player2 Supplies Catched :"+player2Score,100,250);

                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     supplies = createSprite(random(100, 1000), 0, 100, 100);
                     supplies.velocityY = 6;
                    
                     var rand = Math.round(random(1,4));
                     switch(rand){
                         case 1: supplies.addImage("supply1",appleImg);
                         break;
                         case 2: supplies.addImage("supply1", bananaImg);
                         break;
                         case 3: supplies.addImage("supply1", breadImg);
                         break;
                         case 4: supplies.addImage("supply1", milkImg);
                         break;

                     }
                     supplyGroup.add(supplies);
                     
                 }
                 
                  if (player.index !== null) {
                    
                     if(player1.isTouching(supplyGroup)){
                        supplyGroup.destroyEach();
                        player1Score = player1Score+1;
                  }
                  if(player2.isTouching(supplyGroup)){
                    supplyGroup.destroyEach();
                    player2Score = player2Score+1;
              }
              

                  }
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}