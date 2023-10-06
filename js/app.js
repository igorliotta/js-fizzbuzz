console.log("Ciao a tutti ragazzi");

for (let i = 0; i < 100; i++) {
  let n = i + 1;

  const resto = n % 3;
  let multipleOf3 = "Fizz";

  const resto2 = n % 5; 
  let multipleOf5 = "Buzz";

 
  let multipleOfBoth = "FizzBuzz";

  if ((resto === 0) && (resto2 === 0)) { 
    console.log(multipleOfBoth);
  } else if (resto2 === 0) { 
    console.log(multipleOf5); 
  } else if (resto === 0) { 
    console.log(multipleOf3);
  } else {
    console.log(n);
  }
}
