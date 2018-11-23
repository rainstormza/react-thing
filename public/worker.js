onmessage = function(e) {
  console.log('Worker: Message received from main script')
  console.log('Worker: Posting message back to main script')
  postMessage('Hello, Worker.js')
}
