onmessage = function(e){
  if ( e.data === "start" ) {
    // Do some computation
    done()
  }
};


function done(){
  // Send back the results to the parent page
  postMessage("done");
  close();
}

