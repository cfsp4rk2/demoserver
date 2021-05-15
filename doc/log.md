06/02/2021

21:41

This is the start of the network mapping web tool I originally nicknamed Omni.

I am going to build this in the web as a temporary solution, and eventually port it over to the desktop graphics engine I am making called Zone.

I could potentially call it schema. Maybe sputnik. Maybe comsat? Buzz Media.io is available.

Lets call it comsat for now. Communications satellite, its about seeing your organisation from multiple views, the network, the social and the physical.


I need a framework or a structure. I think I should take inspiration from meerkate in terms of API layers. I should layer everything as it allows me segment responsibility in the code.

Okay, its gota be an API that has access to these tools. The web frontend will communicate with that API, and eventually, so will Zone.


REST API                    Receives commands over HTTP.

COMMAND PROCESSOR           Processes the command into verbs and parameters.

COMMAND API                 Checks value of parameters and checks input is correct.

MANAGER                     Executes main functions and handles the entity.

ENTITY                      The core class.


Okay so lets start on the network layer first.

The main item that exists on the network is a device or a host.

The device will have strict pieces of information such as ports, protocols, IP, hostname etc.

The device will also have dynamic pieces of information which is user defined. (output from a scan).


Lets go through a scenario:

You start with a blank canvas, or a blank network.

For every process, there needs to be a administrator and a pentester equivalency.

You can either manually add hosts to the network, or perform host discovery using a plugin (nmap, masscan, etc)

You can define a host, with its type, its IP, its hostname / domain name.

You can alternatively execute nmap and provide an IP range or an IP address, and the plugin will perform a scan and auto create the hosts.

You can then click on a host and add info such as ports, or perform an additional nmap scan to determine open ports.

The more plugins or info that is added, the richer the network becomes.

Lets start here.


07/02/2021

01:47

The main entity that I should start with is Host.

04:45

Started setting up the project and got carried away. Have done the HttpHeaders class. Have also cleaned up Log.


08/02/2021

00:21

I have just started a Host class. Ill eventually have extensions of that class for each type of device.

I need to make a cftoolkit class that executes command line arguments. This will be the basis for the plugins.


15/02/2021

23:49

I guess the Shell class is done and allows to execute a command.

I should start with user accounts, lets build an API for creating and modifying users. Ill also need a heartbeat and some form of authentication.

PUT      ->      /api/v1/user/create
    email
    password
    confirmPassword

POST     ->      /api/v1/user/edit
DELETE   ->      /api/v1/user/delete

POST     ->      /api/v1/authenticate


I have implemented an api request to /api/v1/temp/resetDatabase that only exists in development. This executes Database.setup();

I have created a nested setup for the class Database, that currently has a User class with get method.


16/02/2021

23:52

Going to carry on with the user methods.

The /user/create method is almost done. It needs to do validation of input data, and needs to send the email with the confirmEmail code.


24/02/2021

22:18

Again, going to carry on with the user methods. Need to finish /user/create or atleast implement the confirmEmail code.

Lets plan out all of the user routes:

ROUTES: 
    PUT ->      /api/v1/user/create
    POST ->     /api/v1/user/edit
    POST ->     /api/v1/user/confirm_request
    POST ->     /api/v1/user/confirm
    DELETE ->   /api/v1/user/delete
    POST ->     /api/v1/user/authenticate
    POST ->     /api/v1/user/deauthenticate
    POST ->     /api/v1/user/reset_password
    POST ->     /api/v1/user/update_password

Im instead going to remove the functionality from the routers themselves, into a user class.

This is because some of the functions around sending email confirmation can arise from creating an account, requesting to confirm your account and editing your email address.

METHODS:
    create
    confirmRequest
    confirm
    edit
    delete

02:13

Have started the user class. Have created the create method, and now have started the confirmEmailRequest method.

This needs to check that the tempEmail is in the database, and if there is multiple, return the latest one by timestamp.

Currently in class/User/User.ts (confirmEmailRequest) and class/Database/User.ts (get).


25/02/2021

15:01

Carrying on with confirmEmailRequest.

So now when creating a new user, it deletes any users that have the that email as a temp one.

Completed the create and confirmEmailRequest methods.

18:48

Have completed /user/create, /user/confirmEmailRequest, /user/confirmEmail and their associated User class methods.

Next time, I need to start the /user/edit route and the User.edit method.


26/02/2021

14:54

Lets get started on the edit method.

The data that can be edited is the firstName, lastName and email.

It might be better to do the authenticate methods first because the others rely on this.


04/03/2021

13:58

Going to do the authentication methods.

User.authenticate, the main api route to check credentials and geneterate an accessToken is now working.

I now need to do the authorise middleware.

17:19

Authorise User method is now complete. Needs to be tested.


05/03/2021

13:08

Need to change ExpressRouter back to static. Will fix this later.

Now need to check that the middleware is working. It is. 

I still need to add functionality to remove all emailTemps after confirming your email address. If the process was performed multiple times.

14:08

I need to have the available details that are associated with the user to be modular. These should be entered during the initialisation of the class.

