## How do I update the github.io?
`$ gatsby build`

`$ git add .`

`$ git commit -m ""`

`$ git subtree push --prefix public origin master`

Alternatively, run npm script

`$ npm run deploy`

Nevermind... npm script needs to `build` `git add .` `git commit` THEN `git push`

Ensure that you're on the `uncompiled` branch

`$ git push`

