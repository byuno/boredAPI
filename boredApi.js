const axios = require('axios');

// Get the activity based on the number of participants
async function get_activity (num_participants) {
  try {
    const response = await axios.get(`https://www.boredapi.com/api/activity?participants=${num_participants}`);
    let max_participants = 5;
    let activity = response.data.activity;
    let error_key = Object.keys(response.data);
    let error_value = Object.values(response.data);
    
    if(num_participants > max_participants){
      return `For ${num_participants} participants, an error occurred. Json: [{'${error_key}': '${error_value}'}]`;
    }
    else{
      return `For ${num_participants} participants, the activity we found is '${activity}'`;
      }  
  } 
  catch (error) {
    console.error(error);
  }
}

// Print to console the output of get_activity()
async function print_get_activity(num_participants){
  let testOutput = console.log(await get_activity(num_participants));
}

// Loop through a group of 6 participants 
async function loop_get_activity(){
  for(let i = 1; i < 7; i++){
    let testOutput = console.log(await get_activity(i));
  }
}

//print_get_activity(10);

loop_get_activity();
