const http = require('http');
const fs = require('fs');

function doOnRequest(request, response){
  // Send back a message saying "Welcome to Twitter"
  // code here...
  
  if (request.method === 'GET' && request.url === '/') {
    // read the index.html file and send it back to the client
    // code here...
    // fs.readFileSync('index.html', 'utf8', (err, data)=>{
    //     response.end(data);
    // })
    async function logChunks(readable){
        for await (const chunk of readable) {
          response.end(chunk);
        }
    }
      
        
      const readable = fs.createReadStream(
        'index.html', {encoding: 'utf8'});
    logChunks(readable);
    // let ar = [1, 2, 3, 4, 5];
    // async function fs() {
    
    // for await (i of ar)
    // {
    //     response.end(`${i}...`);
    // }}
    // fs();

    // response.end('ARif');
      }
  else if (request.method === 'POST' && request.url === '/sayHi') {
    // code here...
    response.end('HI BACK TO YOU!');
    
  }
  else if (request.method === 'POST' && request.url === '/greeting') {
    // accumulate the request body in a series of chunks
    // code here...
    let requestBodyString = '';
    request.on('data', (data)=>{
        requestBodyString += data.toString();
    })
    request.on('end', ()=>{
        if(requestBodyString === 'hello') {
            response.end('Hello there');
        } else if(requestBodyString === "what's up") {
            response.end('the sky');
        } else {
            response.end('Good morning!');
        }
    })
    
  }
  else if(request.method === 'GET' && request.url === '/style.css') {
    const readable2 = fs.createReadStream('style.css', {encoding : 'utf8'});
    (async function (readable2) {
        for await (const chunk of readable2) {
            response.write(chunk);
            console.log(chunk);
        }response.end();
    }) (readable2);
  }
  else {
    // Handle 404 error: page not found
    // code here...
    response.writeHead(404, {
        
    })
    response.end('Error: Not Found');
  }
}

const server = http.createServer(doOnRequest)

server.listen(3000);