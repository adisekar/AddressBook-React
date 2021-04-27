Address Book

1. Deployment / Running
   npm i
   npm start

or
npm run build
cd server
node index.js
localhost:9000 (running express server with js bundle)

Code can be deployed to AWS Amplify

2. Code Location
   https://github.com/adisekar/AddressBook-React/tree/master

3. Deployment Instructions to Distributed Cloud
   a. We can create a container of the App using Docker. Then host the container on ECR and run it using ECS. EKS can be used for orchestration. Best approach for full control.
   b. We can also use EBS (Elastic Beanstalk), to run the containers, if we are okay with automated scaling

4. Summary
   Create React app used for base structure. Redux and Typescript is also used.
   2 pages in app, and it uses React Router.
   Semantic UI for css
   ContactList component, fetches list of contacts from API via Actions/Reducers.
   ContactDetails component is called when user clicks on the contact. url is /details
   Axios is used for API calls. Redux Promise is used as middleware
   Jest/Enzyme/Moxios used for testing
   Pagination is also implemented
   Loader spinner is implemented, till network api requests returns

5. Unit Tests
   npm run test
