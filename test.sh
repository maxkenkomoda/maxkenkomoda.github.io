rm -rf ./_tmp
jekyll build

echo "create en folder"
# mkdir usr/share/nginx/html/en
# mkdir _site/en

echo "move all files"
# mv user/share/nginx/html/ user/share/nginx/html/en
# mkdir ./_tmp
# mv ./_site/ ./_tmp/en/
# mv ./_tmp/en/ja ./_tmp/ja/
# mkdir ./_site
# mv ./_tmp/* ./_site

mkdir ./_tmp
mv ./_site/ ./_tmp/en/
mv ./_tmp/en/ja ./_tmp/ja/
mkdir ./_site
mv ./_tmp/* ./_site
