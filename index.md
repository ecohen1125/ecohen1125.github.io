# Eli Cohen's Projects

My name is Eli Cohen, and I am a Computer Science major specializing in Software Engineering with minors in Informatics and Web Design.

## [In Color](https://github.com/ecohen1125/In-Color)

This is a project that was made in Xcode using Swift.
I was working in a team with Jacob Day and Evan Japundza, and this app was made for CSCI-C 323 Mobile App Development.
This app is a drawing app that can save drawings to be able to be viewed in a table view controller.

This is the Canvas for drawing in the app. The user can touch the screen and a line will be drawn wherever one touches. There is a new canvas button in the top right that will reset the drawing. There is a save canvas button in the top right that saves the drawing to be displayed in the table view controller. There is a random background button that asks the user for permission to access their camera roll. It picks a random picture to be displayed in the background. The user is then able to trace over it.

![image](https://user-images.githubusercontent.com/77858375/167950454-12129956-9980-40b4-b1d3-e9bddefc43e5.png)

These are the settings that the user has to draw with. The user can change the color of the pencil that they draw along with the color of the background. The slider allows the user to change the thickness of their pencil.

![image](https://user-images.githubusercontent.com/77858375/167950930-8e6fdb56-4ed3-4e31-9a09-bb2779942e88.png )

This is the table view controller that shows the user their saved drawings. It also has a button that lets the user share their drawing on social media or save it to their camera roll.

![image](https://user-images.githubusercontent.com/77858375/167951315-52e6e0aa-2efc-4e6e-b8bf-bbf44308f172.png)


## [Memphis Grizzlies Fan Website](https://github.com/ecohen1125/MemphisGrizzliesFanWebsite)

This website was made for INFO-I 360 Web Design. I used the colors and branding of the team to make it feel like it fits with the Memphis Grizzlies.

This is the Home Page of the website. The navigation bar links to every page and is consistent throughout the website.
![image](https://user-images.githubusercontent.com/77858375/167947402-2958fe90-6941-481c-9edd-be7a1c389bda.png)

This is the image gallery that is on the Home Page. The arrows underneath it allow the user to look through all the photos.
![image](https://user-images.githubusercontent.com/77858375/167947648-975eae70-53a2-4b55-ac0b-827e8c434f32.png)

This is the footer that is on every page. It has my name, ways to contact me, and my social media.
![image](https://user-images.githubusercontent.com/77858375/167947870-9c28beb5-c209-4cba-9732-5e563ff7db56.png)

This is the table that is on the Roster page. It sorts the column based on which heading you click. An arrow will appear showing which direction it is currently being sorted.
![image](https://user-images.githubusercontent.com/77858375/167948026-ec158361-3fe2-4f1d-934a-7f8b46f0b04a.png)

This is the Schedule page. When either Home Games or Away Games is clicked, it will display only them. When it is pressed a second time, all games are shown.
![image](https://user-images.githubusercontent.com/77858375/167948273-d7288ef4-6577-497c-adce-52f4bb559e02.png)

This is the table on the Stats page. It is another sortable table like the one on the Roster page and has the same effects.
![image](https://user-images.githubusercontent.com/77858375/167948870-e01b8e3e-4e7f-4301-8dc9-1e8418958da8.png)

This is the Social Media page. It displays, using Flexbox, different tweets that I liked from the Grizzlies community on Twitter.
![image](https://user-images.githubusercontent.com/77858375/167948998-b7b905a8-c566-44ed-b7e5-51210d9baf86.png)


## [Sleep, Rest, Diet, and Exercise](https://resilience-inc.itch.io/eat)

This is the game that I am working on during my internship with Relilience, Inc. This PC game is designed to help children learn how to manage sleep, rest, diet, and exercise. This game is being made in Unity with maps made in Tiled. 

The Menu scene is what the player will see when they open the game. It lets the player start the game, change options like volume quit and see the credits. It will have a picture of the map in the background soon.
![image](https://github.com/ecohen1125/ecohen1125.github.io/assets/77858375/ecc7b4f2-3cec-44e3-b207-0701af96de0c)

The apartment scene is where the player starts the game. The player can interact with the fridge to answer some questions about being healthy. They will lose energy if the wrong food is picked. The player is also able to sleep to restore their energy.
![image](https://user-images.githubusercontent.com/77858375/167957077-6d387ea2-f8e7-4587-8fc0-d1990ac267a7.png)

The map is how the player goes from one location to the next. The player will click on the place they want to go to.
![image](https://user-images.githubusercontent.com/77858375/167957262-d354c5ba-52a0-4fe5-b47a-e017f37e4dde.png)

The restaurant is where the player can eat healthy or unhealthy foods. Depending on what food is chosen, their energy will change accordingly.

![image](https://user-images.githubusercontent.com/77858375/167957332-801e0789-4a4e-47b8-9e9e-1ee7e86d7589.png)

The gym allows the player to increase their maximum energy. The player can work out and feel energized the next day.
![image](https://user-images.githubusercontent.com/77858375/167957482-d88f9ed2-c566-4135-bc3c-83d1937aae7a.png)

## [Learn Lambda Calculus: The Fun Way](https://github.com/ecohen1125/Learn-Lambda-Calculus)

For this project, I created a game like 2048. It is intended to teach basic lambda calculus in a fun and more enjoyable way. I have written a home page explaining lambda calculus and the instructions for the game. You will be taken to the game once you click play at the bottom of the instructions. It is set up in a four-by-four grid. It starts with two tiles colored tiles with the rest being blank. The colored tiles have either lambda expressions or values on them. The game's controls are the WASD or arrow keys. Pressing any of these buttons will move the tiles in that direction, and if the two tiles match, they combine, and a new lambda expression or value is created. To match two tiles, you will apply a value to a lambda expression that gives the next multiple of 2.

The game works code-wise in that I have an array that keeps track of the tiles in the game. The tiles that are seen on the screen are stored as children of a div I have given the id "board." I have the logic for moving in each direction and that changes the array, and then I update the screen based on that array by removing all the children from the board div and replacing them with the updated ones based on which way the player moved. I also have two arrays for each multiple of two that store a list of different lambdas and the second list that stores a list of values. I do this so that the game has some form of randomness to it, so the player learns the lambda calculus instead of just memorizing what goes with what. The game also has a color mode where the tiles get colored based on what multiple of two they are. This makes it easier for someone to learn lambda calculus because they get the answers instead of having to guess to start.
