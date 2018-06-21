#!/bin/bash

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
  git subtree split --prefix converted-html -b gh-pages
  git push -f origin-pages gh-pages:gh-pages
  git branch -D gh-pages
}

echo On branch ${TRAVIS_BRANCH}.

if [ $TRAVIS_BRANCH == 'master' ]; then
  echo Deploying converted-html to gh-pages branch.
  setup_git
  commit_website_files
  upload_files
else
  echo Skipping gh-pages deployment.
fi
