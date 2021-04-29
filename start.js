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
const arrayOfUserObjects = [];

const createUserObjects = (userDataDump) => {
  // loop through array to get singleUser Arrays
  for (let i = 0; i < userDataDump.length; i++) {
    // split user strings into arrays
    const singleUser = userDataDump[i].split(",");
    // console.log(singleUser); // helper log
    // function to get initials from fullName 
    const createInitials = (fullName) => {
      let initials = fullName[0];
      for (j = 1; j < fullName.length; j++) {
        if (fullName[j] === " ") {
          initials += fullName[j + 1]
        };
      }
      return initials.toUpperCase();
    };
    // add data to user object
    const user = {};
    user.id = singleUser[0];
    user.fullName = singleUser[1];
    user.initials = createInitials(singleUser[1]);
    user.birthYear = singleUser[2] ? singleUser[2] : "Unknown";
    user.departments = singleUser[3].split("|");
    // push ready assembled object into result arrayOfUserObjects Array
    arrayOfUserObjects.push(user);
    // console.log(user); // helper log
  };
  return arrayOfUserObjects;
};
console.log(createUserObjects(userDataDump));

// bonus task
const listDepartments = () => {
  const departments = [];
  // loop through result array from 1st function to get array with all departments and turn entries with more than one element into a string
  for (let i = 0; i < arrayOfUserObjects.length; i++) {
    const department = arrayOfUserObjects[i].departments;
    departments.push(department.join(","));
  };
  // first turn all entries into a string to get rid of all the inter-level arrays, than turn it into one big array arrayOfAllDepartments
  const arrayOfAllDepartments = departments.join(",").split(",");
  // console.log(arrayOfAllDepartments); // helper log
  const list = [];
  // loop through to filter out duplicates
  for (j = 0; j < arrayOfAllDepartments.length; j++) {
    const listItem = arrayOfAllDepartments[j];
    if (!(list.includes(listItem))) {
      list.push(listItem);
    };
  };

  return list;
};

console.log(listDepartments());

// write first function a second time to practice!
const getInitials = (string) => {
  let initials = "";
  const nameArray = string.split(" ");
  for (l = 0; l < nameArray.length; l++) {
    initials += nameArray[l][0].toUpperCase();
  };
  return initials;
};

const getObjectArray = (input) => {
  const objectArray = [];
  for (k = 0; k < input.length; k++) {
    const userEntry = input[k].split(",");    
    const id = userEntry[0];
    const fullName = userEntry[1];
    const initials = getInitials(fullName);
    const birthYear = userEntry[2] ? userEntry[2] : "Unknown";
    const departments = userEntry[3].split("|");
    
    const userObject = {
      id,
      fullName,
      initials,
      birthYear,
      departments,
    };

    objectArray.push(userObject);

  }

  return objectArray;
};

const result = getObjectArray(userDataDump);
console.log(result);