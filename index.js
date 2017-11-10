var replace = require('replace-in-file');

module.exports = function replaceHtmlVars( options ) {

    try {
        var changes = replace.sync(options);
        console.log('\n\nRunning replaceHtmlVars for files:', changes.join(', '), '\n\n');
    }
    catch (error) {
        console.error('Error occurred:', error);
    }

    return {
        name: 'replaceHtmlVars'
    };

};