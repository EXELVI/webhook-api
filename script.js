//By EXELVI#8345
//For ItzLucio#4917


function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}


var webh = getUrlVars()

function sendMsg() {


  var request = new XMLHttpRequest();
  request.open("POST", `https://discordapp.com/api/webhooks/${webh.id}/${webh.token}`);


  request.setRequestHeader('Content-type', 'application/json');

  var params = {
     content: webh.content, 
     username: webh.username,
      embeds: [{
        "title": webh.etitle,
        "description": webh.edescription,
        "color": webh.ecolor,
        "footer": webh.efooter
      }]
    
    }

  request.send(JSON.stringify(params));

}

sendMsg()


    
  