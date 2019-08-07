const axios=require('axios');
const xlsxj = require("xlsx-to-json"); 

xlsxj({
  input: "file.xlsx", 
  output: "file.json"
}, function(err, birthdays) {
  if(err) {
    console.error(err);
  }else {
    console.log(birthdays);

    let arrayOfResult='';
    
    for (const birthday of birthdays) {  
     arrayOfResult+= `${birthday['DATE OF BIRTH']} ${birthday['FULL NAME']}\n`;
    }

   

    console.log(arrayOfResult);
  
    

    let slackurl= 'https://hooks.slack.com/services/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';



    axios.post(slackurl,{
        text:arrayOfResult
    }).then((response) =>{
        console.log('here')
    }).catch((e) =>{
        console.error(e.response.data)
    })
  }
});


