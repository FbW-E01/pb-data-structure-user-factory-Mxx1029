const userDataDump = [
  "1,Joel Peltonen,1921,Users|Admin|Sudo",
  "2,Joeltest Peltonentest,1921,Users",
  "3,Joeltest Peltonentest,,Users",
  "4,Leoj Nenotlep,,Users|Admin",
  "5,root,,Sudo|System",
  "6,Ryukahr,1901,Users|Admin",
  "7,Adamantium Claws,1332,Users",
  "8,The benevolent malevolence,,Users",
  "9,Jim Carrey,1961,Users|Admin",
  "A,Bela Lugosi,1666,Users",
  "B,Robert Smith,,Users|Admin|Sudo",
  "C,Fsh,,Users",
  "D,Racher Carson,,Users",
  "D,Cheesedude51,1951,Users",
  "E,cron,,System",
];

const createUserObjects = (userDataDump) => {
  const arrayOfUserObjects = [];
  for (let i = 0; i < userDataDump.length; i++) {
    const user = {};
    const singleUser = userDataDump[i].split(",");
    // console.log(singleUser); // helper log
    const createInitials = (fullName) => {
      let initials = fullName[0];
      for (j = 1; j < fullName.length; j++) {
        if (fullName[j] === " ") {
          initials += fullName[j + 1]
        };
      }
      return initials.toUpperCase();
    };
    user.id = singleUser[0];
    user.fullName = singleUser[1];
    user.initials = createInitials(singleUser[1]);
    user.birthYear = singleUser[2] ? singleUser[2] : "Unknown";
    user.departments = singleUser[3].split("|");
    arrayOfUserObjects.push(user);
    // console.log(user); // helper log
  };
  return arrayOfUserObjects;
};

console.log(createUserObjects(userDataDump));