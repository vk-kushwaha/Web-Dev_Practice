

let info = {

    Fname : "virendra",
    Lname : "kushwaha",
    Age : 30,
    State : "MP",

    describe: function(){

        console.log("HI this is describe functions and have virendra Kushwaha ")
        console.log(`HI this is describe functions and have ${info.Fname} ${info.Lname}`);
        console.log(`HI this is describe functions and have ${this.Fname} ${this.Lname}`)
            return info.Age;
    }
}

// console.log(info);

// console.log (info.Fname);
// console.log(info.Lname);
// console.log(info.Age);

// console.log(info[`Fname`]);
// console.log(info[`Lname`]);
// console.log(info[`Age`]);

// info.describe();

let ans = info.describe();

console.log(ans);