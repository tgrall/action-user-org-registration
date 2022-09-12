const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
    try {
        core.notice('My Action is called!!!');
    } catch (error) {
        core.setFailed(error.message);
    }
})();