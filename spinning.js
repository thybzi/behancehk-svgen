function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (durationRatio, durationTotal, easing, height, linecolor, lines, linewidth, undefined, width) {
var canvasWidth = width
var canvasHeight = height
var canvasCenterX = canvasWidth / 2
var canvasCenterY = canvasHeight / 2
var animatedLines = [];
var animatedClassnames = [];
var animatedLinesClassnames = [];
var animatedGroupsClassnames = [];
lines.forEach(function (lineItem, i) {
  var ordinal = i + 1;
  var lineClassname = 'line' + ordinal;
  var groupClassname = 'group' + ordinal;
  lines[i].lineClassname = lineClassname;
  lines[i].groupClassname = groupClassname;
  if (typeof lineItem.delay === 'number') {
    animatedLines.push({lineClassname: lineClassname, groupClassname: groupClassname, delay: lineItem.delay});
    animatedLinesClassnames.push(lineClassname);
    animatedGroupsClassnames.push(groupClassname);
    animatedClassnames.push(lineClassname);
    animatedClassnames.push(groupClassname);
  }
});

jade_mixins["drawLines"] = jade_interp = function(beginPoint, endPoint, count, lineClassname, groupClassname){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var rotateStep = 360 / count
var classlist
buf.push("<g" + (jade.cls([groupClassname], [true])) + ">");
for (var i = 0; i < count; i++)
{
classlist = lineClassname + ' ' + ((i % 2) ? 'ccw' : 'cw')
buf.push("<g" + (jade.attr("transform", 'rotate(' + (i * rotateStep) + ', ' + canvasCenterX + ', ' + canvasCenterY + ')', true, false)) + "><line" + (jade.attr("x1", canvasCenterX, true, false)) + (jade.attr("y1", (canvasCenterY + beginPoint), true, false)) + (jade.attr("x2", canvasCenterX, true, false)) + (jade.attr("y2", (canvasCenterY + endPoint), true, false)) + (jade.cls([classlist], [true])) + "/></g>");
}
buf.push("</g>");
};
buf.push("<svg" + (jade.attr("width", canvasWidth, true, false)) + (jade.attr("height", canvasHeight, true, false)) + " version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><style>line {\n  stroke: " + (jade.escape((jade_interp = linecolor) == null ? '' : jade_interp)) + ";\n  stroke-width: " + (jade.escape((jade_interp = linewidth) == null ? '' : jade_interp)) + "px;\n}\nline, g {\n  -webkit-transform-origin: 50% 50%;\n  transform-origin: 50% 50%;\n}\n@-webkit-keyframes rotate-ccw {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  " + (jade.escape((jade_interp = durationRatio) == null ? '' : jade_interp)) + "%, 100% {\n    -webkit-transform: rotate(180deg);\n  }\n}\n@keyframes rotate-ccw {\n  0% {\n    transform: rotate(0deg);\n  }\n  " + (jade.escape((jade_interp = durationRatio) == null ? '' : jade_interp)) + "%, 100% {\n    transform: rotate(180deg);\n  }\n}\n@-webkit-keyframes rotate-cw {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  " + (jade.escape((jade_interp = durationRatio) == null ? '' : jade_interp)) + "%, 100% {\n    -webkit-transform: rotate(-180deg);\n  }\n}\n@keyframes rotate-cw {\n  0% {\n    transform: rotate(0deg);\n  }\n  " + (jade.escape((jade_interp = durationRatio) == null ? '' : jade_interp)) + "%, 100% {\n    transform: rotate(-180deg);\n  }\n}\n@-webkit-keyframes shift-cw {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  " + (jade.escape((jade_interp = durationRatio) == null ? '' : jade_interp)) + "%, 100% {\n    -webkit-transform: rotate(-" + (jade.escape((jade_interp = 360 / 32) == null ? '' : jade_interp)) + "deg);\n  }\n}\n@keyframes shift-cw {\n  0% {\n    transform: rotate(0deg);\n  }\n  " + (jade.escape((jade_interp = durationRatio) == null ? '' : jade_interp)) + "%, 100% {\n    transform: rotate(-" + (jade.escape((jade_interp = 360 / 32) == null ? '' : jade_interp)) + "deg);\n  }\n}\n." + (jade.escape((jade_interp = animatedClassnames.join(', .')) == null ? '' : jade_interp)) + " {\n  /* Safari */\n  -webkit-animation-duration: " + (jade.escape((jade_interp = durationTotal) == null ? '' : jade_interp)) + "ms;\n  -webkit-animation-timing-function: " + (jade.escape((jade_interp = easing) == null ? '' : jade_interp)) + ";\n  -webkit-animation-iteration-count: infinite;\n  /* Chrome, IE, Firefox */\n  animation-duration: " + (jade.escape((jade_interp = durationTotal) == null ? '' : jade_interp)) + "ms;\n  animation-timing-function: " + (jade.escape((jade_interp = easing) == null ? '' : jade_interp)) + ";\n  animation-iteration-count: infinite;\n}\n." + (jade.escape((jade_interp = animatedLinesClassnames.join('.ccw, .')) == null ? '' : jade_interp)) + ".ccw {\n  /* Safari */\n  -webkit-animation-name: rotate-ccw;\n  /* Chrome, IE, Firefox */\n  animation-name: rotate-ccw;\n}\n." + (jade.escape((jade_interp = animatedLinesClassnames.join('.cw, .')) == null ? '' : jade_interp)) + ".cw {\n  /* Safari */\n  -webkit-animation-name: rotate-cw;\n  /* Chrome, IE, Firefox */\n  animation-name: rotate-cw;\n}\n." + (jade.escape((jade_interp = animatedGroupsClassnames.join(', .')) == null ? '' : jade_interp)) + " {\n  /* Safari */\n  -webkit-animation-name: shift-cw;\n  /* Chrome, IE, Firefox */\n  animation-name: shift-cw;\n}");
// iterate animatedLines
;(function(){
  var $$obj = animatedLines;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var lineItem = $$obj[$index];

buf.push("." + (jade.escape((jade_interp = lineItem.lineClassname) == null ? '' : jade_interp)) + " {\n  -webkit-animation-delay: " + (jade.escape((jade_interp = lineItem.delay) == null ? '' : jade_interp)) + "ms;\n  animation-delay: " + (jade.escape((jade_interp = lineItem.delay) == null ? '' : jade_interp)) + "ms;\n}\n." + (jade.escape((jade_interp = lineItem.groupClassname) == null ? '' : jade_interp)) + " {\n  -webkit-animation-delay: " + (jade.escape((jade_interp = lineItem.delay) == null ? '' : jade_interp)) + "ms;\n  animation-delay: " + (jade.escape((jade_interp = lineItem.delay) == null ? '' : jade_interp)) + "ms;\n}");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var lineItem = $$obj[$index];

buf.push("." + (jade.escape((jade_interp = lineItem.lineClassname) == null ? '' : jade_interp)) + " {\n  -webkit-animation-delay: " + (jade.escape((jade_interp = lineItem.delay) == null ? '' : jade_interp)) + "ms;\n  animation-delay: " + (jade.escape((jade_interp = lineItem.delay) == null ? '' : jade_interp)) + "ms;\n}\n." + (jade.escape((jade_interp = lineItem.groupClassname) == null ? '' : jade_interp)) + " {\n  -webkit-animation-delay: " + (jade.escape((jade_interp = lineItem.delay) == null ? '' : jade_interp)) + "ms;\n  animation-delay: " + (jade.escape((jade_interp = lineItem.delay) == null ? '' : jade_interp)) + "ms;\n}");
    }

  }
}).call(this);

