const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
    try {

        const githubUser = getRequiredInputValue('github_user');
        const githubToken = getRequiredInputValue('github_token');


        core.notice(`My Action is called by ${githubUser}  `);



    } catch (error) {
        core.setFailed(error.message);
    }
})();