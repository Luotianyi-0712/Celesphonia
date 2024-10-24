cd ..
mkdir temp
GITHUB_URL=https://oauth:${Celesphonia_GH_TOKEN}@github.com/Celesphonia/luotianyi-0712.github.io
git clone ${GITHUB_URL} temp

rm -rf temp/*
mv ./Celesphonia/docs/.vitepress/dist/* temp

cd ./temp

git config --global init.defaultBranch main
git remote add origin ${GITHUB_URL}
git branch -M main

git config --global user.name "Miku"
git config --global user.email "bilibilias@hotmail.com"
git add *
git commit -m "docs: auto update"
git push -f
