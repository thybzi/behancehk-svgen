function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (center, duration, height, lines, undefined, width) {
var canvasWidth = width
var canvasHeight = height
var canvasCenterX = canvasWidth / 2
var canvasCenterY = canvasHeight / 2
var animatedLines = [];
var animatedLinesClassnames = [];
lines.forEach(function (lineItem, i) {
  var classname = 'line' + (i + 1);
  lines[i].push(classname);
  if (typeof lineItem[1] === 'number') {
    animatedLines.push([classname, lineItem[1]]);
    animatedLinesClassnames.push(classname);
  }
});

jade_mixins["drawLines"] = jade_interp = function(beginPoint, endPoint, count, classname){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var rotateStep = 360 / count
for (var i = 0; i < count; i++)
buf.push("<g" + (jade.attr("transform", 'rotate(' + (i * rotateStep) + ', ' + canvasCenterX + ', ' + canvasCenterY + ')', true, false)) + "><line" + (jade.attr("x1", canvasCenterX, true, false)) + (jade.attr("y1", (canvasCenterY + beginPoint), true, false)) + (jade.attr("x2", canvasCenterX, true, false)) + (jade.attr("y2", (canvasCenterY + endPoint), true, false)) + (jade.cls([classname], [true])) + "/></g>");
};
buf.push("<svg" + (jade.attr("width", canvasWidth, true, false)) + (jade.attr("height", canvasHeight, true, false)) + " version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><style>line {\n  stroke: #0057ff;\n  stroke-width: 1px;\n  -webkit-transform-origin: 50% 50%;\n  transform-origin: 50% 50%;\n}\n@-webkit-keyframes rotation {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  33%, 100% {\n    -webkit-transform: rotate(180deg);\n  }\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  33%, 100% {\n    transform: rotate(180deg);\n  }\n}\n." + (jade.escape((jade_interp = animatedLinesClassnames.join(', .')) == null ? '' : jade_interp)) + " {\n  /* Safari */\n  -webkit-animation-name: rotation;\n  -webkit-animation-duration: " + (jade.escape((jade_interp = duration) == null ? '' : jade_interp)) + "ms;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  /* Chrome, IE, Firefox */\n  animation-name: rotation;\n  animation-duration: " + (jade.escape((jade_interp = duration) == null ? '' : jade_interp)) + "ms;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}");
// iterate animatedLines
;(function(){
  var $$obj = animatedLines;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var lineItem = $$obj[$index];

buf.push("." + (jade.escape((jade_interp = lineItem[0]) == null ? '' : jade_interp)) + " {\n  -webkit-animation-delay: " + (jade.escape((jade_interp = lineItem[1]) == null ? '' : jade_interp)) + "ms;\n  animation-delay: " + (jade.escape((jade_interp = lineItem[1]) == null ? '' : jade_interp)) + "ms;\n}");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var lineItem = $$obj[$index];

buf.push("." + (jade.escape((jade_interp = lineItem[0]) == null ? '' : jade_interp)) + " {\n  -webkit-animation-delay: " + (jade.escape((jade_interp = lineItem[1]) == null ? '' : jade_interp)) + "ms;\n  animation-delay: " + (jade.escape((jade_interp = lineItem[1]) == null ? '' : jade_interp)) + "ms;\n}");
    }

  }
}).call(this);

buf.push("</style>");
var beginPoint = center
var endPoint
// iterate lines
;(function(){
  var $$obj = lines;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var lineItem = $$obj[$index];

if ( lineItem[2])
{
endPoint = beginPoint + lineItem[0]
jade_mixins["drawLines"](beginPoint, endPoint, lineItem[2], lineItem[3]);
beginPoint = endPoint
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var lineItem = $$obj[$index];

if ( lineItem[2])
{
endPoint = beginPoint + lineItem[0]
jade_mixins["drawLines"](beginPoint, endPoint, lineItem[2], lineItem[3]);
beginPoint = endPoint
}
    }

  }
}).call(this);

buf.push("</svg>");}.call(this,"center" in locals_for_with?locals_for_with.center:typeof center!=="undefined"?center:undefined,"duration" in locals_for_with?locals_for_with.duration:typeof duration!=="undefined"?duration:undefined,"height" in locals_for_with?locals_for_with.height:typeof height!=="undefined"?height:undefined,"lines" in locals_for_with?locals_for_with.lines:typeof lines!=="undefined"?lines:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"width" in locals_for_with?locals_for_with.width:typeof width!=="undefined"?width:undefined));;return buf.join("");
}