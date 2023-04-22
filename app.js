const MixMusic = {
  warmup: [
    'Glee Cast - Don\'t Stop Believin\'',
    'Chris Brown - Don\'t Wake Me Up',
    'Franz Ferdinand - Take Me Out ',
    'OneRepublic - Feel Again',
    'Lady GaGa - Marry the Night (Afrojack Remix)',
    'Madonna - Like a Prayer',
    'Flo Rida & Sia - Wild Ones (Project 46 Remix)',
    'Alex Clare - Too Close',
    'Deadmau5 - Raise Your Weapon (Madeon Remix)',
    'The Killers - Mr. Brightside (Thin White Duke Remix)'
  ],
  main: [
    'Leveller Beats - Anarchy',
    'Atlant!c, Jstn Dmnd & Famillia - Why',
    'Slanks, Lucha & Benni Hunnit - Trap King',
    'Ex Music & Nat James - Immortals',
    'Lost Heroes - Tear',
    'Killer Beats - Arena',
    'Lost Heroes - Conquest',
    'Lucha, Slanks & Ctrlgang - Arkham City',
    'Lucha & Daegho - Renegades',
    'Lost Heroes, Turbo & CFLOW - Prevail'
  ],
  cooldown: [
    'Mariah Carey – Almost Home ',
    'Alex Da Kid, X Ambassadors, Elle King & Wiz Khalifa – Not Easy',
    'Avril Lavigne – Here’s to Never Growing Up', 
    'Florida Georgia Line – Cruise', 
    'Britney Spears – Perfume', 
    'Shakira – Empire', 
    'Lukas Graham – Mama Said', 
    'Adele – Send My Love (To Your New Lover)', 
    'Eric Church – Record Year', 
    'Pink – Just Like Fire'
  ],
  randomize(){
    cool = this.cooldown[Math.floor(Math.random(0, 1)*10)];
    ma = this.main[Math.floor(Math.random(0, 1)*10)];
    warm = this.warmup[Math.floor(Math.random(0, 1)*10)];
    message = `Today's Workout Mix:\n-Warmup : ${warm}\n-Workout : ${ma}\n-Cooldown: ${cool}`;
    return message;
  }
};


console.log(MixMusic.randomize());