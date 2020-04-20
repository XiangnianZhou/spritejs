(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{618:function(n,t,o){"use strict";o.r(t),t.default="const container = document.getElementById('paper');\nconst {Scene, Arc} = spritejs;\n\nconst scene = new Scene({\n  container,\n  displayRatio: 2,\n  // contextType: '2d',\n});\n\nconst layer = scene.layer();\ndocument.querySelector('#paper canvas').style.backgroundColor = '#eee';\n\nconst s = new Arc();\ns.attr({\n  radius: 5,\n  fillColor: 'red',\n});\n\nconst vertex = `\n  attribute vec3 a_vertexPosition;\n  attribute vec4 a_color;\n  varying vec4 vColor;\n  attribute vec3 a_transform0;\n  attribute vec3 a_transform1;\n  uniform vec2 u_resolution;\n  uniform mat3 viewMatrix;\n  uniform mat3 projectionMatrix;\n\n  attribute vec2 uv;\n  varying vec2 vUv;\n\n  highp float random(vec2 co)\n  {\n      highp float a = 12.9898;\n      highp float b = 78.233;\n      highp float c = 43758.5453;\n      highp float dt= dot(co.xy ,vec2(a,b));\n      highp float sn= mod(dt,3.14);\n      return fract(sin(sn) * c);\n  }\n\n  varying float randomDelay;\n\n  void main() {\n    gl_PointSize = 1.0;\n\n    mat3 modelMatrix = mat3(\n      a_transform0.x, a_transform1.x, 0, \n      a_transform0.y, a_transform1.y, 0,\n      a_transform0.z, a_transform1.z, 1\n    );\n\n    randomDelay = random(vec2(a_transform0.z, a_transform1.z));\n\n    vec3 pos = projectionMatrix * viewMatrix * modelMatrix * vec3(a_vertexPosition.xy, 1.0);\n    gl_Position = vec4(pos.xy, 1.0, 1.0);\n\n    vColor = a_color;\n    vUv = uv;\n  }\n`;\n\nconst fragment = `\n  precision mediump float;\n  varying vec4 vColor;\n  varying vec2 vUv;\n  uniform float u_time;\n  varying float randomDelay;\n  #define TAU 6.28\n\n  void main() {\n    float d = 2.0 * distance(vUv, vec2(0.5));\n    float time = u_time + randomDelay;\n    float r = mix(0.0, 0.5, 0.5 + 0.5 * sin(5.0 * time));\n    gl_FragColor.rgb = vColor.rgb * step(r, 1.0 - d);\n    gl_FragColor.a = d * step(r, 1.0 - d);\n  }\n`;\n\nconst program = layer.renderer.createProgram({vertex, fragment});\n\nconst count = 50000;\n\nconst cloud = new spritejs.Cloud(s, count, {buffer: count});\ncloud.setProgram(program);\n\ncloud.setUniforms({\n  u_time: 0,\n});\nlayer.append(cloud);\n\nconst {width, height} = layer.getResolution();\n\nfor(let i = 0; i < count; i++) {\n  // \u6a21\u62df\u968f\u673a\u4f4d\u7f6e\n  cloud.translate(i, [Math.random() * width, Math.random() * height]);\n}\n\nlayer.tick((t) => {\n  cloud.setUniforms({\n    u_time: t / 1000,\n  });\n});"}}]);