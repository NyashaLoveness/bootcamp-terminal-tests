export default function isWeekday(string) {
    var arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
     return arr.includes(string);
  }
  console.log(isWeekday("Saturday"))
  console.log(isWeekday("Monday"));