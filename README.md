# Bowling Challenge

A web app for bowling, the user inputs the scores on each bowl and the app sums them up and returns the score. Handles strikes, spares and the 10th frame. Should work for all games between a Gutter Game (20 zero scores) and a Perfect Game (12 strikes).

<!-- ## Getting Started - TBC

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites - TBC

What things you need to install the software and how to install them

```
Give examples
```

### Installing - TBC

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo
-->
## Running the tests

Open [SpecRunner](SpecRunner.html) in your favourite browser.
<!--
### Break down into end to end tests - TBC

Explain what these tests test and why

```
Give an example
```

### And coding style tests - TBC

Explain what these tests test and why

```
Give an example
``` -->

## Thought Process

### Initial Planning

![whiteboard](https://i.imgur.com/NKNNdZ6.jpg)

### App Structure

The bowling challenge works through a central `Game` object which instantiates and stores each `Frame` object. It controls the flow of the game and checks for bonuses, passing score information to the `Frame` objects.

The `Frame` objects hold scores for each frame and provide error correction.

#### TODO:

* Extract bonuses into separate object
* Break up Game.addScore() into multiple separate functions or objects
* Extract 10th frame into separate object (with inheritance?)

### User Stories

Reminder to produce stories came from [Freya](https://github.com/fbl11) when discussing the challenge during planning stages.
```
As a player,
So that I can keep a record of my scores,
I want to be able to add a score for a roll.
```
```
As a player,
So that I don't need to remember how well I am doing,
I want to see a record of my previous rolls.
```
```
As a player,
So that I know how long I have been playing,
I want to see the number of frames I have rolled.
```
```
As a player,
So that I know how long I have left,
I want to see how many frames are in the game.
```
```
As a player,
So that I know how I am doing,
I want to see my total.
```
```
As a player,
So that my scores are correct,
I want to be notified when I put too high a score in.
```
```
As a good player,
So that my score calculates correctly,
I want to see bonus points added for a spare.
```
```
As a good player,
So that my score calculates correctly,
I want to see bonus points added for a strike.
```
```
As a good player,
So that my score calculates correctly,
I want to be able to add an extra roll score after a spare or strike in the 10th frame.
```
```
As an excellent player,
So that I can show off to my friends,
I want to be able to score a perfect game and have the app confirm it.
```

## Built With

* [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript) - Logic
* [HTML](https://www.w3schools.com/html/) - Webpage Layout
* [CSS](https://www.w3schools.com/css/) - Webpage Styling
* [JQuery](https://jquery.com/) - Web Framework Used
* [Jasmine](https://jasmine.github.io/) - Testing Suite
* [Jasmine-Matchers](https://github.com/JamieMason/Jasmine-Matchers) - Custom Jasmine Matcher Library
* [ESLint](https://eslint.org/) - JavaScipt Linter

## Authors

**Patrick Harris** - Main Author - [TinyGobby](https://github.com/TinyGobby)

## License

This project is licensed under the MIT License - see the [MIT.LICENSE](MIT.LICENSE) file for details

## Acknowledgments

* [Makers Academy](http://makers.tech/) - Challenge set during week 5 of Makers Apprenticeships course. See below for verbatim original specification.
* [Freya](https://github.com/fbl11)([fbl11](https://github.com/fbl11)) - Idea for User Stories -
----
## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.
