
# node-utils
Some node js functions that I might keep reusing over time

## Methods

Name|Properties|Returns|Description
----|----------|-------|-----------
parseTemplate|`string` content, `object` variables|`string`|Parses the given content with the given variables
mongoCollection|`object` collection - e.g. dpd.users|`Promise`|Fetches the mongodb's collection object

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