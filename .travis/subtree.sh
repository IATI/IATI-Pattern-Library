#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

upload_files() {
  git subtree push --prefix converted-html origin gh-pages
}

setup_git
upload_files
