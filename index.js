const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
    try {

        const githubUser = core.getInput('github_user');
        const githubToken = core.getInput('github_token');


        core.notice(`My Action is called by ${githubUser}  `);



    } catch (error) {
        core.setFailed(error.message);
    }
})();