 

            let ActionButton = document.getElementById("action");

            let displayScreen = document.getElementById("display");

            ActionButton.addEventListener("click", () =>{

                //alert('This the truth app');

                displayScreen.innerHTML =`<small>
                       You shall know the truth and 
                       the truth shall set you free 
                       <strong>John 8:36</strong>
                    </small>`;

                displayScreen.style.backgroundColor="yellow";




            })
            
            let resetButton = document.getElementById("reset");

            resetButton.addEventListener("click", ()=>{
                displayScreen.innerHTML="";
                displayScreen.style.backgroundColor ="white";
            })
          
