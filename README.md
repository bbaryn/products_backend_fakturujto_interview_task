# products_backend_fakturujto_interview_task

Steps needed to run apliaction (replace your-tag with your own tag):

1. Install NestJS client using command `npm i -g @nestjs/cli`
2. Configure database on `https://www.mongodb.com/`
3. Create an .env file with field `MONGO_DB_URI` and paste there URI(example: "mongodb+srv://<username>:<password>@cluster000.kpssdfg.mongodb.net/?retryWrites=true&w=majority")
4. Run `npm install` OR run `docker build --tag 'default_tag' .`
5. Run `npm run start` OR run `docker run -dp 8080:8080 --name 'default_tag' 'default_tag':latest`