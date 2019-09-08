'use strict';
import { users } from './users.js';

// const getSortedUniqueSkills = users => {
//   return users
//     .reduce((allSkills, user) => {
//       allSkills.push(...user.skills);
//       return allSkills;
//     }, [])
//     .filter((user,  arr) => arr.indexOf(user))
//     .sort();
// };
// console.log(getSortedUniqueSkills(users));
// ---------------------------------------------------

const getSortedUniqueSkills = users => {
  return users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills.filter(arr => !allSkills.includes(arr)));
      return allSkills;
    }, [])

    .sort((a, b) => a.localeCompare(b, 'en'));
};
console.log(getSortedUniqueSkills(users));

// ======================================================
// const getSortedUniqueSkills = users => {
//   return (
//     users
//       .reduce((allSkills, user) => {
//         return [
//           ...allSkills,
//           ...user.skills.filter(s => !allSkills.includes(s)),
//         ];
//       }, [])
//       // .filter((user,  arr) => arr.indexOf(user))
//       .sort()
//   );
// };
// console.log(getSortedUniqueSkills(users));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const getSortedUniqueSkills = users => {
//   return users
//     .reduce((res, el) => {
//       return [...res, ...el.skills.filter(s => !res.includes(s))];
//     }, [])
//     .sort((a, b) => a.localeCompare(b, 'en'));
// };

// console.log(getSortedUniqueSkills(users));
