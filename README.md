sass-color-picker
=================

### SASS Color Picker, an Arc90 Lab Experiment.

---

### (Coffee|Java)Script Build

Right now the core color handling code is written in CoffeeScript and located in the `/coffee` directory. There is a **dependency** on `underscore.js` which is in the `/js/lib` dir. 

**Wathcer:** There is a Cakefile which will run a watcher for the CoffeeScript files, you can kick this off in the root dir with:

```bash
$ cake watch
```

This will autocompile CoffeeScript into JavaScript in the `/js` dir.

**Docs:** The CoffeeScript files are documented with Docce in the `/docs` dir, just pop that open in a browser.

### Jasmine Tests

The JavaScript files are tested with Jasmine and can be found in the `/tests` dir. You can open `/tests/SpecRunner.html` in your browser and all the tests should pass.

### Sass/Compass

There is a reference SCSS file I use to make sure functions are working correctly, this is compiled with sass, and you can use the `$ compass watch` to track the `scss` dir.

### Bobo Tests

A really ugly hack (but it works) of the sliders at work can be seen in `/test.html`

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

