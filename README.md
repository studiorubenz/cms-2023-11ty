# Website


## Webdev-Dependencies
`npm i`
 
## Live server / browser syncing
`(cd ./dist && npx browser-sync start -s  --files='**/*' --watch)`


## Build
Run `./build` to
* compile sass
* bundle JavaScript
* copy the index-file
* copy the `/images'-folder
* ...


### Clean Build
Run `./clean-build` to build a new dist-folder from scratch.


## Deploy with netlify
If you only need a static site and set up netlify, simply push to main, which then automatically triggers a new deployment.


## Github Reminder
Remember to replace `git@github.com` in the remote origin command  
`git remote add origin git@github.com:studiorubenz/repo-name.git`  
with `git@github-studio`, i.e.  
`git remote add origin git@github-studio:studiorubenz/repo-name.git`  
in order to be able to push upstream with the studio-rubenz-SSH-identity.

s. https://stackoverflow.com/questions/3860112/multiple-github-accounts-on-the-same-computer

Awesome!
