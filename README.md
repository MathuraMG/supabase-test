extra steps:

* npm install express @supabase/supabase-js dotenv
* create an account and dable on supabase.com and disable DLS (not the best security move but good for class)
* need to create a .env account to add the supabase URL (of this database) and supabase KEY 
* REMEMBER that we will need a .gitignore file in this case
* When adding in railway it can be added in the UI itself

* If we are deploying this in vercel, we need a serperate vercel.json file because vercel is serverless (it's not always running) so app.listen doesnt work.
* also need to change the below in. index.js
  ```
  export default app;  // ← export instead of app.listen()
  ```