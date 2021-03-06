# IDKeeper

Digital identification saver application

**Synopsis**

I created an application, accessible from mobile devices, for the user to access and store their private identification documents. This application would be used as a legal replacement for the current physical copies of identification, that every citizen is forced to carry on their person. This application would be controlled and protected by the governing body of which it is being used, allowing only that government to add, remove, or change any legal form of identification. The user’s will only be able to access their IDs information and present the digital copy to whomever may need it. 

**Research Question**

Why must citizen carry physical proof of identification when we can access almost everything else digitally, from our mobile devices?

**Problem Statement**

As our society continues to grow and advance into the digital world, everyday physical items are disappearing and becoming accessible through a digital interface on mobile devices. 

Almost all the items we used to carry on our person are not needed anymore or can be accessed through our mobile device. We no longer need to carry cash or physical credit cards anymore because we can pay with a tap of our phone, newer cars and home locks are becoming more digital allowing us to unlock those things from apps on our phones, things like navigation, music, grocery lists, etc… are all accessible from one mobile device and have eliminated the need to print out physical directions, stop the need to carry a separate device for music, and do away with carrying a pen and paper to write import things down. 

Unfortunately, there remains one important item that we cannot live without, nor has it become digital, and that is identification. All forms of identification are presented in a physical form and most of them require you to always keep it on your person and safe from others. Forgetting or losing your I.D can lead to minor inconveniences as well as huge, life changing complications. Therefore, I attempt to digitalize all forms of user identification is hopes to make the user’s life easier and safer by creating an application that the user can securely access anywhere and anytime from their mobile device.

**App Creation**

For this project I used React Native, an open-source UI software framework, to build and develop ID Keeper. React Native is a very useful application platform because it allows the user to develop apps for both Android and IOS, while only coding the application once. I found this very useful for this project as time was limited, but I was still able to develop a working app for both operating systems. Once React Native and all it’s many libraries we’re installed, I used Visual Studio Code to write the code that would make up ID Keeper.

To observe my progress on development, I used Android Studio’s phone emulator, to mimic an Android phone, this allowed me to ensure the app worked properly on Android devices. For the IOS users, I used an app on my iPhone called “Expo Go”.

The data that appears on the application I entered into an internal database manually. All data is made up and relates to a fictional citizen for security and privacy purposes. In a published version of the app, the application would be connected to an external database with real, sensitive personal data of the users.  

**App Navigation**

The user is first greeted by the welcome screen, where they can see the ID Keeper logo and be invited to login to their account. The user logs in by entering their social security number and their birthdate. Both of these numbers are unique to the person and provides good initial security. If the user is in a time crunch, they also have options to instantly open two QR codes. One showing the user’s driver’s license and the other their passport. These instant IDs can be changed or equipped with a password depending on the user’s choosing. 

Once the user is logged in, they will be able to see all their government given IDs or licenses. The user can then click on the ID they want to view. This will bring the user to a screen where a picture of that ID can be seen as well as a QR code option, and a Details option, where the user can see the specific details of that ID. 
The user can also view important legal documents they have obtained , such as birth certificates, social security cards, or marriage certificates. If there is a problem with an ID, license, or document, the user can contact their local government to add, change, renew, or delete them by going to the contact us page. 

Lastly, the user can view upcoming local and national elections and vote in those elections through the app, on the respected dates. When the user is all done viewing or scanning their IDs, they can sign out of the app and return to the login page, securely closing down the app. 

**Limitations**

This app is designed to be a government run and funded application. A government accessible database is needed to allow citizens of that government to use it and access their legal identification. Without that database I had to create an internal database with false data. This allowed me to develop a functional prototype but would not work as a permanent solution. 

Another limitation I faced is security. I don’t have access or the knowledge to develop state of the art security protocols for this application. Due to the high amounts of sensitive, personal data this app would allow access to, it needs to be highly secure and only accessible to the user whose information they’re accessing. This app would also need to be connected to the internet in order to access data related to upcoming elections.

**Future Work**
For this app to be truly successful there would need to be some government resources added to it. Government issued IDs will not be legally accepted digitally unless they backed by the government and considered legal forms of identification. 

Assuming a government takes on this application, the first addition in development would be access to their citizen database. Once the app can access all citizens that would be using the app, the focus would shift to security and ensuring that no one’s data could get stolen or hacked. With these two things completed the main purpose of the app is complete and it would be ready for publication. 

The possibilities of this app are endless, it can be used as the only way for registered voters to vote, it can be used to catch and identify criminals, it can be used to track the whereabouts and activities of all citizens in a given town, state, or country, etc… Future work could keep continuing as long as the government keeps finding useful things this app can provide.

**Conclusion**

While the app I developed, functions properly and can be used by the one citizen whose information I preprogrammed, more needs to be done in order for it to reach it’s created purpose. We as a species are evolving so much each and every day, integrating technology into everything we can. We have the technology and the ability to replace old, physical IDs with digital versions. My goal is that the app I have created can be a steppingstone to accomplishing this goal and move humanity into a more technology reliant world. 
