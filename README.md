# Knight's Travails

### Overview

This project provides a solution to the "Knight's Travails" problem: Given a knight at tile A on a chessboard, how many moves does it take for the knight to reach tile B, and what is the correct path?

The solution leverages graph theory. Starting from the initial tile, the algorithm calculates all possible moves (up to 8) the knight can make. If none of these moves reach the destination, the algorithm calculates possible moves from each subsequent tile. This process repeats until the knight reaches the destination.

The webpage includes an interactive user interface, allowing users to select the knight's starting position and destination on a chessboard. The correct path is then displayed.

### Features

- Interactive chessboard UI.
- Calculates the shortest path for a knight to travel between two tiles.
- Visual representation of the path on the board.

### Deployment

Check out the live version: [Knight's Travails](https://cantarinog.github.io/top-knights-travails/).

### How It Works

1. Select the knight's starting position on the chessboard.
2. Select the destination tile.
3. The shortest path and number of moves will be displayed.
