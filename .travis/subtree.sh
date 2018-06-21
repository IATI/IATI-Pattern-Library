#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git add .
  git commit --message "Travis build $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin-pages https://${GH_TOKEN}@github.com/IATI/IATI-Pattern-Library.git > /dev/null 2>&1
  git subtree push --prefix converted-html origin-pages gh-pages
}

if [[ $TRAVIS_BRANCH == 'master' ]]
then
  echo Deploying master branch converted-html to gh-pages branch.
  setup_git
  commit_website_files
  upload_files
else
  echo Not master branch. Skipping deployment.
fi
