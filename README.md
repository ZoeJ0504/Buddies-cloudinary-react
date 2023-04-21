# Buddies

<p align="center">
  <img src="./client/src/image/Buddies.jpg"/>
</p>

Pet Sitting/Walking site that has two different desitnations depending on how you signed up. The signup page there is a dropdown box that sets the attribute of the user to either a petsitter or owner. Depending on which attribute is selected the NavBar has two separate settings. You can see events that don't have a helper if you are a petsitter or you can see your pets, and create events if you are an owner. 



### A live version of Buddies is deployed with Render and running here:

[Live Version](https://buddies-final.onrender.com/)



## Get started
After cloning the repo into you system you will need to: 
- make sure your system is running a ruby version 

After cloning the repo, run the following steps in the project directory to get started:

```
bundle install
```
Install Ruby gem packages associated with the project.

 ```
 rails db:migrate db:seed
 ```
Migrates all tables and associations that are needed. Also make sure to seed the backend so you have some data to work with.

 ```
 rails s
 ```
Start your Rails server. For a closer look at just the backend, you can open http://localhost:3000

Finally for your front end run:

```
npm start --prefix client
```
Runs the app in the development mode. 
