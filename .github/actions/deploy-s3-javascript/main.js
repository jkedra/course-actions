function run()  {
    const core = require('@actions/core');
    const github = require('@actions/github');
    const exec = require('@actions/exec');

    core.notice('Hello from the custom JavaScript Action.')
};

run();
