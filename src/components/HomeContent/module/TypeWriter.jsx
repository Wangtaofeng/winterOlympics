import "../css/typeWriter.scss"
const TypeWriter = () => {
  function loadEvent(fn) {
    var oldFn = window.onload;
    if (typeof window.onload != "function") {
      window.onload = fn;
    } else {
      window.onload = function () {
        oldFn();
        fn();
      }
    }
  }

  function getEleById(id) {
    return document.getElementById(id) || "";
  }

  (function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }());

  var Wind = (function () {

    function Wind(conf) {
      console.log(conf);
      this.type = "Wind";
      this.ele = getEleById(conf.ele);
      this.contentText = conf.contentText || "hell wind!";
      this.stepIndex = 0;
      this.stepSum = 0;
      this.init = true;
      this.timer = null;
      if (this === window) {
        return new Wind(conf);
      }
    }

    Wind.prototype = {
      run: function () {
        var s = this;

        if (!s.ele) {
          return;
        }
        if (s.init) {
          s.stepIndex = 0;
          s.stepSum = s.contentText.length;
          s.init = false;
          s.ele.innerHTML = "";
        }
        var curText = s.ele.innerHTML;

        var curChart = s.contentText.charAt(s.stepIndex);
        var nextFourChars = s.contentText.substr(s.stepIndex, 4);
        if (nextFourChars === '<BR>' || nextFourChars === '<br>') {
          curChart = '<BR>';
          s.stepIndex += 3;
        }

        curText += curChart;
        s.ele.innerHTML = curText;
        if (s.stepIndex < s.stepSum - 1) {
          s.stepIndex++;
          s.timer = requestAnimationFrame(s.run.bind(s));
        } else {
          cancelAnimationFrame(s.timer);
        }
      }
    }

    Object.defineProperty(Wind, "prototype", {
      writable: false
    })
    return Wind;

  })();


  function main() {
    var txt = getEleById("txt").innerHTML;
    var ops = {
      "ele": "Wind",
      "contentText": txt
    }
    var myWind = new Wind(ops);
    myWind.run();
  }

  loadEvent(main);
  return (
    <>
      <div className="typewriter ">
        <p className="home_about_name">关于</p>
        <p id="txt">冬季奥林匹克运动会（Olympic Winter Games），简称为冬季奥运会、冬奥会。<br></br>主要由全世界地区举行，是世界规模最大的冬季综合性运动会，每四年举办一届，1994年起与夏季奥林匹克运动会相间举行。参与国主要分布在世界各地，包括欧洲、非洲、美洲、亚洲、大洋洲。由国际奥林匹克委员会(International Olympic Committee)主办。按实际举行次数计算届数。<br></br>  1986年，国际奥委会全会决定把冬季奥运会和夏季奥运会从1994年起分开，每两年间隔举行，1992年冬季奥运会是最后一届与夏季奥运会同年举行的冬奥会。自1924年开始第1届，截至2018年共举办了23届，每四年一届。第24届冬季奥林匹克运动会于2022年02月04日至02月20日在中国北京和张家口举行。</p>
        <div id="Wind"></div>
        <div className="btn">
          <button className="button_j button1"><span>了解更多...</span></button>
        </div>
      </div>
    </>
  )
}
export default TypeWriter