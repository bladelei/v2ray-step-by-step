
#!/bin/bash

git clone "https://${GH_TOKEN}@github.com/ToutyRater/toutyrater.github.io" 

mv toutyrater.github.io _book
cd _book

git init
git config user.name "Rater"
git config user.email "ToutyRater@users.noreply.github.com"
git remote add upstream "https://${GH_TOKEN}@github.com/ToutyRater/toutyrater.github.io"

cd ../
npm install gitbook-cli -g
gitbook init
gitbook install
gitbook build

cd _book
rm .travis.yml deploy.sh .gitignore

git checkout -b master
git add -A
git commit -m 'update'
git push upstream master -f
