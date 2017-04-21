var ListScrollerView = function(scrollerElement){

  this.scrollerElement = scrollerElement;

}


ListScrollerView.prototype = {

  renderAdventures: function(adventures){

    var title = document.createElement('div')
    title.innerHTML = "Adventure List";
    title.className = "adventure-list-title";
    this.scrollerElement.appendChild(title)

    adventures.forEach(function(adventure){

      var wrapper = document.createElement('div')
      wrapper.className = "adventure-wrapper";

      var name = document.createElement('div')
      name.innerHTML = adventure.name;
      name.className = "adventure-name";

      var routeMode = document.createElement('div')
      routeMode.innerHTML = "Route Mode : " + adventure.mode;
      routeMode.className = "adventure-mode";

      this.scrollerElement.appendChild(wrapper)
      wrapper.appendChild(name)
      wrapper.appendChild(routeMode)
 
    }.bind(this))



  }


/*renderWishList: function(wishlist){
  // wishlist.forEach(function(adventure, index){
  // var option = document.createElement('option')
  // // //content here 
  // // option.??
  // // option.??

  // this.scrollerElement.addChild(option)
  // }.bind(this))

}
*/

}

module.exports = ListScrollerView


