const inquirer = require('inquirer');

module.exports = {
    initialQuestions: async () => {
        const questions = [
            {
                name: 'requestType',
                type: 'list',
                message: 'Would you like to view your portfolio or prices?',
                choices: ['Portfolio', 'Prices']
            }
        ];
        return inquirer.prompt(questions);
    }
};