## How do I update the github.io?
`$ gatsby build`
`$ git add .`
`$ git subtree push --prefix public origin master`

Alternatively, run npm script
`$ npm run deploy`

Ensure that you're on the `uncompiled` branch
`$ git push`

