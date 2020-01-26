### Socket.io nodejs server setup

cloce the repo browser to **nodeserver** folder

To install dependencies

```npm install``` 

To serve the app run 

```npm start```


### Socket.io ionic client setup

Just use the folder **ionicclient** for your code reference, create a new Ionic v3 project,

```ionic start ProjectName blank --type=ionic-angular```

Install socket.io client dependency

```npm install socket.io-client --save```

Only one import is needed, in your <custom> component ts file as below,

```import * as io from 'socket.io-client';```

To test the app on the same wifi/network use,

```ionic serve --external```

Grab the url with ip address, and point your external device browser to this address.

You can use the latest Ionic v4/5 for this and it works the same. 

## Screenshot

![Ionic v3 Demo](https://github.com/edocbuhtig/socket.io-ionic-client-nodejs-server/blob/master/screenshot/demoscreen.png)

## Ionic Info used for this repo
```
Ionic:

   Ionic CLI          : 5.4.15 
   Ionic Framework    : ionic-angular 3.9.9
   @ionic/app-scripts : 3.2.4

Cordova:

   Cordova CLI       : 9.0.0 (cordova-lib@9.0.1)
   Cordova Platforms : none
   Cordova Plugins   : no whitelisted plugins (0 plugins total)

System:

   NodeJS            : v12.14.1 
   npm               : 6.13.4
   OS                : macOS Catalina
```
