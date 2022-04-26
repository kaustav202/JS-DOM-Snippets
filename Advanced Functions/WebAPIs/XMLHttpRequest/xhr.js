var webAPI = new XMLHttpRequest();

webAPI.open('POST','https://id.twitch.tv/oauth2/token?client_id=--client_id--&client_secret=--client_secret--&grant_type=client_credentials');  // initialize the request obj

webAPI.setRequestHeader('Client-ID' , '---');
webAPI.setRequestHeader('Authorization' , 'Bearer ---');

webAPI.onload = ()=>{

    console.log(webAPI.status);
    console.log(this.response);
}

webAPI.send();     // Sends the request to the server
