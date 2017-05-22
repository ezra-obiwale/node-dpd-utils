module.exports = {
    parseTemplate: function (content, variables) {
        for (var key in variables) {
            content = content.replace(new RegExp('{{' + key + '}}', 'g'), variables[key]);
        }
        return content;
    }
};