15:06

Lets start the edit route.

15:51

User.edit and edit route is now complete.

16:04

I have now started the delete User method and route.

Have completed the delete account user method and route.

16:45

Time to do the deauthenticate route and method.

Deauthenticate user method and api route is complete.


07/03/2021

00:58

Ill do the reset and update password functionality later.

I want to start the interface and basic dashboard. At least the login page.

03:28

I have created the basic views for the dashboard, login and register. I have got the login form working, and current are doing the register form. For some reason, the register form sent twice.

22:10

Lets do a bit before bed.

I need to add the credentials allowed object on the frontend form.

23:11

Going to also start the basic 2d surface.

This needs to have:
    Window
    Input
    Event
    Layer

https://github.com/cfsp4rk2/engine/blob/master/src/Engine.js

08/03/2021

11:07

Lets finish the other user routes, and think about the admin routes.

Renamed reset password to reset password request.

Renamed update password to reset password.

Finished the resetPassword and resetPasswordRequest user method and route.

13:17

Need to make sure that updating email doesnt prevent logging in. Done.

Need to fix the problem with duplicate accounts.

18:01

Users that are updating their email can still log in with old email until confirmed. Have commented the User class.

17/03/2021

01:44

I didnt document the last 2 sessions, but I pretty much rewrote what I had in the old cfsp4rk2/engine repo, now in typescript. I have refactored alot of it, and definely improved, but still kept the underlying structure.

This is a 2d engine, but refined from my previous goal.

I am going to have the following:

Engine          - Main methods. Has a canvas, context, camera, container, input and entity container.
Core            - Contains the loop, render and process methods.
Entity          - A template entity that will be extended. Will be saved in the Engine in its own layer.
Surface         - This will be the world, or the area that can be accessed. Styled in a isometric fasion.
Interface       - Any methods for drawing UI related stuff.
Event           - An event that can be called, and listened to.


I should move the camera to its own class. Should also rename it to Zone2D.

Camera is now its own class. It holds the canvas element, but not the context. That will soon be moved to the Surface.

I need to do the Event system, but also need to the Surface.

Lets start with the event system.

Event is a class.

new MouseClickEvent(callbackFunction)

MouseClickEvent.constructor:
    access the MouseClickEvent static callback array and push the callback.

MouseClickEvent static listen method creates actual event listeners, and points them to the dispatch method which has the functionality to go through all the events inside the static event callback array and execute the execute method. Its status then turns to complete and doesnt exits anymore. Lets try.

This method is not working.

Lets refactor.

I need to be able to just extend, and add a function for listen, and that function calls dispatch.

Got it working.

20/03/2021

01:11

Have finished the Action system. Now need to implement each Action derived class. Going to use the zone one.

ZONE CURRENT EVENT SYSTEM:
Event
    KeyEvent
        KeyPressEvent
        KeyReleaseEvent

    WindowResizeEvent
    WindowCloseEvent
                                    AppTickEvent
                                    AppUpdateEvent
                                    AppRenderEvent
    MouseMovedEvent
    MouseScrolledEvent
    MouseButtonEvent
        MouseButtonPressEvent
        MouseButtonReleaseEvent
        
Seems that the events that return the same data, just at different points have their own derived classes.
For example, KeyEvent always returns info about the key, so keypress and keyreleased should be derived.

I should first fix the issue with event listeners executing every callback saved to them. There should only be one event listener for all saved callbacks. At the moment, listen() is being executed each time.

Fixed it, listen is only executed if its first time being called.

Lets try and do a 2 stage derived class.

Im not going to do derived class. Well, maybe I still can.

Got it working... so the second level deep is abstract itself and can have implement any abstract method from level 1. Level 3 is not abstract and just extends level 2.

abstract level 1
    abstract method 1
    abstract method 2

    abstract level 2 extends level 1
        implement method 1

        level 3 extends level 2
            implement method 2

level 2 abstraction doesnt need a constuctor. if level 3 constructor calls super, it goes to level 1.

PROPOSED ACTION SYSTEM
- Action                                  (abstract)      (timestamp, type)
    - KeyAction                           (abstract)
        - KeyPressAction
        - KeyReleaseAction

    - WindowResizeAction
    - WindowCloseAction

    - MouseAction                         (abstract)      (cameraX, cameraY, worldX, worldY)
        - MouseMoveAction                                 ({cameraX}, {cameraY}, {worldX}, {worldY})

        - MouseScrollAction                               ({cameraX}, {cameraY}, {worldX}, {worldY}, deltaX, deltaY)

        - MouseButtonAction               (abstract)      ({cameraX}, {cameraY}, {worldX}, {worldY}, button)
            - MouseButtonPressAction                      ({cameraX}, {cameraY}, {worldX}, {worldY}, {button})
            - MouseButtonReleaseAction                    ({cameraX}, {cameraY}, {worldX}, {worldY}, {button})

        - MouseEnterAction                                ({cameraX}, {cameraY}, {worldX}, {worldY})
        - MouseLeaveAction                                ({cameraX}, {cameraY}, {worldX}, {worldY})

