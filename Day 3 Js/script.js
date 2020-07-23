function even_odd()
{
    let number = prompt("Enter Possitive Number:");
    if(number % 2 == 0)
    {
        console.log(`The number entered is ${number} and Number is Even`);
    }
    else
    {
        console.log(`The number entered is ${number} and Number is Odd`);
    }

}
function os_name()
{
    if (navigator.appVersion.indexOf("Win") != -1) Name =  
          "Windows OS"; 
        if (navigator.appVersion.indexOf("Mac") != -1) Name =  
          "MacOS"; 
        if (navigator.appVersion.indexOf("X11") != -1) Name =  
          "UNIX OS"; 
        if (navigator.appVersion.indexOf("Linux") != -1) Name =  
          "Linux OS"; 
        
     console.log(Name);
    
}
function grade_student()
{
    let marks = prompt("Enter the Marks");
    if(marks <= 100 && marks > 80)
    {
        document.getElementById("demo").innerHTML=`Marks are ${marks} and grade is A`;
    }
    else if(marks <=80 && marks > 60)
    {
        document.getElementById("demo").innerHTML=`Marks are ${marks} and grade is B`;
    }
    else if(marks <= 60 && marks > 40)
    {
        document.getElementById("demo").innerHTML=`Marks are ${marks} and grade is C`;
    }
    else
    {
        document.getElementById("demo").innerHTML=`Marks are ${marks} and grade is failed`;
    }
    
    
    
}