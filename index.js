module.exports = {
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
     * Fetches the mongodb's collection object
     * @param  {object} collection e.g. dpd.users
     * @returns {Promise}
     */
    mongoCollection: function (collection) {
        return collection.getResource().store.getCollection();
    }
};