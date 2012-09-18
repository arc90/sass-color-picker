sass-color-picker
=================

### SASS Color Picker, an Arc90 Lab Experiment.

This is a simple web page to help designers/developers visualize a subset of the SASS color functions (lighten, darken, adjust_hue).
You enter a base color, adjust the sliders to get you desired color, and the SASS functions to achieve that color are provided to you.

http://sassme.arc90.com/
http://lab.arc90.com/2012/09/18/sassme/
http://blog.arc90.com/2012/09/18/announcing-sassme/


---

### CoffeeScript Build

Right now the core color handling code is written in CoffeeScript and located in the `/coffee` directory. There is a **dependency** on `underscore.js` which is in the `/js/lib` dir. 

**Watcher:** There is a Cakefile which will run a watcher for the CoffeeScript files, you can kick this off in the root dir with:

```bash
$ cake watch
```

This will autocompile CoffeeScript into JavaScript in the `/js` dir.

**Docs:** The CoffeeScript files are documented with Docco in the `/docs` dir, just pop that open in a browser.

### Jasmine Tests

The JavaScript files are tested with Jasmine and can be found in the `/tests` dir. You can open `/tests/index.html` in your browser and all the tests _should_ pass.

### Sass/Compass

There is a reference SCSS file used to make sure functions are working correctly, this is compiled with Compass, and you can use the `$ compass watch` to watch/compile the `scss` dir. Install Compass via `$bundle install`.

---

```text
 ____                                      __     
/\  _`\                                   /\ \    
\ \,\L\_\     __      ____    ____  __  __\ \ \   
 \/_\__ \   /'__`\   /',__\  /',__\/\ \/\ \\ \ \  
   /\ \L\ \/\ \L\.\_/\__, `\/\__, `\ \ \_\ \\ \_\ 
   \ `\____\ \__/.\_\/\____/\/\____/\/`____ \\/\_\
    \/_____/\/__/\/_/\/___/  \/___/  `/___/> \\/_/
                                        /\___/    
                                        \/__/     

```

### License

MIT License, cause we like to keep it social. (LICENSE.md)

Authors:
--------

Jim Nielsen / [@jimniels](https://github.com/jimniels)  
Darren Newton / [@DarrenN](https://github.com/DarrenN)  
Robert Petro / [@robertjpetro](https://github.com/robertjpetro)  
Matt Quintanilla / [@mattq](https://github.com/mattq)  
Jesse Reiner
