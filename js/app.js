//1
const lightSwitch = {
  isOn: true
}
const user = {
  email: 'Justin@me.com'
}
const spaceship = {
  hull: 'steel',
  laserBlasters: 'strong',
  tractorBeam: 'strong',
  warpDrive: 'Model z'
}
const studentNames = ['Justin', 'Josh', 'Rojelio'];
const students = [
  {
    name: 'Justin',
    location: 'Classroom 3',
    favoriteTv: ['The West Wing', 'South Park', 'Hannibal']
  }, {
    name: 'Levi',
    location: 'Classroom 3',
    favoriteTv: []
  }
]

//2
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
rainbowColors[4];
const justin = {
  favoriteFood: 'scallops',
  hobby: 'bouldering',
  currentTown: 'Koreatown, LA',
  favoriteDataType: 'objects'
}
justin.hobby

//3
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favoriteHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}
console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favoriteHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);


//4
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
