const fs = require('fs')

const questionsRoot = './questions'
const resultRoot = './clean-questions'
fs.readdir(questionsRoot, function (err, dirs) {
    dirs.forEach(function (dir) {
        const path = questionsRoot + '/' + dir
        fs.readFile(path + '/template.ts', 'utf-8', (err, templateData) => {
            fs.readFile(path + '/test-cases.ts', 'utf-8', (err, testData) => {
                testData = testData.replace('from \'@type-challenges/utils\'', 'from \'../helpers\'')
                templateData = '\n\/\/ Template \n' + templateData
                fs.writeFile(resultRoot + '/' + dir.split('-').slice(1).join('-') + '.ts', testData + templateData, () => {
                })
            })
        })
        // Do whatever you want to do with the file
    });
});






