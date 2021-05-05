let urlApi = (location.hostname === "localhost" || location.hostname === '127.0.0.1')
? "http://localhost:3000/"
: "https://p5jp.herokuapp.com/"

console.log(urlApi)