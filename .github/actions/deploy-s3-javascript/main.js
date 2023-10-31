const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run()  {
    core.notice('Hello from the custom JavaScript Action.')

    const bucket = core.getInput('s3-name', { required: true});
    const region = core.getInput('s3-region', { required: true});
    const folder = core.getInput('s3-folder', { required: true});

    const websiteURL = `http://${bucket}.s3-website-${region}.amazonaws.com/`;
    core.setOutput('website-url', websiteURL);


};

run();
