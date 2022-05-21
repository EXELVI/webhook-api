//By EXELVI#8345
//For NTeXploit
//Before using/copying ask to EXELVI#8345
//I explained how it works, read comment

var webh = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
  webh[key] = value;
}); //Here we take url arguments (Ex: { token: "0432..." }), you can see it in the console


function sendMsg() {
  console.log(webh) //Send to console url arguments



  var request = new XMLHttpRequest(); //Http request
  request.open("POST", `http://localhost:8080/test/`); //It open a request to discord with the id and token of the webhook
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

  request.send(JSON.stringify(params))
}

sendMsg() //Starts the function 