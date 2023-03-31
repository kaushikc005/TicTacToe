
//Variables Initialization
let box=document.querySelectorAll('.box');
let boxText=document.querySelectorAll('.boxText')
let turnOf=document.getElementById('turn');
let turn='X';
let winArray=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let boxSet=[0,0,0,0,0,0,0,0,0]
let gameOver=false;
let wonImg=document.getElementById('won_gif');
let boxCount=0;
let reset=document.getElementById('reset');
let resetOn=false;
let winMusic=new Audio('gameover.mp3')
let moveMusic=new Audio('ting.mp3')

//Inserting X/0 in the boxes on each click  



box.forEach((b,i)=>{
    b.addEventListener('click',()=>{
        if(turn==='X')
        {
            if(boxText[i].innerHTML=="")
            {
                boxText[i].innerHTML='X';
             
                moveMusic.play();
                moveMusic.currentTime=0;
                boxCount++;
                checkWin();
                if(gameOver)
                {
                    turnOf.innerHTML=`${turn} won 🎉`;
                    winMusic.play();
                }
            
                else
                {
                    turn='0';
                    if(boxCount==9)
                    turnOf.innerHTML=`It's a draw &#128517;`;
                    else
                    {
                        turnOf.innerHTML=`Turn for ${turn} &#128523`;
                    }
                    
                }
             }
             else
             {
                alert("Already set");
             }
              
            
        }
        else
        {
             
            if(boxText[i].innerHTML=="")
            {
                boxText[i].innerHTML='0';
                
                moveMusic.play();
                moveMusic.currentTime=0;
                boxCount++;
                checkWin();
                if(gameOver)
                {
                    turnOf.innerHTML=boxText[i].innerHTML+ " won 🎉";
                    setTimeout(winMusic.play(),10000);
                
                }
                
                else
                {
                    turn='X';
                    if(boxCount==9)
                    turnOf.innerHTML=`It's a draw`;
                    else
                    {
                        turnOf.innerHTML=`Turn for ${turn}`;
                        
                    }
                    
                }
            }
            else
            {
                alert('Already Set')
            }   
            
        }
            
         })
})

const checkWin=()=>{
    
    winArray.forEach((e)=>{
        if((boxText[e[0]].innerHTML==boxText[e[1]].innerHTML) && (boxText[e[1]].innerHTML==boxText[e[2]].innerHTML) && (boxText[e[0]].innerText!==""))
        {
            gameOver=true;
            wonImg.style.width="200px";
           
        }
    })
    
}

reset.addEventListener('click',()=>{
    boxText.forEach((b)=>{
          b.innerHTML="";        
    });
    turn='X';
    turnOf.innerHTML=`First Turn for ${turn}`;
    wonImg.style.width="0px";
    gameOver=false;
    boxCount=0;

    
});

