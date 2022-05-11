# Fake CV generator

This API generates resumes and candidate information totally fake.
I started this project to speed up my tests on the development of an ATS in Exelero.
My intention is to expand this API to generate more realistic CV's and add the posibility to customize your candidates (nationality, kind of industry, etc...)

https://fake-cv-generator.herokuapp.com/api/candidate

```
/api/candidates
```

This endpoint provides you a JSON with the information of a fake candidate

https://fake-cv-generator.herokuapp.com/api/candidate-cv

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

- [ ] Add gender, nationality and industry profile
- [ ] Populate the rest of the candidate details
- [ ] Add probability to the date (more frequency names and surnames)
- [ ] Use https://generated.photos/ to get random image profile
- [ ] Move data to a database
- [ ] Prepare testing (Jest)
