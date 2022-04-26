fetch('https://api.igdb.com/v4/games/',{
  
    method : 'POST',
    headers : {
        'Client-ID' : '--client_id--', 
        'Authorization' : 'Bearer --auth_key--',
    },
  
    body : 'fields *,rating; sort rating asc; limit 180;'

}).then( response => {
  
    console.log(response.body);
    return response.json();
  
}).then( data => {
  
    console.log(data[45]);
    data.map((el)=> console.log("Name : ",el.name, "Rating",el.rating));
  
})
