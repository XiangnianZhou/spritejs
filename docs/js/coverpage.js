'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var showLogoText = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(text, posList) {
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var els, i, letter, x, letterEl;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              els = [];
              i = 0;

            case 2:
              if (!(i < text.length)) {
                _context.next = 14;
                break;
              }

              letter = text.charAt(i), x = posList[i];
              letterEl = new Sprite('letter-' + letter + '.png');

              letterEl.attr({ pos: [535 + x, 333] });
              if (letter === 'j') {
                letterEl.attr({ zIndex: 20 });
              }
              els.push(letterEl);
              /* eslint-disable no-await-in-loop */
              _context.next = 10;
              return wait(delay);

            case 10:
              /* eslint-enable no-await-in-loop */
              fglayer.append(letterEl);

            case 11:
              i++;
              _context.next = 2;
              break;

            case 14:
              return _context.abrupt('return', els);

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function showLogoText(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var _spritejs, Scene, Sprite, Group, Label, Path, scene, _scene$viewport, width, fglayer, wait, introText, anim, huanhuanGroup, huanhuan, huanhuanFire, fx, fy, anim2, guanguan, anim3, anim4, registerButton, githubBtn, anim5, getStartBtn, anim6, demoBtn, anim7;

  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          registerButton = function registerButton(button, link) {
            button.on('mouseenter', function (evt) {
              document.documentElement.style.cursor = 'pointer';
            });
            button.on('mouseleave', function (evt) {
              document.documentElement.style.cursor = 'default';
            });
            var btnPressDown = function btnPressDown(evt) {
              button.attr({
                bgcolor: '#1e9d5a',
                fillColor: '#fff'
              });
            };
            button.on('mouseenter', btnPressDown);
            button.on('touchstart', btnPressDown);

            var btnPressUp = function btnPressUp(evt) {
              button.attr({
                bgcolor: '',
                fillColor: '#11773d'
              });
            };

            button.on('mouseleave', btnPressUp);
            document.documentElement.addEventListener('touchend', btnPressUp);

            button.on('click', function (evt) {
              window.location.href = link;
            });
          };

          wait = function wait(ms) {
            return new Promise(function (resolve) {
              setTimeout(resolve, ms);
            });
          };

          _spritejs = spritejs, Scene = _spritejs.Scene, Sprite = _spritejs.Sprite, Group = _spritejs.Group, Label = _spritejs.Label, Path = _spritejs.Path;
          scene = new Scene('#coverpage', {
            viewport: ['auto', 'auto'],
            resolution: [1920, 1080],
            stickMode: 'width'
          });
          _scene$viewport = _slicedToArray(scene.viewport, 1), width = _scene$viewport[0];

          if (width <= 480) {
            scene.container.style.transform = 'scale(2)';
          }

          window.addEventListener('resize', function (evt) {
            var _scene$viewport2 = _slicedToArray(scene.viewport, 1),
                width = _scene$viewport2[0];

            if (width <= 480) {
              scene.container.style.transform = 'scale(2)';
            } else {
              scene.container.style.transform = '';
            }
          });

          _context2.next = 9;
          return scene.preload(['https://p5.ssl.qhimg.com/t0100238c57e97a8268.png', 'https://s1.ssl.qhres.com/static/6d5d24a08e6d6bc1.json']);

        case 9:
          fglayer = scene.layer('fglayer');
          _context2.next = 12;
          return showLogoText('spritejs', [0, 128, 250, 380, 424, 539, 643, 744], 200);

        case 12:
          introText = new Group();

          introText.attr({
            anchor: 0.5,
            pos: [1080, 540],
            size: [360, 40],
            opacity: 0
            // bgcolor: 'rgba(0, 0, 0, 0.3)',
          });
          fglayer.append(introText);[].concat(_toConsumableArray('跨平台绘图对象模型')).forEach(function (char, i) {
            var label = new Label(char);
            label.attr({
              pos: [i * 40, 0],
              font: '32px "宋体"',
              fillColor: '#fff'
            });
            introText.append(label);
          });

          anim = introText.animate([{ x: 1080, opacity: 0 }, { x: 980, opacity: 0.8 }], {
            duration: 500,
            fill: 'forwards',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          });
          _context2.next = 19;
          return anim.finished;

        case 19:
          huanhuanGroup = new Group();

          huanhuanGroup.attr({
            anchor: 0.5,
            pos: [490, 372],
            rotate: 30,
            size: [100, 160],
            opacity: 0
          });
          fglayer.append(huanhuanGroup);
          // 60, 104

          huanhuan = new Sprite('huanhuan.png');

          huanhuan.attr({
            pos: [0, 0]
          });
          huanhuanGroup.append(huanhuan);

          huanhuanFire = new Path('M0,0Q-1,12,5,36Q30,22,30,0z');

          huanhuanFire.attr({
            anchor: [0, 0],
            fillColor: '#FEE139',
            pos: [23, 100],
            lineWidth: 6,
            strokeColor: '#FB6F4A',
            zIndex: -1,
            rotate: -5
          });
          huanhuanGroup.append(huanhuanFire);

          // random burn fire
          fx = 5, fy = 6;


          fglayer.timeline.setInterval(function () {
            var deltaX = Math.floor(Math.random() * 3) - 1,
                // -1 0 1,
            deltaY = Math.floor(Math.random() * 3) - 1;

            fx += deltaX;
            if (fx < 0) fx = 0;
            if (fx > 15) fx = 15;

            fx += deltaY;
            if (fy < 0) fy = 0;
            if (fy > 20) fy = 20;

            var q1 = [-1, 12, -5 + fx, 30 + fy];
            var q2 = [30, 22, 30, 0];
            var d = 'M0,0Q' + q1 + 'Q' + q2 + 'z';
            huanhuanFire.attr({
              path: { d: d }
            });
          }, 100);

          anim2 = huanhuanGroup.animate([{ pos: [490, 372], opacity: 0 }, { pos: [520, 320], opacity: 1 }], {
            duration: 500,
            fill: 'forwards'
          });


          huanhuanGroup.on('mouseenter', function (evt) {
            huanhuan.textures = 'huanhuan2.png';
          });

          huanhuanGroup.on('mouseleave', function (evt) {
            huanhuan.textures = 'huanhuan.png';
          });

          _context2.next = 35;
          return anim2.finished;

        case 35:

          huanhuanGroup.animate([{ y: 320 }, { y: 325 }, { y: 320 }, { y: 315 }, { y: 320 }], {
            duration: 2000,
            iterations: Infinity
          });

          guanguan = new Sprite('guanguan3.png');

          guanguan.attr({
            anchor: 0.5,
            scale: [-1, 1],
            pos: [1600, 660]
          });
          fglayer.append(guanguan);

          anim3 = guanguan.animate([{ x: 1600 }, { x: 1500 }], {
            duration: 500,
            fill: 'forwards'
          });
          _context2.next = 42;
          return anim3.finished;

        case 42:
          guanguan.textures = 'guanguan1.png';

          _context2.next = 45;
          return wait(800);

        case 45:
          guanguan.textures = 'guanguan3.png';

          anim4 = guanguan.animate([{ x: 1500 }, { x: 1180 }], {
            duration: 500,
            fill: 'forwards'
          });
          _context2.next = 49;
          return anim4.finished;

        case 49:
          guanguan.textures = 'guanguan1.png';
          guanguan.attr({
            zIndex: -1,
            rotate: 20
          });

          guanguan.on('mouseenter', function (evt) {
            guanguan.textures = 'guanguan2.png';
            guanguan.attr({ rotate: 30 });
          });
          guanguan.on('mouseleave', function (evt) {
            guanguan.textures = 'guanguan1.png';
            guanguan.attr({ rotate: 20 });
          });

          githubBtn = new Label('GitHub');

          githubBtn.attr({
            anchor: [0.5, 0],
            size: [260, 60],
            border: [2, '#208b50'],
            pos: [660, 828],
            zIndex: 99999,
            borderRadius: 30,
            textAlign: 'center',
            font: '36px "宋体"',
            lineHeight: 60,
            fillColor: '#11773d',
            opacity: 0
            // bgcolor: 'red',
          });
          fglayer.append(githubBtn);
          registerButton(githubBtn, 'https://github.com/spritejs/spritejs');

          anim5 = githubBtn.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 500,
            fill: 'forwards'
          });
          _context2.next = 60;
          return anim5.finished;

        case 60:
          getStartBtn = githubBtn.cloneNode();

          getStartBtn.attr({
            text: 'Get Started',
            pos: [960, 828]
          });
          fglayer.append(getStartBtn);
          registerButton(getStartBtn, '/#/zh-cn/index');

          anim6 = getStartBtn.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 500,
            fill: 'forwards'
          });
          _context2.next = 67;
          return anim6.finished;

        case 67:
          demoBtn = githubBtn.cloneNode();

          demoBtn.attr({
            text: 'Demo',
            pos: [1260, 828]
          });
          fglayer.append(demoBtn);

          registerButton(demoBtn, '/demo');
          anim7 = demoBtn.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 500,
            fill: 'forwards'
          });
          _context2.next = 74;
          return anim7.finished;

        case 74:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
}))();