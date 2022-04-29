const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];  

function findMatching(array, string){
  return array.filter(
    (possibleMatch => possibleMatch.toLowerCase() === string.toLowerCase())
  );
  }

function fuzzyMatch (source, letter){
return source.filter (driver => (driver.startsWith(letter)
));
}


function matchName (source, inputString){
  return source.filter(record => record.name === inputString);
  }
