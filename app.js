const lorem = document.querySelector(".title")
const desc  = document.querySelector("#desc")
const h4  = document.querySelector("h4")
// document = <html>
const items = document.querySelectorAll(".item") //return array

// ES5
const collection = document.getElementById("collection")

console.log(document.head);
console.log(document.body);
console.log(desc);
console.log(lorem);
console.log(h4);
console.log(items);

console.log(collection);
lorem.style.color = "red"
lorem.style.textAlign = "center"
items [0].style.color = "blue"





const root = document.querySelector("#root")

let box = document.createElement("i")

box.className = "box"

box.innerHTML = "italic"

root.appendChild(box)

console.log(box);




let son = 0


// function foo(){
//     son += 10
//     console.log(son +  " USD ");
// }
// foo()   
// setInterval(function(){
//     foo()
// },500)



function change(){
    desc.style.color = "red"
    desc.style.backgroundColor = "gold"
    desc.style.padding = "20px"

    console.log("ok");
}

setTimeout(function(){
    change()
} ,30000)
