$(document).ready(function(){
  'use strict';
function countElements(value){
console.log('there are ' + $.find(value).length + ' tags of type '+ value + ' on the page');
}
countElements('span');
});
