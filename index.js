const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
    try {

        const githubUser = core.getInput('github_user');
        const githubToken = core.getInput('github_token');
        const githubOrg = core.getInput('github_organization'); 
        const octokit = new github.getOctokit(githubToken);

        const x =  JSON.stringify(githubOrg);

        core.notice(`My Action is called by ${githubUser} for ${{x}} `);



    } catch (error) {
        core.setFailed(error.message);
    }
})();