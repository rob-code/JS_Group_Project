var ListScrollerView = function(listElement){
  this.listElement = listElement;
  this.unlocked = false;
}

ListScrollerView.prototype = {

  renderAdventures: function(adventures, showCallback){

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
        showCallback(adventure)
      }.bind(this))

      var saveAdventure = document.createElement('div')
      saveAdventure.innerHTML = "save route";
      saveAdventure.className = "adventure-save-route";

      saveAdventure.style = "cursor: pointer"
      saveAdventure.addEventListener('click', function(){
                
        var jsonString = JSON.stringify(adventure)

        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3000/api/wishlist");

        request.setRequestHeader("Content-Type", "application/json");

        request.onload = function(){

          console.log("sending");
        };

       request.send(jsonString);
      }.bind(this))

      scrollableContainer.appendChild(wrapper)
      wrapper.appendChild(name)
      wrapper.appendChild(description)
      wrapper.appendChild(routeModeRating)
      wrapper.appendChild(review)
      wrapper.appendChild(showRoute)
      wrapper.appendChild(saveAdventure)

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
  /////////////////////////////////////////////////////////////////////////
  adventures.forEach(function(adventure, index){

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


    var editAdventure = document.createElement('div')
    editAdventure.innerHTML = "edit route";
    editAdventure.className = "adventure-edit-route";
    
////
    editAdventure.style = "cursor: pointer"
    editAdventure.addEventListener('click', function(){


      var editWrapper = document.createElement('div')
      wrapper.className = "adventure-wrapper";
      

      var editName = document.createElement('div')
      name.innerHTML = adventure.name;
      name.className = "adventure-name";

      var editDescription = document.createElement('div')
      description.innerHTML = "Description : " + adventure.description;
      description.className = "adventure-description";

      var editRouteModeRating = document.createElement('div')
      routeModeRating.innerHTML = "Route Mode : " + adventure.mode + ".  Rating : " + adventure.rating;
      routeModeRating.className = "adventure-mode-rating";

      var editReview = document.createElement('div')
      review.innerHTML = adventure.review;
      review.className = "adventure-review";


      scrollableContainer.appendChild(editWrapper)
      editWrapper.appendChild(editName)
      editWrapper.appendChild(editDescription)
      editWrapper.appendChild(editRouteModeRating)
      editWrapper.appendChild(editReview)
      
    })
////
    var removeAdventure = document.createElement('div')
    removeAdventure.innerHTML = "remove route";
    editAdventure.className = "adventure-remove-route";

    removeAdventure.style = "cursor: pointer"
    removeAdventure.addEventListener('click', function(){
      console.log("remove adventure from wishlist db")
    }.bind(this))

    scrollableContainer.appendChild(wrapper)
    wrapper.appendChild(name)
    wrapper.appendChild(description)
    wrapper.appendChild(routeModeRating)
    wrapper.appendChild(review)
    wrapper.appendChild(showRoute)
    wrapper.appendChild(editAdventure)
    wrapper.appendChild(removeAdventure)

  }.bind(this))
  /////////////////////////////foreach ends/////////////////////////////////////
},

clearNodes: function(){
  while (this.listElement.firstChild){
    this.listElement.removeChild(this.listElement.firstChild)  
  }  
}

}

module.exports = ListScrollerView


