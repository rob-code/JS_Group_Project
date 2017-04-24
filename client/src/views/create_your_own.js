var CreateYourOwn = function(listElement){
  this.listElement = listElement;
}


CreateYourOwn.prototype = {

  renderCYO: function(){
    this.clearList();

    var start = document.createElement('div')
    start.innerHTML = "Click Map to set start point the hit save button";
    start.className = "CYO-element";
    this.listElement.appendChild(start)

  },



  clearList: function(){
    while (this.listElement.hasChildNodes()){
      this.listElement.removeChild(this.listElement.lastChild)
    }
  }
}

module.exports = CreateYourOwn;