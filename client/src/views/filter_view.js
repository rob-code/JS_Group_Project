var FilterView = function(filterElement){

  this.filterElement = filterElement;

}


FilterView.prototype = {

render: function(){

  var title = document.createElement('div')
  title.innerHTML = "Filters ";
  title.className = "filter-title";
  this.filterElement.appendChild(title)

}







}

module.exports = FilterView