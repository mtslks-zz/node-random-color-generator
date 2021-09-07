# node-random-color-generator

## Return a random color in the command line
When somebody enters a specific command in the command line, a block of approximately 31x9 # characters and of a random color (using hex code, e.g. #ff0000) should be generated. 

This is the output that needs to be generated:
```bash
node index.js
###############################
###############################
###############################
####                      #####
####        #ff0000       #####
####                      #####
###############################
###############################
###############################
```

```bash
hue – Controls the hue of the generated color. You can pass a string representing a color name: red, orange, yellow, green, blue, purple, pink and monochrome are currently supported. If you pass a hexidecimal color string such as #00FFFF, randomColor will extract its hue value and use that to generate colors.

luminosity – Controls the luminosity of the generated color. You can specify a string containing bright, light or dark.
```
```bash
// Returns a hex code for a light blue
randomColor({
   luminosity: 'light',
   hue: 'blue'
});
```
```bash
// Returns a hex code for a 'truly random' color
randomColor({
   luminosity: 'random',
   hue: 'random'
});
```


