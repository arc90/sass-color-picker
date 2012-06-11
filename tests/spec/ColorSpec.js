describe("Color", function() {
  var color;

  beforeEach(function() {
    color = new Color("#003399"); // Reference Color
  });

  it("should have a hex color", function() {
    expect(color.hex).toEqual("#003399");
  });

  it("should have an RGB representation", function() {
    expect(color.rgb).toEqual({r: 0, g: 51, b: 153});
  });

  it("should have an HSL representation", function() {
    expect(color.hsl).toEqual({h: 220, s: 100, l: 30});
  });

  it("should be able to convert HSL to RGB", function() {
    expect(color.hsl2rgb(color.hsl)).toEqual({r: 0, g: 51, b: 153});
  });

  it("should be able to convert RGB to HSL", function() {
    expect(color.rgb2hsl(color.rgb)).toEqual({h: 220, s: 100, l: 30});
  });

  it("should be able to convert from hex to RGB to hex", function() {
    expect(color.rgb2hex(color.rgb)).toEqual("#003399");
  });

  it("should be able to convert from hex to HSL to hex", function() {
    expect(color.hsl2hex(color.hsl)).toEqual("#003399");
  });

  it("should be able to constrain a number between values", function() {
    expect(color.constrain(color.blue(), 20, [0, 255], '+')).toEqual(173);
    expect(color.constrain(color.blue(), 200, [0, 255], '+')).toEqual(255);
    expect(color.constrain(color.blue(), 200, [0, 255], '-')).toEqual(0);
    expect(color.constrain(color.hue(), -20, [-360, 360], '+')).toEqual(200);
    expect(color.constrain(color.hue(), -400, [-360, 360], '+')).toEqual(180);
    expect(color.constrain(color.hue(), 400, [-360, 360], '+')).toEqual(360);
    expect(color.constrain(color.hue(), -220, [-360, 360], '+')).toEqual(0);
  });

  it("should be able to modify an RGB value (r: 20)", function() {
    expect(color.mod({r : 20})).toEqual({r : 20, g : 51, b : 153});
  });

  it("should be able to modify an HSL value (h: 180, l: 20)", function() {
    expect(color.mod({h : 180, l: 20})).toEqual({h : 180, s : 100, l : 20});
  });

  it("should NOT be able to modify an HSL value with an empty param ({h: null})", function() {
    expect(color.mod({h : null})).toEqual({h : 220, s : 100, l : 30});
  });

  it("should NOT be able to modify an HSL and RGB value at the same time (null)", function() {
    expect(color.mod({h : 100, r: 30})).toBeNull();
  });

});

describe("Transforms", function() {
  var color, transforms;

  describe("Lighten", function() {
    var color, transforms;

    beforeEach(function() {
      color = new Color("#003399"); // Reference Color
    });

    it("should lighten a color by 20% (#0055ff)", function() {
      expect(Transforms.lighten(color, 20)).toEqual('#0055ff');
    });

    it("should lighten a color by 50% (#99bbff)", function() {
      expect(Transforms.lighten(color, 50)).toEqual('#99bbff');
    });

    it("should lighten a color to white due to 100% (#ffffff)", function() {
      expect(Transforms.lighten(color, 100)).toEqual('#ffffff');
    });

    it("should NOT lighten a color due to 0% (#003399)", function() {
      expect(Transforms.lighten(color, 0)).toEqual('#003399');
    });

    it("should darken a color due to a negative percent -10% (#002266)", function() {
      expect(Transforms.lighten(color, -10)).toEqual('#002266');
    });

    it("should lighten #ff0000 by 20% (#ff6666)", function() {
      expect(Transforms.lighten(new Color("#ff0000"), 20)).toEqual('#ff6666');
    });
  })

  describe("Darken", function() {
    var color, transforms;
    
    beforeEach(function() {
      color = new Color("#003399"); // Reference Color
    });

    it("should darken a color by 20% (#001133)", function() {
      expect(Transforms.darken(color, 20)).toEqual('#001133');
    });

    it("should darken a color to black by reducing to 0 with 30% (#000000)", function() {
      expect(Transforms.darken(color, 30)).toEqual('#000000');
    });

    it("should darken a color to black by using a crazy value like 200% (#000000)", function() {
      expect(Transforms.darken(color, 200)).toEqual('#000000');
    });

    it("should NOT darken a color due to 0% (#003399)", function() {
      expect(Transforms.darken(color, 0)).toEqual('#003399');
    });

    it("should lighten a color due to using a negative value of -5% (#003bb3)", function() {
      expect(Transforms.darken(color, -5)).toEqual('#003bb3');
    });
  })

  describe("Saturate/Desaturate", function() {
    var color, transforms;
    
    beforeEach(function() {
      color = new Color("#003399"); // Reference Color
    });

    it("should desaturate a color by 50% (#264073)", function() {
      expect(Transforms.desaturate(color, 50)).toEqual('#264073');
    });

    it("should saturate a color by 50% to 100% (#264073 -> #003399)", function() {
      expect(Transforms.saturate(new Color('#264073'), 50)).toEqual('#003399');
    });

  })

  describe("Adjust Hue", function() {
    var color, transforms;
    
    beforeEach(function() {
      color = new Color("#003399"); // Reference Color
    });

    it("should rotate hue by 10deg (#003399 -> #001A99)", function() {
      expect(Transforms.adjust_hue(color, 10)).toEqual('#001a99');
    });

    it("should rotate hue by 140deg (#003399 -> #990000)", function() {
      expect(Transforms.adjust_hue(color, 140)).toEqual('#990000');
    });

    it("should rotate hue by -220deg (#003399 -> #990000)", function() {
      expect(Transforms.adjust_hue(color, -220)).toEqual('#990000');
    });

    it("should rotate hue by 360deg (#003399 -> #003399)", function() {
      expect(Transforms.adjust_hue(color, 360)).toEqual('#003399');
    });

    it("should rotate hue by 360deg (#003399 -> #996600)", function() {
      expect(Transforms.adjust_hue(color, 540)).toEqual('#996600');
    });
  })

});