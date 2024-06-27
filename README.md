# JSONL ChatML Editor

## Paste in your JSONL Chat Dataset, Edit, & Export
### Made to make editing jsonl files easier

### =======================================

### to serve it locally:

```
npm run build
cd out
http-server -p 8080
```


### tips:
- clear between npm run build runs `rm -rf .next out`
- cd into /out & serve from there e.g. http-server 
- clear browser cache/use new incognito window (else may not update e.g. whats rendered via your url)




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

