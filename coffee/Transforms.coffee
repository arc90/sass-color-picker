root = exports ? this

root.Transforms =

  #### Ligten a color
  #
  # @param **color** _String_ expects a hexadecimal  
  # @param **percentage** _Integer_ expects 0-100  
  #
  lighten : (color, percentage) ->
    hsl = color.mod
      l : color.constrain(color.lightness(), percentage, [0, 100], '+')
    color.rgb2hex(color.hsl2rgb(hsl))

  #### Darken a color
  #
  # @param **color** _String_ expects a hexadecimal  
  # @param **percentage** _Integer_ expects 0-100  
  #
  darken : (color, percentage) ->
    hsl = color.mod
      l : color.constrain(color.lightness(), percentage, [0, 100], '-')
    color.rgb2hex(color.hsl2rgb(hsl))

  #### Saturate a color
  #
  # @param **color** _String_ expects a hexadecimal  
  # @param **percentage** _Integer_ expects 0-100  
  #
  saturate : (color, percentage) ->
    hsl = color.mod
      s : color.constrain(color.saturation(), percentage, [0, 100], '+')
    color.rgb2hex(color.hsl2rgb(hsl))

  #### Desaturate a color
  #
  # @param **color** _String_ expects a hexadecimal  
  # @param **percentage** _Integer_ expects 0-100  
  #
  desaturate : (color, percentage) ->
    hsl = color.mod
      s : color.constrain(color.saturation(), percentage, [0, 100], '-')
    color.rgb2hex(color.hsl2rgb(hsl))

  #### Adjust the hue
  #
  # @param **color** _String_ expects a hexadecimal  
  # @param **degrees** _Integer_ expects 0-100  
  #
  adjust_hue : (color, degrees) ->
    hsl = color.mod
      h : color.constrain_degrees(color.hue(), degrees)
    color.rgb2hex(color.hsl2rgb(hsl))
