const _ = require('lodash');
/*
Good work, but I misunderstood the problem.  I assumed that the letters of the triplets
appeared together e.g. if secret is 'frogpants' then I'd get triplets such as 'fro' and 'pan'
*/
module.exports = {
  recoverSecret: function(frogpants){
    //Start the secret with the first triplet
    let secret = frogpants.shift();
    while (frogpants.length > 0) {
        //Take the first triplet off
        let current = frogpants.shift();
        console.log(current);
        let xpos = findPos(secret,current);
        if ( xpos === 0) secret = _.union(current,secret);
        if ( xpos > 0) secret = _.union(secret,current);
        //If we don't know where to put the triplet, just put it back on the end for later
        if ( xpos < 0) frogpants.push(current);
    }
    //If you omit the separator when using join() it defaults to a comma
    //which is not what we want
    // Convert the array to a string
    return secret.join('');
  }
};
//Utility functions
function findPos(target,triplet){
  let pos = -1;
  for (let el of triplet){
      pos = target.indexOf(el);
      if (pos !== -1) {
          break;
      }
  }
  return pos;
};

 
