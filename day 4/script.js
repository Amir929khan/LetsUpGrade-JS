function Loop_for_multiple()
{
    for(let i = 1; i <=100; i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            console.log(`The value is ${i} : fizzbuzz`);
        }
        else if(i % 3 == 0)
        {
            console.log(`The value is ${i} : fizz`);
        }
        else if(i % 5 == 0)
        {
            console.log(`The value is ${i} : buzz`);
        }
        
    }
}
function destructure_object()
{
    const student = {
        name :"Helsinki",
        age: 24,
        project:{
            diceGame:"Two player dice game using JavaScript"
        } 
    }
    console.log(student.name);
    console.log(student.age);
    console.log(student.project.diceGame);
   // console.log(student); 
    //console.log( JSON. stringify(student));
   let ans = `${student.name} whose age is ${student.age} and playing ${student.project.diceGame}`;
   console.log(ans);
}
function add_items()
{
    let shoppingList = ["almonnd","kaju","viper","sugar"];
     console.log(shoppingList);
     let shoppingBasket = ["tea","oil","brush"];
     console.log(shoppingBasket);
     let data = shoppingList.concat(shoppingBasket);
     console.log(data);
}
// Q.4 
function display(number)
{
    document.getElementById("ans").value+=number;

}
function clr_screen()
{
    document.getElementById("ans").value ="";

}
function total()
{
    let a = document.getElementById("ans").value;
    let result = eval(a);
    document.getElementById("ans").value = result;
}
function sqaure_root(value)
{
    document.getElementById("ans").value= Math.sqrt(value);
}
//Q.5
function commision_earned()
{
    let sale = prompt("Yearly Turnover");
    if(sale <= 5000 && sale >= 0)
    {
        let commission = (sale)*0.02;
        console.log("1."+commission);
    }
    if(sale <= 10000 && sale >= 5001)
    {
        let commission = (sale)*0.05;
        console.log("2."+commission);
    }
    if(sale <= 20000 && sale > 10001)
    {
        let commission = (sale)*0.7;
        console.log("3."+commission);
    }
    if(sale > 20000)
    {
        let commission = (sale)*0.10;
        console.log("4."+commission);
    }


} 
//Q.6  Pending
//Q.7 
function isPrime()
{
    let number = prompt("Enter Any Number");
    //console.log(number);
    for(let i = 2; i<=number; i++)
    {
        let count = 0;
        for(let j = i; j>=1; j--)
        {
            if(i % j == 0)
            {
                count++;
            }
        }
        if(count == 2)
        {
            console.log(i);
        }
    }
}
//Q.8 
function arrow()
{
   
    ask("Do You Agree?", ()=>{ alert("You agreed");
    },()=>{ alert("You canceled the execution");});   
}

const ask = (question, yes, no)=>
{
   if(confirm(question)) yes()
   else no();
}




