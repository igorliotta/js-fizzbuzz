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


// const gridDOMElement = document.querySelector('.grid');
// console.log(gridDOMElement);

// for (let i = 0; i < 100; i++) {

//     let textString
//     const boxString = '<div class="box">' + textString + '</div>';
//     gridDOMElement.innerHTML = boxString;

//     if ((resto === 0) && (resto2 === 0)) { 

//         textString = multipleOfBoth;
//         console.log(gridDOMElement);

//       } else if (resto2 === 0) { 

//         textString = multipleOf5;
//         console.log(gridDOMElement);

//       } else if (resto === 0) { 

//         textString = multipleOf3;
//         console.log(gridDOMElement);
        

//       } else {

//         console.log(n);
//       }
// }
