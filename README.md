## Replicate Drafts Error

Start local db

```
docker-compose up -d
```

Start the app

```
pnpm run dev
```


Login to `http://localhost:3000/admin`

Create 2 new articles and save as drafts

Look at `Versions` tab of either article. It will show all save versions of each article.