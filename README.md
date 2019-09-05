# Pigment

PWA color management utility created with OneUI CSS

## Getting Started

### What Is A Progressive Web App?

Progressive web applications are a type of mobile app delivered through the web, built using common web technologies including HTML, 
CSS and JavaScript. They are intended to work on any platform that uses a standards-compliant browser.
Some features that belongs to PWA are:
- Responsive
- Connectivity independent
- App-like
- Safe
- Installable: Users could add an icon for the app to
their homescreen.
- Linkable: The app could be shared easily, and accessed without
having to download and install an app.


### Prerequisites

- Web Browser
- Basic Knowledge of Javascript, CSS, HTML
- OneUI CSS Library

### What You'll buid

You will create a color conversion web app using the following:
- One UI CSS: the library to make your app responsive and cross-platform
- Service Workers to provide offline features
- Web Manifest, in order to make your web app instalable

We suggest to use PWA builder in order to create the required files and check the status of your app.


## Step by Step Guide

### Set UP

For this codelab, we recommend using Glitch


- Open a new browser tab and go to https://glitch.com.
- Click New Project, then Clone from Git Repo.
- Clone https://github.com/SamsungInternet/pigment-starter.git

### Add OneUICSS Library and make your app responsive


OneUICSS is the Library by Samsung that allows developers to have a responsive web app and
a good user experience that feels second nature. It's designed for better reachability and integrated with Bixby features like Vision and
Bixby Routines.
For more information visit:
https://www.samsung.com/uk/apps/one-ui/

In your starter kit, the library is already downloaded under css/oui-css.

In order to start using it, in your index.html add the following line inside <head></head>

```javascript
<link rel="stylesheet" type="text/css" href="css/oui-css/oui.css">

```
Your app is looking much better now right? We have one more detail, one ui works adding the related classes to each html element.
Let's do it with the HEX input element, add the following classes:

```html
<h2 class="oui-bubble-title">HEX</h2>
<input type="text" class="oui-input-textual current-color-text" onchange="convertColor(this.value)" placeholder="#FFFFFF">
```  




### Add a Web App Manifest

The web app manifest is a JSON file that allows you to control how your app appears to the user and
ensures that progressive
web apps are discoverable. It describes the name of the app,
the start URL, icons, and all of the other details necessary to
transform the website into an app.

You can create manifest.webmanifest manually under your project with the following code:

```javascript
{"name" : "pigment",
    "short_name" : "pigment",
    "description" : "Pigment App color conversion",
    "start_url" : "https://sdc-pwa-2019.glitch.me/",
    "lang" : "English",
    "display" : "standalone",
    "theme_color": "#3d3d3d",
    "background_color": "#f2f2f2",
    "orientation" : "portrait",
    "icons": [ {
       "src": "/images/pigment-ico.png",
       "sizes": "192x192",
       "type": "image/png"
     },
     {
       "src": "/images/pigment-ico.png",
       "sizes": "512x512",
       "type": "image/png"
     }]
  }
```

There are different attributes that you can provide to create your manifest file, if you want to add more information and see which attributes are available we strongly recommend
using PWA builder.

- Go to https://www.pwabuilder.com/
- In glitch, go to Share menu, Live App and copy the url
- Paste the url PWA builder website and press start

You will see the current status of your PWA.
Select View Generated Manifest, copy and paste the json generated under a new file called manifest.webmanifest in your project.
Add the following code to your start page:
```html
<link rel='manifest' href='/manifest.webmanifest'>
```


### Add a Service Worker 

A service worker allows web developers to intercept and control how a web browser
handles its network requests and asset caching. With service
workers, web developers can create reliably fast web pages
and offline experiences.
There are different types of service workers, in this case we are going to choose Cache-first Network, 
where we can pre-cache content. The content you add to the "cache-array" will be added immediately to the cache and service from 
the cache whenever a page requests it. At the same time it will update the cache with the version you have on the server. 


- Using PWA builder, go to Service Worker menu. 
- Choose cache-first network
- Add the code generated to your landing page in a <script> tag:


### Install Experience and Other Features

Besides what we have already done there are different features that you can add to your app including the behavior of an installed app.
In order to add this feature (and explore others) in PWA builder go to https://www.pwabuilder.com/features. In this case we already followed the criteria with our manifest file to make Pigment installable.


### Test your App!

Congratulations! You just created a Progressive Web App! 
- Open your browser and select the install button.

<img width="150" alt="install" src="https://user-images.githubusercontent.com/7328790/64352404-e35c7280-cff3-11e9-93bd-6d4083d386ec.png">


Your PWA has a full app behavior now!!


<img width="500" alt="install" src="https://user-images.githubusercontent.com/7328790/64352847-9f1da200-cff4-11e9-95fb-a360439f9c22.png">


You can follow these steps with any web app and convert it to a PWA.



If you would like to learn more about it, take a look into the following links:
  - Progressive Web Apps by Jason Grigsby https://abookapart.com/products/progressive-web-apps
  - https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
