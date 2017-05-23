
# node-dpd-utils
A nodejs module containing some utility functions that I keep reusing over time especially with Deployd

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

### redirect
(`object` ctx, `string` url)

#### Example

````js
redirect(ctx, 'http://localhost:2403/logged-in-user/');
````