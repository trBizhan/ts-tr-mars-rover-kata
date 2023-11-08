# TypeScript project Tech Returners Mars Rover Kata

- The template for this project is based on typescript and jest for TDD

## Instructions

- Run `npm install` followed by `npm test` to run the tests

## Project specificaton

The aim is to land the Rover on a plateau of shape square or rectangle.
The plateau is based on a grid of 1 unit. Each movement of the Rover is
based on one unit movement. Consider the shape of plateau to be square.

The rover has:

- coordinates
- instruction to move
  - one unit of plateau grid, Left or Right turn
- boundary
  - reaching the boundary of plateau will cause the rover to turn 180 degrees, facing opposite direction

Positon (x axis: y axis : orientation)
x = 0 to 5
y = 0 to 5
o = N | S | E | W

the wrap around: this is when the rover reaches the edge boundary then it is turned 180 degrees
the opposite orientation.

wrap around: W to E
E to W
N to S
S to N

command instruction to rover is a string with a combination of Left | Right | Move  
in the format of L | R | M
M = is one unit movement in the direction of orientation.

eg: MMM 3 move in the existing direction
LMM turn L and move two units
RM turn R and move one unit

initial start: 0:0:N bottom left corner
alternatively after startup, could be given a specific location
(e.g. x/y axis coordinates and orientation (i.e. N,E,S,W)

User Interface (UI) to be spearated from rover functions. UI module uses rover funcitons.
UI can be tailered to input string from console or a file.
TDD provides input to functions to test functionality. e.g. for command instruction
a string and the expected output showing the coordinates of Rover
(i.e. x axis: y axis : orientation (N|E|S|W))

Use TDD to test Rover funcionality and not UI

Assume plateau is 5 x 5 or n X n, a function to set plateau shape

## Wrap around conditions:

o is orientation, M is 1 unit of move, X is x axis, Y is y axis

- x=0, y=0, o='N' bottom left corner, initialised start position
- x=5, y=0 bottom right corner
- x=0, y=5 top left corner
- x=5, y=5 top right corner

- for E or W test X: if X become -ve after a M, turn to E, o = E, move 1
  unit
- if X > 5 then turn to W, o = W, move 1 unit

- for N or S test Y: if Y becomes -ve, turn to N, o = N, move 1 unit

- if Y > 5 then turn to S, o = S, move 1 unit

Option to provide coordinate setting to start rover from any location on the plateau
