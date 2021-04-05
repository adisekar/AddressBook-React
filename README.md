Address Book

1. Deployment / Running
   npm i
   npm start

or
cd server
node index.js
localhost:9000 (running express server with js bundle)

or
code also deployed to AWS Amplify, can be viewed here. Continous Deployment is available through GitHub
https://master.d2g8c0v90mi2ue.amplifyapp.com/

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

5. More features:
   Better styling (make it more pretty) ( 1 - 2 days)
   API to return the contacts ordered by name. (Did not want to do ordering in UI, as it will break pagination, or we need to load all the contacts all at once (bad for performance)) (1 - 2 days)
   More Unit Test and Integration tests (2 days)
   Containerize it and deploy to ECS/EKS
   Localization/Internationalization (1 - 2 days)
   Analytics Tracking (Omniture) (1 - 2 days)
   Accessability Issues Fix (1 - 2 days)

6. Unit Tests
   npm run test
