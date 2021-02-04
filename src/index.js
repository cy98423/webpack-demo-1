import _ from "lodash";
import "./style.css";
import Icon from "./win.png";

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");
  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  btn.innerHTML = "Click me and check the console!";
  /*懒加载*/
  btn.onclick = (e) =>
    import(/* webpackChunkName: "print" */ "./print").then((module) => {
      var print = module.default;

      print();
    });
  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(btn);
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
