// Create a Warrior class
// It must support level, rank, experience, achievements, training(event), and battle(enemy_level) methods
class Warrior {
    constructor(name) {
      this.name = name;
      this.warriorRank = ranks[0];
      this.warriorAchievements = [];
      this.warriorExperience = 100;
    };
    level(){ return this.getLevel(this.warriorExperience);};
    rank(){return this.warriorRank};
    experience(){return this.warriorExperience};
    achievements(){return this.warriorAchievements};
    training(arr) {
      if (this.level() >= arr[2]){
        this.warriorAchievements.push(arr[0]);
        this.updateExperience(arr[1]);
        return arr[0];
      }
      return 'Not strong enough';
    };
    battle(enemyLevel){
        const diffRank = this.getRankNum(enemyLevel) - this.getRankNum(this.level());
        const diffLevel = enemyLevel - this.level();
        console.log('Battle: Diff Rank: ' + diffRank + ' Diff level: ' + diffLevel + ' Opponent level: ' + enemyLevel + " your level: " + this.level());
        if (enemyLevel > 100 || enemyLevel < 1 ) {
            return 'Invalid level';
        }
        if (enemyLevel === this.level()) {
            this.updateExperience(10);
            return 'A good fight';
        }
        if (enemyLevel === this.level() -1 ){
            this.updateExperience(5);
            return 'A good fight';
        }
        if (enemyLevel < this.level() -1 ){
            return 'Easy fight';
        }
        //if your warrior is at least one rank lower than your enemy, 
        //and at least 5 levels lower, your warrior cannot fight against an enemy that strong and must instead return "You've been defeated"
        if (enemyLevel > this.level() ){
            console.log('here')
            console.log(diffLevel < 5)
            console.log(diffRank > 0)
            if (diffLevel >= 5 && diffRank >= 1){
                return "You've been defeated";
            } else {
                this.updateExperience(20 * diffLevel * diffLevel);
                return 'An intense fight';
            }
            
        }
    };
    getRankNum(level){
        return Math.floor(level/10) + 1;
    };
    //Level 1 is 100 to 199 experience, Level 2 is 200 to 299 experience etc
    updateExperience(amt){
        this.warriorExperience += amt;
        if (this.warriorExperience > 10000) {
            this.warriorExperience = 10000;
        }
        //At every 10 levels, your warrior will reach a new rank tier. 
        //(ex. levels 1-9 falls within "Pushover" tier, levels 80-89 fall within "Champion" tier, etc.)
        console.log(this.getRankNum(this.getLevel()));
        console.log(this.level());
        this.warriorRank = ranks[this.getRankNum(this.level()) - 1];
        console.log('Rank is ' + this.warriorRank);
    };
    getLevel(experiencePoints){
        return Math.floor(experiencePoints/100);
    };
    
    
  };
  const ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
  module.exports = {
      ranks,
      Warrior
  }
  