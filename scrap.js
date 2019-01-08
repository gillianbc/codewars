const _ = require('lodash');
/* All we know is that each triplet gives us 3 letters that are in the secret in that order*/
secret1 = "whatisup"
triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]
var recoverSecret = function(frogpants){
    //Start the secret with the first triplet
    let secret = frogpants.shift();
    while (frogpants.length > 0) {
        //Take the first triplet off
        let current = frogpants.shift();
        // Has 2 letters that are in the secret with another in between? e.g. tup with tsu gives us the s
        // Insert the middleman after the position returned - splice
        let mid = middleman(secret,current);
        if (mid > 0) 
            secret.splice(mid,0,current[1]);
        else
            //If we don't know where to put the triplet, just put it back on the end for later
            frogpants.push(current);


    }
}
  //Utility functions
function middleman(target,triplet){
    let x1 = target.indexOf(item[0]);
    let x2 = target.indexOf(item[1]);
    if (x1 > 0 && x2 === x1 + 1)
        return x1;
    else
        return -1;
};
