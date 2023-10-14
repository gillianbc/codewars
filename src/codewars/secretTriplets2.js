const _ = require('lodash');
/*
e.g. secret1 = "whatisup"
triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]
*/
let secret = '';
let temp = [];
module.exports = {
  recoverSecret: function(arr){
    
    //Start the secret with the first triplet
    secret = arr.shift();
    trial(arr);
    if (trial.length > 0) {
      let temp2 = temp.slice(0);
      temp = [];
      trial(temp2)
    }
    return secret.join('');
    
}
};

function trial(frogpants){
  while (frogpants.length > 0) {
    console.log('---- start -----');
    //Take the first triplet off
    let current = frogpants.shift();
    let processed = false;
    console.log('Secret ' + secret + ' current ' + current);
    // Has 2 letters that are in the secret with another in between? e.g. tup with tsu gives us the s
    // Insert the middleman after the position returned - splice
    processed = middleman(current);
    if (!processed) processed = lastman(current);
    if (!processed) processed = firstman(current);
    if (!processed) processed = firstchar(current)
    if (!processed){
      //If we don't know where to put the triplet, just put it back on the end for later
      console.log('UnProcessed Current ' + current + ' secret ' + secret);
      temp.push(current);
    } 
    else 
      console.log('Processed Current ' + current + ' secret ' + secret);

}

}
//Utility functions
function firstchar(triplet){
  console.log('firstchar');
  //e.g. secret is 'ash' and triplet is 'bas'
  if (secret[0] === triplet[1]){
    secret = _.union([triplet[0]],secret);
    return true;
  } 
  else
    return false;
}
function middleman(triplet){
  console.log('middleman');
  let x0 = secret.indexOf(triplet[0]);
  let x2 = secret.indexOf(triplet[2]);
  console.log('x0:' + x0 + ' x2:' + x2)
  if (x0 >= 0 && x2 === x0 + 1){
    secret.splice(x0+1,0,triplet[1]);
    return true;
  }
  else
    return false;
};
// e.g. target is abc and triplet starts with c we can append
function lastman(triplet){
  console.log('lastman');
  if (secret[secret.length-1] === triplet[0]){
    secret = _.union(secret,triplet);
    return true;
  }
  return false;
}
// e.g. target is abc and triplet ends with a we can prepend
function firstman(triplet){
  console.log('firstman');
  //console.log(triplet[2] + ' === ' + secret[0])
  if (triplet[2] === secret[0]){
    //console.log('here');
    secret = _.union(triplet,secret);
    //console.log(' Ret ' + secret)
    return true;
  }
  return false;
}


 
