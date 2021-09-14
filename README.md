# Node.js Random Color Generator

This application will return a random color in the command line.

## Location

The application can be found under https://replit.com/@mtslks/node-random-color-generator.

## How does it work?

The user needs to enter `bash node index.js` into the command line. This will return a block of approximately 31x9 `#` characters and the hex code of a random color (e.g. `#ff0000`) wrapped into the characters. The entire block will be colored in the matching color.

### Example

![Screen Shot 2020-09-09 at 15 53 33](https://user-images.githubusercontent.com/1935696/92607675-b56bd700-f2b4-11ea-9085-67af9369fa71.png)

By complementing the command by `hue` and/or `luminosity` as in e.g. `node index js red light` the program will generate random colors that match those choices.

- hue (e.g. green or red or blue)
- luminosity (e.g. light or dark)

### Example

![Screen Shot 2020-09-09 at 15 54 42](https://user-images.githubusercontent.com/1935696/92607766-daf8e080-f2b4-11ea-9d6d-3bd8501da443.png)

### Additional functionality "ask" to prompt user for hue and luminosity

If a user types "ask" instead of a color name, they will be prompted for color and the luminosity.
Afterwards, the application will generate the output accordingly on the user's input.
