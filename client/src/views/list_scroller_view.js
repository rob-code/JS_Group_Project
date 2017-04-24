var ListScrollerView = function(listElement){
  this.listElement = listElement;
}

ListScrollerView.prototype = {

  renderAdventures: function(adventures){

    this.clearNodes()

    var title = document.createElement('div')
    title.innerHTML = "all Adventures";
    title.className = "adventure-list-title";
    this.listElement.appendChild(title)

    var scrollableContainer = document.createElement('div')
    scrollableContainer.className = "adventure-scrollable-container";
    this.listElement.appendChild(scrollableContainer)

    adventures.forEach(function(adventure){

      var wrapper = document.createElement('div')
      wrapper.className = "adventure-wrapper";

      var name = document.createElement('div')
      name.innerHTML = adventure.name;
      name.className = "adventure-name";

      var location = document.createElement('div')
      location.innerHTML = "Start at : " + adventure.location;
      location.className = "adventure-location";

      var routeMode = document.createElement('div')
      routeMode.innerHTML = "Route Mode : " + adventure.mode;
      routeMode.className = "adventure-mode";

      scrollableContainer.appendChild(wrapper)
      wrapper.appendChild(name)
      wrapper.appendChild(location)
      wrapper.appendChild(routeMode)
 
    }.bind(this))
  },


renderWishlist: function(adventures){

  this.clearNodes();
  
  var title = document.createElement('div')
  title.innerHTML = "my Adventures";
  title.className = "adventure-list-title";
  this.listElement.appendChild(title)

  var scrollableContainer = document.createElement('div')
  scrollableContainer.className = "adventure-scrollable-container";
  this.listElement.appendChild(scrollableContainer)

  adventures.forEach(function(adventure){

    var wrapper = document.createElement('div')
    wrapper.className = "adventure-wrapper";

    var name = document.createElement('div')
    name.innerHTML = adventure.name;
    name.className = "adventure-name";

    var location = document.createElement('div')
    location.innerHTML = "Start at : " + adventure.location;
    location.className = "adventure-location";

    var routeMode = document.createElement('div')
    routeMode.innerHTML = "Route Mode : " + adventure.mode;
    routeMode.className = "adventure-mode";

    scrollableContainer.appendChild(wrapper)
    wrapper.appendChild(name)
    wrapper.appendChild(location)
    wrapper.appendChild(routeMode)

  }.bind(this))
},

clearNodes: function(){
  while (this.listElement.firstChild){
    this.listElement.removeChild(this.listElement.firstChild)  
  }  
}

}

module.exports = ListScrollerView


