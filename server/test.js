const axios = require('axios'); 

// axios.update('http://localhost:5000/tweets', "5ce2911e02993b28fca21e79").then(res => console.log(res.data)).catch(err => err.message)

axios.patch('http://localhost:5000/tweets/5ce2a2cb92ec442de8937cd2', {tweet: 'Hello my name is asad'})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);            
});



// axios.default.get('http://localhost:5000/tweetsds').then(res=>console.log(res.data)).catch(err => console.log(err.message))