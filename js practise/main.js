var myInput = document.querySelector('#myInput')

var btn =  document.querySelector('#btn')

var para =  document.querySelector('#para')


var inputValue ='';




// inputValue er value update
myInput.addEventListener('change',function(){
    inputValue = myInput.value
   
})

btn.addEventListener('click',function(){

    if(inputValue ==''){
        alert("you've to write something before submit!");
        
    }else{
      
     para.innerHTML += '<p>' + inputValue  + '</p>';
       myInput.value =''
       inputValue =''
       
       
    }



})


