function UserInput()
{
    let value = prompt("Enter Any Value");
    console.log(value);
}
function string_array_methodes()
{
    
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var str = "abcxyz";
    document.getElementById("demo").innerHTML="Array Is:[Banana, Orange, Apple, Mango]";
    document.getElementById("sample").innerHTML="String Is: abcxyz";
    document.getElementById("sample_1").innerHTML = "(i) toString() converts an array to a string of (comma separated) array values"+":"+fruits.toString();
    document.getElementById("sample_2").innerHTML= "(ii) The pop() method removes the last element from an array:"+fruits.pop();
    document.getElementById("sample_3").innerHTML= "(iii) The push() method returns the new array length:"+fruits.push("Papaya"); 
    document.getElementById("sample_4").innerHTML="(iv) The splice() method can be used to add new items to an array takes 4 params :"+fruits.splice(1,0,"Olive","berry");
    document.getElementById("sample_5").innerHTML="New Array : "+fruits;
    document.getElementById("sample_6").innerHTML="(v) The sort() method sorts an array alphabetically:"+fruits.sort();
    document.getElementById("sample_7").innerHTML="(vi) Returns the character at the specified index (position):"+str.charAt(2);
    document.getElementById("sample_8").innerHTML="(vii)Returns the Unicode of the character at the specified index: "+str.charCodeAt(2);
    document.getElementById("sample_9").innerHTML="(viii) Searches a string for a match against a regular expression, and returns the matches:"+str.match("cx");
    document.getElementById("sample_10").innerHTML="(ix) Extracts a part of a string and returns a new extracted string: "+str.slice(0,4);
}
function can_drink()
{
    let age = prompt("Enter the age");
    if(age > 21)
    {
        console.log("Can Drink");
    }
    else
    {
        console.log("cannot Drink");
    }

}