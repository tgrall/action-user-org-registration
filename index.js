const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
    try {

        const githubUser = core.getInput('github_user');
        const githubToken = core.getInput('github_token');
        const githubOrg = core.getInput('github_organization'); 
        const octokit = new github.getOctokit(githubToken);


        const const { status, headers, user }  = await octokit.request('GET /users/{username}', {
            username: githubUser
          });


          core.notice(user);

        //core.notice(`My Action is called by ${githubUser} for ${githubOrg} `);
        octokit.rest.orgs.createInvitation({
            org: githubOrg,
            invitee_id : user.id,
            role: 'direct_member'
          });


    } catch (error) {
        core.setFailed(error.message);
    }
})();