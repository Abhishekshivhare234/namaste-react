// create an object  or an react element 
const heading = React.createElement("h1" , 
    {id : 'heading'} ,// attributes in props
    "Hello world ! from React!" // children in porps
);
        console.log(heading);  // heading is an object of tye h1
        
        const root = ReactDOM.createRoot(document.getElementById("root")); // everything works under tis root
       
        root.render(heading); // the render works like to take this heading object and convertd into "h1 tag" and put it inside that "root"

/*
if i  want to create nested elements like -
<div>
    <div>
        <h1> i am an h1 tag </h1>
    </div>
</div>
*/

const parent = React.createElement("div" ,{id :"parent"}, 
    React.createElement("div", {id:"child"},
         React.createElement("h1", {}, "i am an h1 tag"))
);
/* imp NOTE -> if i want siblings like at the end h1 and h2 or multiple then we 
have to make an array of it(here itgave a warning of "key ")
*/

console.log(parent);
root.render(parent); // the render works like to take this heading object and convertd into "h1 tag" and put it inside that "root"

/*
-> first we make it as a git repository
-> then we add it all 
-> create a branch
-> let create a read me file    
*/
