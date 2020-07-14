const sumUp = (a , b, ...numbers) =>
{
  const validNumber = (number) =>{
  return isNaN(number) ? 0 : number ;   
  }
let sum = 0;
for(const num of numbers){
  sum = sum + validNumber(num);
}
return sum;

};

console.log(sumUp(1,'a','a',4,5 , 6));

          //    METHOD - 2      method-2

const sumUp1 = (resulthandler ,operation, ...numbers) =>
{
let sum = 0;
for(const num of numbers){
 if(operation === 'ADD'){
  sum = sum + num;
 } else{

  sum = sum - num;
 }
}
resulthandler(sum);

};

const showresult = (message , result) => {
  alert(message + '' + result)

};

sumUp1(showresult.bind(this, 'result after adding all number: ' ),'ADD',

1,2,3,4,5 , 6, 7);
sumUp1(showresult.bind(this, 'result after subtracting all number: ' ),'sub',

1,2,3,4,5 , 6, 7);

                //        METHOD-3

const sumUp2 = (numbers) =>
{
let sum = 0;
for(const num of numbers){
  sum = sum + num;
}
return sum;

};


console.log(sumUp2([1,2,3,4,5 , 6] ));

                //    METHOD - 4

const sumUp4 = function()
{
let sum = 0;
for(const num of arguments){
  sum = sum + num;
}
return sum;

}


console.log(sumUp4(1,2,3,4,5 , 6));
