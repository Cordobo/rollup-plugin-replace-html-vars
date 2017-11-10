import replace from 'replace-in-file';

export default function replaceHtmlVars( options = {} ) {

    try {
        const changes = replace.sync(options);
        console.log('\n\nRunning replaceHtmlVars for files:', changes.join(', '), '\n\n');
    }
    catch (error) {
        console.error('Error occurred:', error);
    }

    return {
        name: 'replaceHtmlVars'
    };

};