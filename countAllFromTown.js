export default function allFromTown (regNumber, startString) {  
    const splitList = regNumber.split(",");
    //console.log(splitList); 
      var arr = [];
  
    for (var i=0; i<splitList.length; i++) { 
      const newList = splitList[i].trim();
    if (newList.startsWith(startString)) {
      arr.push(newList);
    }   
    } 
    return arr;
    console.log(arr);
  }
  console.log(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'));  