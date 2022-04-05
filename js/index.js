// كود الفيديو كااامل
/*const random_quote='https://api.quotable.io/random';
const qoute_display=document.querySelector('.qoute-display');
const qoute_input=document.querySelector('.qoute-input')
const timer=document.querySelector('.timer')

function getRandomQuote(){
   return fetch(random_quote)
    .then(response=>response.json())
    .then(data=>data.content)
      //  qoute_display.textContent=data.content   
}
async function RenderNewQuote(){
    let quote= await getRandomQuote()
    qoute_display.textContent=''
    
    quote.split('').forEach(ch => {
        const chspan=document.createElement('span')
        chspan.textContent=ch
        qoute_display.appendChild(chspan)
        qoute_input.value=null
    });

    time()

    
   
}
RenderNewQuote()

// ده كان كود الفيديو 
let connect=true
qoute_input.addEventListener('input',()=>{
    const arrayQuote=qoute_display.querySelectorAll('span')
    const arrayvalue=qoute_input.value.split('');
    arrayQuote.forEach((characterspan,index) => {
        const character=arrayvalue[index]
       
       if(character==null)
        {
            characterspan.classList.remove('correct')
            characterspan.classList.remove('incorrect')
             connect=false
        }
         else if(character==characterspan.innerText){
            characterspan.classList.add('correct')
           
        }
        else{
            characterspan.classList.add('incorrect')
            connect=false
        }  
    });
    if(connect){
RenderNewQuote()


}
    
})
//timer*******

let starttime
function time(){
    timer.innerText=0
    starttime=new Date();
  
    setInterval(()=>{
        timer.innerText=gettime()

    },1000)
}

function gettime(){
    return Math.floor((new Date()-starttime)/1000)  
}*/

// تدريب ع الكود اللي فوق من دماغي انا

/*const api='https://api.quotable.io/random'
const quote_display=document.querySelector('.qoute-display')
const quote_input=document.querySelector('.qoute-input')
const timer=document.querySelector('.timer')
//let counter=-1


function get_data(){
  return  fetch(api)
    .then((res)=>res.json())
    .then(data=>data.content)
}

async function renderNewQuote(){
    const data=await get_data()
    quote_display.innerText=null
    data.split('').forEach(ch=>{
        const spanElement=document.createElement('span')
        spanElement.textContent=ch
        quote_display.appendChild(spanElement)
        quote_input.value=null

    })
  //  counter=-1      ده كود الكونتر اللي كان من دماغي شيل الكومنت لو عاوز تشغله 
    setTime()
    
}
renderNewQuote()


    let x=true
    quote_input.addEventListener('input',()=>{
        const spanArray=quote_display.querySelectorAll('span')
      const inputArray=quote_input.value.split('')
      
        spanArray.forEach((element,index) => {
            const character=inputArray[index]
            if(character==null){
                element.classList.remove('correct')
                element.classList.remove('incorrect')
                x=false


            }
         else if(character==element.innerText){
                element.classList.add('correct')
           
               
            }
            else{
                element.classList.add('incorrect')
                x=false
    }    
   
   
        });
        if(x){
            renderNewQuote()
    
        } 
           
    })


   /*
    // ده كان كود عملته من دماغي للكونتر والحمد لله اشتغل 
    الكود ده مش موجود ف الفيديو 
    function setcount(){
        
        counter++
        timer.textContent=counter
        
    }
    setInterval(setcount,1000)

    let starttime
    function setTime(){
        timer.innerText=0
        starttime=new Date()
        setInterval(()=>{
        
            timer.innerText=gettime()

        },1000)

    }
    function gettime(){
        return Math.floor((new Date()-starttime)/1000)
    }

    setTime()*/
    const api='https://api.quotable.io/random'
    const quote_display=document.querySelector('.qoute-display')
    const quote_input=document.querySelector('.qoute-input')
    const timer=document.querySelector('.timer')
    let counter=-1

    function getQuotes(){
     return   fetch(api)
        .then(res=>res.json())
        .then(data=>data.content)
    }
   
    async function RenderNewQuote(){
        const data=await getQuotes()
        quote_display.textContent= null
        data.split('').forEach(ch => {
            let spanElement=document.createElement('span')
            spanElement.innerText=ch
            quote_display.appendChild(spanElement)
            quote_input.value=null
            
        });
        counter=-1
        setcount()
 

    }
    RenderNewQuote()
    let control=true

    quote_input.addEventListener('input',()=>{
        const spanArray=quote_display.querySelectorAll('span')
        const inputArray=quote_input.value.split('')

        spanArray.forEach((element,index) => {
            const character=inputArray[index]
            if(character==null){
                element.classList.remove('correct')
                element.classList.remove('incorrect')
                control=false

            }
            else if(character==element.innerText)
            element.classList.add('correct')
            else
            {
                element.classList.add('incorrect')
                control=false

            }
          

         
            
        });
        if(control){
            RenderNewQuote()

        }

    })

   
    function setcount(){
        counter++
        timer.innerText=counter
        
      
     
    }
    setInterval(setcount,1000)



   

   

   



    
    
   

    


  
    

























































/*qoute_input.addEventListener('input',()=>{
    const arrayofspans=qoute_display.querySelectorAll('span')
    const arrayofinputs=qoute_input.value.split('')
    arrayofspans.forEach((element,index)=>{
        if(arrayofinputs[index]==null){
            element.classList.remove('correct')
            element.classList.remove('incorrect')

        }
       else if(element.textContent===arrayofinputs[index]){
            element.classList.add('correct')
        }
        else{
            element.classList.add('incorrect')

        }

    })      
    });*/
   
    
   



















//studying promises with await kyword////*********** 
/*function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`making request to location ${location}`)
        if(location==='google')
        resolve('google says hi')
        else
        reject('we can only talk to google')

    })
}
function processRequest(responce)
{
    return new Promise((resolve,reject)=>{
        console.log('response recieved')
        resolve(`extra infomation ${responce}`)

    })
}

makeRequest('guuf').then(response=>{
    console.log('response recieved ')
    return processRequest(response)
}).then(processResponse=>{
    console.log(processResponse)
}).catch(err=>console.log(err))*/

/*function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log( `establishing connection to ${location}...`)
        if(location==='google')
        resolve('google say hi')
        else
        reject('sorry we only talk to google')
    })
}

function processResponse(response){
    return new Promise((resolve,reject)=>{
        console.log('response recieved ')
        resolve(`extra information ${response}`)
   

    })
}

makeRequest('yahoo').then(message=>{
    console.log('message recived')
    return processResponse(message)

}).then(e=>console.log(e))
.catch(err=>console.log(err))
async function dowork(){
    try{
        let message =await makeRequest('tawfek')
        console.log('message recieved')
        let response=await processResponse(message)
        console.log(response)

    }
    catch(err){
        console.log(err)

    }

}
dowork()
//كود ال await اكتبه ف الكشكول ضروري

function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`establishing connection to ${location}`)
        if(location==='google')
        resolve('google say hi')
        else
        reject('we only talk to google')

    })
}
function processResponse(message){
    return new Promise((resolve,reject)=>{
        console.log('processing')
        resolve(message)


    })
}

async function work(){
    try{
        let message=await makeRequest('google');
        console.log('response recieved')
        let result=await processResponse(message)
        console.log(`extra data ${result}`)


    }
    catch(err){
        console.log(err)
    }   
}
work()*/













    







