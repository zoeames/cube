var node0 = [-100, -100, -100];
var node1 = [-100, -100,  100];
var node2 = [-100,  100, -100];
var node3 = [-100,  100,  100];
var node4 = [ 100, -100, -100];
var node5 = [ 100, -100,  100];
var node6 = [ 100,  100, -100];
var node7 = [ 100,  100,  100];
var nodes = [node0, node1, node2, node3, node4, node5, node6, node7];

var edge0  = [0, 1];
var edge1  = [1, 3];
var edge2  = [3, 2];
var edge3  = [2, 0];
var edge4  = [4, 5];
var edge5  = [5, 7];
var edge6  = [7, 6];
var edge7  = [6, 4];
var edge8  = [0, 4];
var edge9  = [1, 5];
var edge10 = [2, 6];
var edge11 = [3, 7];
var edges  = [edge0, edge1, edge2, edge3, edge4, edge5, edge6, edge7, edge8, edge9, edge10, edge11];

var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
ctx.translate(200, 200);
/*
for (var n=0; n<nodes.length; n++) {
  var node = nodes[n];
  ctx.arc(node[0],node[1],8,0,2*Math.PI);
}
*/

for (var e = 0; e < edges.length; e++) {
  var n0 = edges[e][0];
  var n1 = edges[e][1];
  var node0 = nodes[n0];
  var node1 = nodes[n1];
  //ctx.moveTo(node0[0], node0[1]);
  //ctx.lineTo(node1[0], node1[1]);
  ctx.moveTo(node0[0]+node0[2]/2, node0[1]+node0[2]/2);
  ctx.lineTo(node1[0]+node1[2]/2, node1[1]+node1[2]/2);
  ctx.stroke();
}
