
# node-dpd-utils
Some nodejs/deployd utility functions that I keep reusing over time

## Methods

### parseTemplate 
(`string` content, `object` variables) : `string`

#### Example

````js
var str = parseTemplate("My name is {{name}}", {name:"Ezra Obiwale"});
console.log(str); // "My name is Ezra Obiwale"
````

### mongoCollection 
(`object` collection) : `Promise`

#### Example

````js
mongoCollection(dpd.users)
    .then(collection => {
        // do something with collection
    })
    .catch(console.error);
````
