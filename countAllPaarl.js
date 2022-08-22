export default function allPaarl (regNumbers) {
    const regNumbers1 = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
      var arr = [];
      var newList = regNumbers1.split(',');
      console.log(newList); 
      for (var i=0; i<newList.length; i++) {
      const newList1 = newList[i].trim(); 
        console.log(newList1); 
        if (newList1.startsWith("CJ")) {
        arr.push(newList1);
        }
    }
      return arr;
}
console.log(allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'))