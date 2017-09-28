function fizzBuzz(length, fizzNumber, buzzNumber){
    var output;
    var length = length || 100;
    var fizzNumber = fizzNumber || 3;
    var buzzNumber = buzzNumber || 5;
    for(var i=1;i<=length;i++){
        output = '';

        if(i%fizzNumber === 0){
            output+='Fizz';
        }
        if(i%buzzNumber === 0){
            output+='Buzz';
        }
        if(i%fizzNumber !== 0 && i%buzzNumber !== 0) {
            output+=i;
        }
        console.log(output);

    }
}

fizzBuzz(21,2,5);