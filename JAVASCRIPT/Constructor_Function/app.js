
function user(){

}

let user1 = user();
console.log(user1);
// when nothing returns from function , By default JS returns undefined.




 //constructor always returns  and object instead of undefined.
//First letter of constructor function is capital.

 function User(){

    this.username= "virendra";
    this.age= 30;
    this.color = "blue";

}

let user2 =  new User();
console.log(user2);