buf.push("</style>");
var beginPoint = 0
var endPoint
// iterate lines
;(function(){
  var $$obj = lines;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var lineItem = $$obj[$index];

if ( lineItem.count)
{
beginPoint += (lineItem.gap || 0)
endPoint = beginPoint + lineItem.length
jade_mixins["drawLines"](beginPoint, endPoint, lineItem.count, lineItem.lineClassname, lineItem.groupClassname);
beginPoint = endPoint
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var lineItem = $$obj[$index];

if ( lineItem.count)
{
beginPoint += (lineItem.gap || 0)
endPoint = beginPoint + lineItem.length
jade_mixins["drawLines"](beginPoint, endPoint, lineItem.count, lineItem.lineClassname, lineItem.groupClassname);
beginPoint = endPoint
}
    }

  }
}).call(this);

buf.push("</svg>");}.call(this,"durationRatio" in locals_for_with?locals_for_with.durationRatio:typeof durationRatio!=="undefined"?durationRatio:undefined,"durationTotal" in locals_for_with?locals_for_with.durationTotal:typeof durationTotal!=="undefined"?durationTotal:undefined,"easing" in locals_for_with?locals_for_with.easing:typeof easing!=="undefined"?easing:undefined,"height" in locals_for_with?locals_for_with.height:typeof height!=="undefined"?height:undefined,"linecolor" in locals_for_with?locals_for_with.linecolor:typeof linecolor!=="undefined"?linecolor:undefined,"lines" in locals_for_with?locals_for_with.lines:typeof lines!=="undefined"?lines:undefined,"linewidth" in locals_for_with?locals_for_with.linewidth:typeof linewidth!=="undefined"?linewidth:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"width" in locals_for_with?locals_for_with.width:typeof width!=="undefined"?width:undefined));;return buf.join("");
}