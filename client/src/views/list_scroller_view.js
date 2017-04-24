var ListScrollerView = function(listElement){
  this.listElement = listElement;
}

ListScrollerView.prototype = {

  renderAdventures: function(adventures,callback){

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

      var description = document.createElement('div')
      description.innerHTML = "Description : " + adventure.description;
      description.className = "adventure-description";

      var routeModeRating = document.createElement('div')
      routeModeRating.innerHTML = "Route Mode : " + adventure.mode + ".  Rating : " + adventure.rating;
      routeModeRating.className = "adventure-mode-rating";

      var review = document.createElement('div')
      review.innerHTML = adventure.review;
      review.className = "adventure-review";

      var showRoute = document.createElement('div')
      showRoute.innerHTML = "show route";
      showRoute.className = "adventure-show-route";

      showRoute.style = "cursor: pointer"
      showRoute.addEventListener('click', function(){
        ////refresh data  
    
        callback(adventure)

      }.bind(this))

      

      scrollableContainer.appendChild(wrapper)
      wrapper.appendChild(name)
      wrapper.appendChild(description)
      wrapper.appendChild(routeModeRating)
      wrapper.appendChild(review)
      wrapper.appendChild(showRoute)
 
    }.bind(this))
  },

renderWishlist: function(adventures, callback){

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

    var description = document.createElement('div')
    description.innerHTML = "Description : " + adventure.description;
    description.className = "adventure-description";

    var routeModeRating = document.createElement('div')
    routeModeRating.innerHTML = "Route Mode : " + adventure.mode + ".  Rating : " + adventure.rating;
    routeModeRating.className = "adventure-mode-rating";

    var review = document.createElement('div')
    review.innerHTML = adventure.review;
    review.className = "adventure-review";

    var showRoute = document.createElement('div')
    showRoute.innerHTML = "show route";
    showRoute.className = "adventure-show-route";

    showRoute.style = "cursor: pointer"
    showRoute.addEventListener('click', function(){
      callback(adventure)
    }.bind(this))

    scrollableContainer.appendChild(wrapper)
    wrapper.appendChild(name)
    wrapper.appendChild(description)
    wrapper.appendChild(routeModeRating)
    wrapper.appendChild(review)
    wrapper.appendChild(showRoute)

  }.bind(this))
},

clearNodes: function(){
  while (this.listElement.firstChild){
    this.listElement.removeChild(this.listElement.firstChild)  
  }  
}

}

module.exports = ListScrollerView


