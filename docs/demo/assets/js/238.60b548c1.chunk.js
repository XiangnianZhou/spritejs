(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{750:function(n,e,r){"use strict";r.r(e),e.default="const vertex = `\nattribute vec3 a_vertexPosition;\nattribute vec4 a_color;\nvarying vec4 vColor;\n\nuniform mat3 viewMatrix;\nuniform mat3 projectionMatrix;\n\nvoid main() {\n  gl_PointSize = 1.0;\n  vec3 pos = projectionMatrix * viewMatrix * vec3(a_vertexPosition.xy, 1.0);\n  gl_Position = vec4(pos.xy, 1.0, 1.0);\n  vColor = a_color;\n}\n`;\n\nconst fragment = `\nprecision mediump float;\nvarying vec4 vColor;\nuniform vec4 u_color;\nuniform vec2 u_resolution;\n#define PI2 6.2831853\n\n/**\n  \u5c06\u76f4\u89d2\u5750\u6807\u8f6c\u4e3a\u6781\u5750\u6807\n*/\nvec2 polar(vec2 st, vec2 c) {\n  vec2 p = c - st;\n  float r = length(p) * 2.0;\n  float a = atan(p.y, p.x);\n\n  return vec2(r, a);  \n}\n\n/**\n  rgb/hsb\u989c\u8272\u8f6c\u6362\n */\nvec3 rgb2hsb(vec3 c){\n  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n  float d = q.x - min(q.w, q.y);\n  float e = 1.0e-10;\n  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\n\n//  Function from I\xf1igo Quiles\n//  https://www.shadertoy.com/view/MsS3Wc\nvec3 hsb2rgb(vec3 c){\n  vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);\n  rgb = rgb * rgb * (3.0 - 2.0 * rgb);\n  return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\nvoid main() {\n  vec2 st = gl_FragCoord.xy / u_resolution;\n  // \u5c06\u76f4\u89d2\u5750\u6807\u8f6c\u6362\u6210\u6781\u5750\u6807\n  st = polar(st, vec2(0.5));\n  // \u5c06RGB\u8272\u503c\u8f6c\u6362\u6210HSB\u8272\u503c\n  vec3 c = rgb2hsb(vColor.rgb);\n  // \u6839\u636e\u6781\u5750\u6807\u503ch\u8272\u503c\n  c.x += st.y / PI2;\n  // \u5c06HSB\u8272\u503c\u8f6c\u56deRGB\u8272\u503c\n  c = hsb2rgb(c);\n  // \u663e\u793a\u989c\u8272\n  gl_FragColor = vec4(c, 1);\n}\n`;\n\nconst {Scene, Ring} = spritejs;\nconst container = document.getElementById('stage');\nconst scene = new Scene({\n  container,\n  width: 1200,\n  height: 1200,\n});\n\nconst fglayer = scene.layer('fglayer');\n\nconst program = fglayer.renderer.createProgram({vertex, fragment});\n\nconst r = new Ring({\n  radius: [150, 300],\n  pos: [600, 600],\n  fillColor: 'red',\n});\n\nconst {width, height} = fglayer.getResolution();\nr.setUniforms({\n  u_resolution: [width, height],\n});\nr.setProgram(program);\n\nfglayer.append(r);"}}]);