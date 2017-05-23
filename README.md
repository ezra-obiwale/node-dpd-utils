
# node-utils
Some node js functions that I might keep reusing over time

## Methods

### parseTemplate <small>(`string` content, `object` variables) : `string`</small>

#### Example
````js
var str = parseTemplate("My name is {{name}}", {name:"Ezra Obiwale"});
console.log(str); // "My name is Ezra Obiwale"
````

### mongoCollection <small>(`object` collection) : `Promise`</small>

#### Example
````js
mongoCollection(dpd.users)
    .then(collection => {
        // do something with collection
    })
    .catch(console.error);
````