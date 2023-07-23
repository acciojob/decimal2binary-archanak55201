function decimalToBinary(number) {
  //Write you code here

    //Write you code here
  let str="";
      while(number>0){
        // console.log(Math.floor(number%2));
        rem=Math.floor(number%2);
        str+=rem;
        number=Math.floor(number/2);
    }
       const spl=str.split("");
    const rev=spl.reverse();
    const answer=rev.join('');
	return answer;
}

window.decimalToBinary = decimalToBinary;
