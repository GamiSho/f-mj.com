## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# deploy to staging
$ yarn generate
$ firebase hosting:channel:deploy stg-fmj-site

# deploy to production
$ yarn generate
$ firebase deploy
```

## TODOs
- [x] f-mjでfirebase init
- [x] delete carousel and content from top page
- [ ] push to github
- [x] 画像をcdn経由で
- [ ] Use @nuxt/image and add to tsconfig.json
- [x] コンテンツをgraphcms経由で
- [ ] Install renovate app
- [ ] test
- [ ] ci/cd
- [ ] SEO対策
- [ ] GA 入れる
- [ ] blog
- [ ] font serif not working
