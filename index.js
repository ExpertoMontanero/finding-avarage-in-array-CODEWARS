function findAverage(array) {
  if(array==undefined||array.length==0){
    return 0;
  }
  else{
    var sum=0;
   array.forEach(element=>sum=element+sum)/array.length;
    return sum/array.length;
  }
}
