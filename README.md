Install:

1) clone repository
2) npm install
3) ng serve
4) In browser go to localhost:4200


How it's work?

I use credentials to my firebase project, for testing. So when you need to include this code to your app, change config in the `./src/environment/environment.ts` `environment.firebase`. (Get this config from firebase console)

For connect with firebase services I use the `angularfire2` package. I'ts the official library for Firebase and Angular. ([https://github.com/angular/angularfire2])