{} means it has been inherited.


For now, I cant have values associated with the top level classes because they cant access the event object (easily.)

TEMP ACTION SYSTEM
- Action                                  (abstract)      (timestamp, type)                                                                             DONE
    - KeyAction                           (abstract)      (key, repeatCount?, code, altKeyFlag, shiftKeyFlag, controlKeyFlag)                           DONE?
        - KeyPressAction                                  (implemented)                                                                                 DONE
        - KeyReleaseAction                                (implemented)                                                                                 DONE

    - WindowResizeAction                                  (width, height)                                                                               DONE
    - WindowCloseAction                                   ()                                                                                            DONE

    - MouseMoveAction                                     (cameraX, cameraY, worldX, worldY, altKeyFlag, shiftKeyFlag, controlKeyFlag)                  DONE

    - MouseScrollAction                                   (cameraX, cameraY, worldX, worldY, deltaX, deltaY, altKeyFlag, shiftKeyFlag, controlKeyFlag)  DONE

    - MouseButtonAction                   (abstract)      (cameraX, cameraY, worldX, worldY, button, altKeyFlag, shiftKeyFlag, controlKeyFlag)          DONE
        - MouseButtonPressAction                          (implemented)                                                                                 DONE
        - MouseButtonReleaseAction                        (implemented)                                                                                 DONE

    - MouseEnterAction                                    (cameraX, cameraY, worldX, worldY)                                                            DONE
    - MouseLeaveAction                                    (cameraX, cameraY, worldX, worldY)                                                            DONE

{} means it has been inherited.

Lets do mouse enter and mouse leave. Done, I now should do Key. Done.

I have removed the old initialiseInput functionality and the isPressed method.

Ive set up event listeners for all the standard actions, which now add a string to the Engine.input.

The Interface debug screen handles this now.

04:49

Stopping now. KeyAction needs repeatCount. MouseMove, MouseScroll and MouseButton need altKeyFlag, shiftKeyFlag and controlKeyFlag.

Next time, make a basic FPS graph.

20/03/2021

20:05

Going to finish KeyAction. This will eventually have a keycount. Im going to have to store an object of keycodes on keydown and increment it everytime keydown is fired. If keyup is fired, the keycode is removed.

Lets add the keyflags to mouse move, scroll and button. Done.

Lets implement the window resize and window close.

Window methods are done. I think the Action system is complete for now.

I need to do the World now, and then the Surface.

World needs to be the active area in which the camera can go.

The surface will be an actual entity that exists in the world.

World will need a width and height. It will hold the entities.


Ex = Vw/2 + (Vx * -1) + Ix - Ew/2

Ey = Vh/2 + Vy + (Iy * -1) - Eh/2

E is the true vector from the canvas origin.

Vwh are the canvas width and height.

I is the input vector.

Ewh are the entities with and height.


```
Ex = Cw/2 + (Cx' * -1) + Ex' - Ew/2
Ey = Ch/2 + Cy' + (Ey' * -1) - Eh/2
```

- E is the true Entity position vector from the the Canvas origin (top left) to the Entity origin (top left).
- Cw/h is the true Canvas width and height.
- C' is the virtual Camera position vector. Starts at 0,0.
- E' is the virtual Entity position vector from the center of the World to the center of the Entity.

So the Camera will just have an X and Y position, and the World will have a width and height. The Camera cannot view outside the World boundary.

If the World is 1000 x 1000, and the Camera is 400 x 400. What is the boundaries of the Camera.

```
Cx∧ = (Ww/2 - Cw/2) * -1
Cx∨ = Ww/2 - Cw/2

Cy∧ = (Wh/2 - Ch/2) * -1
Cy∨ = Wh/2 - Ch/2
```

- C∧ is the minimum Camera position vector.
- C∨ is the maximum Camera position vector.
- Ww/h is the World width and height.

Cx∧ = (1000/2 - 400/2) * -1 = -300
Cx∨ = 1000/2 - 400/2 = 300

Camera is going to need a getPostion and setPosition.


Need to constrain 400 to -300, 300

min(max(100, -300), 300) - 100

min(max(400, -300), 300) 300

Okay, the camera can be positioned. For now, ive added a camera move function that gets called my a mouse scroll event. seems to be working well, but I need a background to properly check.

Lets make a basic entity and draw a square.

01:46

Have created "Agent". It at the moment calls setPosition, a method on Entity.

Entity.setPosition performs the World.constrain and virtualToTrue method for both x and y.

It now needs to be added to the World.entity layers and some functionality to draw a square inside its render method.

There needs to be an Action for render and process. World needs to create a process action that calls a method that goes through every entity in its list, and calls their respective process method. Same then goes for render.

Ill do this next time.


23/03/2021

22:01

Agent go BRRRRRR.


25/03/2021

19:23

Movement controls:

Pan:
    Hold middle click, and move mouse.


16/04/2021

https://www.youtube.com/watch?v=ZQ8qtAizis4


24/04/2021

Doing Figma.

Open up the application, start at the login page.

Login and view your environments.

Create new environment or open existing.

