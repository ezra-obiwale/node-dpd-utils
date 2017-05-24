var SparkpostInstances = {},
        utils = {
            /**
             * Sends an email with SparkPost Transmission API
             * @param {object} config Keys include key (string), sandbox (boolean) and
             * fromAddress (string)
             * @param {object} options Keys include:
             * recipients (array): Array of object with keys address and ...
             * subject (string): The subject of the email
             * body (string): The html content to send
             * bodyVariables (object): The variables to parse the body with
             * callback (Function): The callback to call with 2 params: result, error
             * @returns {Promise}
             */
            mailWithSparkpost: function (config, options) {
                options.bodyVariables = options.bodyVariables || {};
                options.callback = options.callback || function () {};
                var sparkpost = SparkpostInstances[config.key];
                if (!sparkpost) {
                    var SP = require('sparkpost');
                    sparkpost = new SP(config.key);
                    SparkpostInstances[config.key] = sparkpost;
                }
                return sparkpost.transmissions.send({
                    options: {
                        sandbox: config.sandbox
                    },
                    content: {
                        from: config.fromAddress,
                        subject: options.subject,
                        html: utils.parseTemplate(options.body, options.bodyVariables)
                    },
                    recipients: options.recipients
                })
                        .then(options.callback)
                        .catch(err => {
                            console.error(err);
                            options.callback(null, err);
                        });
            },
            /**
             * Fetches the mongodb's collection object
             * @param  {object} collection e.g. dpd.users
             * @returns {Promise}
             */
            mongoCollection: function (collection) {
                return collection.getResource().store.getCollection();
            },
            /**
             * Parse the given content with the given variables
             * @param {string} content
             * @param {object} variables
             * @returns {string}
             */
            parseTemplate: function (content, variables) {
                for (var key in variables) {
                    content = content.replace(new RegExp('{{' + key + '}}', 'g'), variables[key]);
                }
                return content;
            },
            /**
             * Redirects to the given url
             * @param {object} ctx The ctx object
             * @param {string} url The url to redirect to
             * @returns {void}
             */
            redirect: function (ctx, url) {
                ctx.res.statusCode = 302;
                ctx.res.setHeader("Location", url);
                ctx.res.end();
            }
        };
module.exports = utils;