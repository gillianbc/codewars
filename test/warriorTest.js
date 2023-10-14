const assert = require('chai').assert;
const {
    rank,
    Warrior
} = require('../src/codewars/warrior');

describe("Kata Tests",function(){
    var Goku = new Warrior();
    it("Standard Tests 1", function(){
      assert.deepEqual(Goku.level(), 1, "All warriors must start as LV 1")});
    it("Standard Tests 2", function(){
      assert.deepEqual(Goku.rank(), "Pushover", "All warriors must start as a Pushover")
      assert.deepEqual(Goku.achievements(), [], "All warriors must start off with no achievements to their name")
      assert.deepEqual(Goku.training(["Do ten push-ups", 95, 1]), "Do ten push-ups", "After obtaining a mastery, the achievement must be listed and returned")
      assert.deepEqual(Goku.level(), 1, "After your warriors's first training, he/she must still be LV 1")});
    it("Standard Tests 3", function(){
      assert.deepEqual(Goku.battle(0), "Invalid level", "LV 0 enemies do not exist. This must be a mistake!")});
    it("Standard Tests 4", function(){
      assert.deepEqual(Goku.battle(1), "A good fight", "After fighting against a warrior of equal level, your warrior should provide the appropiate response")
      assert.deepEqual(Goku.level(), 2, "With that fight under your belt, your warrior should now be ascended to LV 2")});
    it("Standard Tests 5", function(){  
      assert.deepEqual(Goku.achievements(), ["Do ten push-ups"], "Don't forget what your warrior has achieved so far")
      assert.deepEqual(Goku.rank(), "Pushover", "A pushover, however, your warrior should remain")
      assert.deepEqual(Goku.battle(3), "An intense fight", "Another battle, this time with a slightly more skilled enemy, should have your warrior provide an appropiate response")
      assert.deepEqual(Goku.level(), 2, "Your should still remain LV 2")
      assert.deepEqual(Goku.training(["Survive one night at the Forest of Death", 170, 2]), "Survive one night at the Forest of Death", "After obatining a mastery, your achievement must be listed and returned")
      assert.deepEqual(Goku.training(["Mastered the Spirit Bomb", 1580, 10]), "Not strong enough", "Your warrior isn't skilled enough to do everything just yet")
      assert.deepEqual(Goku.achievements(), ["Do ten push-ups", "Survive one night at the Forest of Death"], "Your warrior shouldn't forget his achievements")
      assert.deepEqual(Goku.battle(2), "A good fight", "Your enemy isn't exactly your level. Provide the appropriate response")
      assert.deepEqual(Goku.level(), 4, "Your warrior should now be LV 3")
      assert.deepEqual(Goku.experience(), 400, "Your warrior's experience should be relative to his level")
      assert.deepEqual(Goku.battle(9), "An intense fight", "Your warrior picked a fight with a relatively strong enemy. Nothing he can't hold his/er own to. Prpvide the appropiate response")
      assert.deepEqual(Goku.battle(14), "You've been defeated", "Your warrior picked a fight he/she can't win.")
      assert.deepEqual(Goku.level(), 9, "Your level should be high than our last viewing, regardless of our recent defeat")
      assert.deepEqual(Goku.battle(12), "An intense fight", "Your enemy's in a whole other league, but he's still within your reach")
      assert.deepEqual(Goku.battle(8), "Easy fight", "Going back to the small fry, huh? Provide the appropiate respone") 
      assert.deepEqual(Goku.rank(), "Novice", "You definately ain't no pushover anymore!")
      assert.deepEqual(Goku.experience(), 1080, "Startin' to get some serious experience points?")
      assert.deepEqual(Goku.battle(140), "Invalid level", "Something not right here...")
      assert.deepEqual(Goku.training(["Mastered the Spirit Bomb", 1580, 10]), "Mastered the Spirit Bomb", "Remember that training you weren't strong enough to do before? What's different now?")
      assert.deepEqual(Goku.level(), 26, "Finally got some decent skill in you")
      assert.deepEqual(Goku.rank(), "Fighter", "You ain't in the beginner tiers anymore!")
      assert.deepEqual(Goku.battle(30), "An intense fight", "The enemy's strong, but you can hold your own")
      assert.deepEqual(Goku.rank(), "Fighter", "Still a fighter at heart")
      assert.deepEqual(Goku.level(), 29, "Your ascention nears...")
      assert.deepEqual(Goku.experience(), 2980, "...ever so closely")
      assert.deepEqual(Goku.training(["Mastered the Shadow Clone Jutsu", 19, 6]), "Mastered the Shadow Clone Jutsu", "Another technique doesn't hurt")
      assert.deepEqual(Goku.experience(), 2999, "...sooooo very close")
      assert.deepEqual(Goku.level(), 29, "But no cigar")
      assert.deepEqual(Goku.battle(32), "An intense fight", "Gotta get your gain right. What kinda fight helps with that?")
      assert.deepEqual(Goku.rank(), "Warrior", "You ain't the greatest, but you still a...")
      assert.deepEqual(Goku.experience(), 3179, "Keep rackin' the experience")
      assert.deepEqual(Goku.battle(39), "An intense fight", "Keep the big fights poppin'")
      assert.deepEqual(Goku.rank(), "Veteran", "I think you're onto something with this whole fighting thing")
      assert.deepEqual(Goku.experience(), 4459, "Think you know your way around a fight now?")
      assert.deepEqual(Goku.level(), 44, "...Well, do you")
      assert.deepEqual(Goku.training(["Defeat Superman", 10000, 100]), "Not strong enough", "Don't jump the gun just yet!")
      assert.deepEqual(Goku.training(["Mastered the Spirit Gun", 1340, 43]), "Mastered the Spirit Gun", "That's more up your alley")
      assert.deepEqual(Goku.rank(), "Sage", "What becomes of veterans when they start to become old?")
      assert.deepEqual(Goku.experience(), 5799, "Quite the fighter now, aren't ya?")
      assert.deepEqual(Goku.level(), 57, "Keep rising!")
      assert.deepEqual(Goku.battle(61), "An intense fight", "Nothin' a Sage can't handle!")
      assert.deepEqual(Goku.rank(), "Elite", "You're very good at what you do")
      assert.deepEqual(Goku.experience(), 6119, "Experience needs to match the title")
      assert.deepEqual(Goku.training(["Mastered the Perfect Roundhouse Kick", 1781, 60]), "Mastered the Perfect Roundhouse Kick", "Patrick Swayze would be proud")
      assert.deepEqual(Goku.rank(), "Conqueror", "You're becoming a legend, yo!")
      assert.deepEqual(Goku.experience(), 7900, "Ten lifetimes' worth of experience right here!")
      assert.deepEqual(Goku.battle(83), "An intense fight", "A conqueror's gonna conquer, amirite?")
      assert.deepEqual(Goku.level(), 82, "This is a level to be feared")
      assert.deepEqual(Goku.rank(), "Champion", "The world looks to you for your skills now")
      assert.deepEqual(Goku.experience(), 8220, "You're geeting too good that this fighting stuff")
      assert.deepEqual(Goku.training(["Defeat The Four Horsemen", 1100, 82]), "Defeat The Four Horsemen", "Can the judgement of the Gods stop you anymore?")
      assert.deepEqual(Goku.battle(100), "You've been defeated", "Your power is godlike, but there is still greater")
      assert.deepEqual(Goku.rank(), "Master", "Your competition is quickly strinking")
      assert.deepEqual(Goku.level(), 93, "Your greatness is rarely matched")
      assert.deepEqual(Goku.experience(), 9320, "Your power is rising...overflowing!")
      assert.deepEqual(Goku.training(["Win the Intergalaxtic Tournament", 679, 91]), "Win the Intergalaxtic Tournament", "Can you prove to be the Master of Masters?")
      assert.deepEqual(Goku.experience(), 9999, "Only one stands in your way now...")
      assert.deepEqual(Goku.training(["Fight Superman to a draw", 11000, 99]), "Fight Superman to a draw", "If you can do this... I think you might be the one")
      assert.deepEqual(Goku.level(), 100, "..Wait, can it be?")
      assert.deepEqual(Goku.experience(), 10000, "..Is it really you?")
      assert.deepEqual(Goku.rank(), "Greatest", "Yes, you truly are the greatest!!! ... as soon as you pass this test at least")
      assert.deepEqual(Goku.training(["Defeat Superman", 10000, 100]), "Defeat Superman", "*creates shrine in your honor*")
      assert.deepEqual(Goku.achievements(), ['Do ten push-ups', 'Survive one night at the Forest of Death', 'Mastered the Spirit Bomb', 'Mastered the Shadow Clone Jutsu', 'Mastered the Spirit Gun', 'Mastered the Perfect Roundhouse Kick', 'Defeat The Four Horsemen', 'Win the Intergalaxtic Tournament', 'Fight Superman to a draw', 'Defeat Superman' ], "What a career you have!")
    });
  });