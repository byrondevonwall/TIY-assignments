// function sortinLetters(str){
//   var strArr = []
//   var trimmed= str.trim()
//   for(i=1; i<trimmed.length+1; i++){
//   strArr.push(trimmed.slice(i-1,i));
//
//   }
//     strArr.sort();
//     console.log(strArr.join(''));
// }
//
// sortinLetters('hello world');

function longest_country_name(arr){
  console.log(arr);
  arr.sort(function (a, b) { return b.length - a.length })[0];
  console.log(arr);
  console.log(arr[0]);
}


longest_country_name(['Abyssinia', 'Bechuanaland', 'Grain Coast', 'Songhay', 'Stellaland', 'Kingdom of Tungning', 'British North Borneo', 'Gorkhali', 'Kampuchea', 'Mustang, Kingdom of', 'Inini', 'Confœderatio Helvetica', 'Pridnestrovia', 'Spitzbergen'])
