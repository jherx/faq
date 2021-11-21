window.onload = function() {
    const arrow = document.getElementsByClassName("arrow1")
    const question = document.getElementsByClassName("question-container1")
    const panel = document.getElementsByClassName("answer1")
    
    
    
    
     
    

 //makes question clickable   
    for (let i = 0; i < question.length; i++) {
          

        question[i].addEventListener('click', function(){
            console.log(question[i])
            this.classList.toggle('question-active')
            this.lastElementChild.classList.toggle('arrow-rotate') 
            const panel = this.nextElementSibling
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
                }   else{
                        panel.style.maxHeight = panel.scrollHeight + "px"        
            
                        }
            })
        
    }
//makes answer clickable
    for (let i = 0; i <panel.length; i++) {
        
        panel[i].addEventListener('click', function(){
            
            if (this.style.maxHeight){
                this.style.maxHeight = null;
                }   else{
                        panel.style.maxHeight = panel.scrollHeight + "px"        
            
                        }
            this.previousElementSibling.children[1].classList.toggle('arrow-rotate') 
            console.log(this)
            this.previousElementSibling.classList.toggle('question-active')                
        })
    }

}
        
    
