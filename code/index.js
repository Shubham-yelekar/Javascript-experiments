// qes 1 
const array = [10, 20, 30, 40]
const result = array.map((num)=> num/2).filter((num)=> num >= 15)
// console.log(result) // [30 , 40]

//qes 2 
let counter = 0;
for(var i = 1; i<=10; i++){
    counter += i;
}
// console.log(counter); //55

const object1 = {
    a: 10,
    b: 20,
    c: function(){
        console.log(this.a + this.b);
        
    }
}


const func = object1.c;
func()



