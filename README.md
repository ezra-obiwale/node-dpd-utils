
# node-dpd-utils

[![Greenkeeper badge](https://badges.greenkeeper.io/ezra-obiwale/node-dpd-utils.svg)](https://greenkeeper.io/)
A nodejs module containing some utility functions that I keep reusing over time especially with Deployd

## Methods

### mailWithSparkpost
**Sends an email with SparkPost Transmission API**
(`object` config, `object` options) : `Promise`

#### Requirements
-   sparkpost module

#### Example

````js
mailWithSparkpost({
    key: 1234ABCD // Your SparkPost API Key
    sandbox: true,
    fromAddress: 'noreply@sparkpostbox.com',
}, {
    subject: 'Sending emails with SparkPost',
    body: 'This is a test mail from {{user}}',
    bodyVariables: {
        user: 'Ezra Obiwale'
    },
    recipients: [
        {address: 'user@example.com'}
    ],
    callback: data, error => {
        // do something here
    }
});
````

### mongoCollection 
**Fetches the mongodb's collection object**
(`object` collection) : `Promise`

#### Example

````js
mongoCollection(dpd.users)
    .then(collection => {
        // do something with collection
    })
    .catch(console.error);
````

### parseTemplate 
**Parse the given content with the given variables**
(`string` content, `object` variables) : `string`

#### Example

````js
var str = parseTemplate("My name is {{name}}", {name:"Ezra Obiwale"});
console.log(str); // "My name is Ezra Obiwale"
````


### redirect
**Redirects to the given url**
(`object` ctx, `string` url)

#### Example

````js
redirect(ctx, 'http://localhost:2403/logged-in-user/');
````