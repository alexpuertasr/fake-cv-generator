# Fake CV generator

This repo generates resumes totally fake.

```
/api/candidates
```

This endpoint provides you a JSON with the information of a fake candidate

```
/api/candidates-cv
```

This endpoint generates a simple PDF CV with a fake candidate

## Getting started

### 🛠️ For development

```bash
yarn install
yarn dev
```

### ✨ For production

```bash
yarn install
yarn build
yarn start
```

## 📄 Notes

The candidate information is following the standard of [JSONResume](https://jsonresume.org/)

### 📖 TODO

- [] Add gender, nationality and industry profile
- [] Populate the rest of the candidate details
- [] Add probability to the date (more frequency names and surnames)
- [] Use https://generated.photos/ to get random image profile
- [] Move data to a database
- [] Prepare testing (Jest)
