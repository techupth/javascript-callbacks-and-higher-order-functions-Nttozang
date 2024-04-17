//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function atLeastFive(array, operation) 
{
  let studentcount = 0;
  for(let i = 0; i < array.length; i++)
  {
  if((operation(array[i])))
    {
    studentcount++;
    }
  }
  return studentcount >= 5 ? `ผ่านเกณฑ์`: `ไม่ผ่านเกณฑ์`;                      
}

const checkScore = (score) => {return score > 70};

let scoreRoom1Result = atLeastFive(studentScoresRoom1,checkScore);
console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result}`);


let scoreRoom2Result = atLeastFive(studentScoresRoom2,checkScore);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result}`);


let scoreRoom3Result = atLeastFive(studentScoresRoom3,checkScore);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result}`);


