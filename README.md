# products_backend_fakturujto_interview_task

Steps needed to run apliaction (replace your-tag with your own tag):

1. Install NestJS client using command `npm i -g @nestjs/cli`
2. Configure database on `https://www.mongodb.com/`
3. Create an .env file with field `MONGO_DB_URI` and paste there URI(example: "mongodb+srv://<username>:<password>@cluster000.kpssdfg.mongodb.net/?retryWrites=true&w=majority")
4. Run `npm install` 
5. Run `docker build --tag 'default_tag' .` (replace it with your name)
6. Check if docker image name in `docker-compose.yml` is the same as 'default-tag' (replace it with your name)
7. Run `docker-compose up`
