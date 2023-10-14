module.exports = {
    dirReduc: function (arr){
    //Do this strategy
    //If opposite is last element added to the result array, remove it
    //Otherwise, push item
    console.log('=========START=======')
      
      let result = [];
      let count = 0;
      let lastadded = '';
      console.log(arr + ' length ' + arr.length);
      arr.forEach(function(el){
        count++;
        
        console.log("Current " + result + " processing " + el );
        
        if (result.length > 0 && opposite(el) === result[result.length - 1]) {
          result.pop();
        }
        else
        {
          result.push(el);
          lastadded = el;
        }
        console.log(result);
        console.log('==== ' + count);
      });
      
      return result;
    }
    
    
    
    
};
    
function opposite(direction){
    switch(direction){
      case 'NORTH':
        return 'SOUTH';
      case 'SOUTH':
        return 'NORTH';
      case 'WEST':
        return 'EAST';
      case 'EAST':
        return 'WEST';
    }
  }