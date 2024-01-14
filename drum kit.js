//  use for loop for drums buttons


// detecting button press
var numdrum = document.querySelectorAll(".drum");
for(var i =0 ;i<=numdrum.length ;i++)
   {

          document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            
             var buttonInnerHTML = this.innerHTML;

             makesound(buttonInnerHTML);

            buttonanimation(buttonInnerHTML);

            
          })
        
 // deetecting keyboard press
          document.addEventListener("keypress",function(event)
          {

          makesound(event.key);

          buttonanimation(event.key);

        });
  



        function makesound(key) {

            switch(key)
            {
               case ("w"):
                   var tom1 = new Audio('Images/sound/tom-1.mp3');
                   tom1.play();
                    break;
                    
        
                    case "a":
                       var tom2= new Audio('Images/sound/tom-2.mp3');
                       tom2.play();
                        break;
        
                        case "s":
                           var tom3= new Audio('Images/sound/tom-3.mp3');
                           tom3.play();
                            break;
        
                            case "d":
                               var tom4= new Audio('Images/sound/tom-4.mp3');
                               tom4.play();
                                break;
        
                                case "j":
                                   var snare= new Audio('Images/sound/snare.mp3');
                                   snare.play();
                                    break;
                                    
                                    case "k":
                                       var  crash= new Audio('Images/sound/crash.mp3');
                                       crash.play();
                                        break;
                                        
                                        case "l":
                       var kick= new Audio('Images/sound/kick-bass.mp3');
                       kick.play();
                        break;
        
                    default: console.log(buttonInnerHTML);
        
               }
        }
        function buttonanimation(currentkey)
        {
         var activebutton =  document.querySelector("." + currentkey);    
             activebutton.classList.add("pressed");
        
             setTimeout(function() {
                activebutton.classList.remove("pressed");
             } , 200)
            }

    // // zero button 
    //       if(i ===0)
    //       {
    // document.querySelectorAll(".drum")[0].addEventListener("click", function () {
    //     var audio = new Audio('Images/sound/tom-1.mp3');
    //     audio.play();
    //  }); }
          
    //    // first button
    //    if(i===1)
    //    {
    //     document.querySelectorAll(".drum")[1].addEventListener("click" , function () {
    //        var audio = new Audio('Images/sound/tom-2.mp3');
    //        audio.play();
    //     });
    //     }

    //     // second button
    //     if(i==2)
    //     {
    //         document.querySelectorAll(".drum")[2].addEventListener("click" , function () {
    //             var audio = new Audio('Images/sound/tom-3.mp3');
    //             audio.play();
    //         });
    //      }

    //     // third button
    //     if(i===3)
    //     {
    //     document.querySelectorAll(".drum")[3].addEventListener("click" , function() {
    //         var audio = new Audio('Images/sound/kick-bass.mp3');
    //     audio.play();
    //          })
    //     }

    //      // fourth button 
    //      if(i ===4)
    //      {
    //         document.querySelectorAll(".drum")[4].addEventListener("click",function(){
    //            var audio = new Audio ('Images/sound/crash.mp3');
    //            audio.play();
    //         })
    //      }

    //      // fifth button
    //      if(i ===5)
    //      {
    //         document.querySelectorAll(".drum")[5].addEventListener("click",function()
    //         {
    //             var audio = new Audio ('Images/sound/snare.mp3');
    //             audio.play();
    //         })
    //      } 
         
    //      // six button
    //      if(i ===5)
    //      {
    //         document.querySelectorAll(".drum")[6].addEventListener("click",function()
    //         {
    //             var audio = new Audio ('Images/sound/tom-4.mp3');
    //             audio.play();
    //         })
    //      } 

   }



// 
// use for click on first button

// document.querySelector("button").addEventListener("click",handleclick)

// function handleclick() {
//     alert("i got clicked!");
// }
//  asynchromous  
//  what to do when click detected
// document.querySelector("button").addEventListener("click",function() {
//     alert("i got clicked!"); });

