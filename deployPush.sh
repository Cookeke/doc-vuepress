#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# yarn docs:build

# 进入生成的文件夹
# cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git init
git add .
git commit -m 'update:docs'
git push

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git remote add origin git@github.com:Cookeke/doc-vuepress.git
# git branch -M master
# git push -f git@github.com:Cookeke/doc-vuepress.git main:gh-pages