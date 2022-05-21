//By EXELVI#8345
//For ItzLucio#4917
//Before using/copying ask to EXELVI#8345
//I explained how it works, read comment

var webh = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
  webh[key] = value;
}); //Here we take url arguments (Ex: { token: "0432..." }), you can see it in the console

function sendMsg() {
  console.log(webh) //Send to console url arguments

  if (!webh.token && !webh.id) return console.error("No webhook token and id found"); //If it don't find the token and id print an error
  if (!webh.token) return console.error("No webhook token found"); //If it don't find the token print an error
  if (!webh.id) return console.error("No webhook id found"); //If it don't find the id print an error

  var request = new XMLHttpRequest(); //Http request
  request.open("POST", `https://discordapp.com/api/webhooks/${webh.id}/${webh.token}`);//It open a request to discord with the id and token of the webhook

  request.setRequestHeader('Content-type', 'application/json'); //Set the header

  var params = {
    content: webh.content,
    username: webh.username,
    embeds: [{
      "title": webh.etitle,
      "description": webh.edescription,
      "color": webh.ecolor,
      "footer": webh.efooter
    }]
  }//The variables for the webhook
  
  request.send(JSON.stringify(params)); //Send the request to discord (send the webhook)
}

sendMsg() //Starts the function