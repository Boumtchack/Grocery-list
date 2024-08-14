function decr(number) {
  if(number==0){
    return
  }
  console.log(number);
  decr(number - 1)
}

decr(9)
