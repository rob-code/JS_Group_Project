


var ListScrollerView = function(listElement){
  this.listElement = listElement;
  this.adventures = []


}

ListScrollerView.prototype = {

  renderAdventures: function(adventures, showCallback){
    this.adventures = adventures;
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

      var adventureRouteWrapper = document.createElement('div')
      adventureRouteWrapper.className = "adventure-route-wrapper";

      var showRoute = document.createElement('div')
      showRoute.innerHTML = "show route";
      showRoute.className = "adventure-route-action";

      showRoute.style = "cursor: pointer"
      showRoute.addEventListener('click', function(){    
        showCallback(adventure)
      }.bind(this))

      var saveAdventure = document.createElement('div')
      saveAdventure.innerHTML = "save route";
      saveAdventure.className = "adventure-route-action";

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

      adventureRouteWrapper.appendChild(showRoute)
      adventureRouteWrapper.appendChild(saveAdventure)

      scrollableContainer.appendChild(wrapper)
      wrapper.appendChild(name)
      wrapper.appendChild(description)
      wrapper.appendChild(routeModeRating)
      wrapper.appendChild(review)
      wrapper.appendChild(adventureRouteWrapper)

    }.bind(this))
  },

renderWishlist: function(adventures,deleteCallback ,callback){

  this.clearNodes();
  
  var title = document.createElement('div')
  title.innerHTML = "my Adventures";
  title.className = "adventure-list-title";
  this.listElement.appendChild(title)

  var scrollableContainer = document.createElement('div')
  scrollableContainer.className = "adventure-scrollable-container";
  this.listElement.appendChild(scrollableContainer)
  /////////////////////////////////////////////////////////////////////////
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

    var adventureRouteWrapper = document.createElement('div')
    adventureRouteWrapper.className = "adventure-route-wrapper";

    var showRoute = document.createElement('div')
    showRoute.innerHTML = "show route";
    showRoute.className = "adventure-route-action";

    showRoute.style = "cursor: pointer"
    showRoute.addEventListener('click', function(){
      callback(adventure)
    }.bind(this))

    var editAdventure = document.createElement('div')
    editAdventure.innerHTML = "edit route";

    editAdventure.className = "adventure-route-action";
    editAdventure.style = "cursor: pointer"
    editAdventure.addEventListener('click', function(event){

      this.renderEditView(adventure);
     
      
    }.bind(this))
////
    var removeAdventure = document.createElement('div')
    removeAdventure.innerHTML = "remove route";
    removeAdventure.className = "adventure-route-action";

    removeAdventure.style = "cursor: pointer"
    removeAdventure.addEventListener('click', function(){


      deleteCallback(adventure)
      // var xmlHttp = new XMLHttpRequest();
      // xmlHttp.open( "DELETE", 'http://localhost:3000/api/wishlist/'+ adventure._id, false );
      // xmlHttp.send( null );
      


      console.log("remove adventure from wishlist db")
    }.bind(this))


    adventureRouteWrapper.appendChild(editAdventure)
    adventureRouteWrapper.appendChild(showRoute)
    adventureRouteWrapper.appendChild(removeAdventure)


    scrollableContainer.appendChild(wrapper)
    wrapper.appendChild(name)
    wrapper.appendChild(description)
    wrapper.appendChild(routeModeRating)
    wrapper.appendChild(review)
    wrapper.appendChild(adventureRouteWrapper)

  }.bind(this))
  /////////////////////////////foreach ends/////////////////////////////////////
},

clearNodes: function(){
  while (this.listElement.firstChild){
    this.listElement.removeChild(this.listElement.firstChild)  
  }  
},
  
  renderEditView: function(adventure){
    this.clearNodes()

    console.log(adventure)
    console.log(adventure.name)

    var scrollableContainer = document.createElement('div')
    scrollableContainer.className = "adventure-scrollable-container";
    this.listElement.appendChild(scrollableContainer)

    var editWrapper = document.createElement('form')
    editWrapper.label = ""
    editWrapper.setAttribute('method','PUT')
    editWrapper.setAttribute('action','submit')
    editWrapper.className = "edit-adventure-wrapper";

    var editNameWrapper = document.createElement('div')

    var editNameLabel = document.createElement('label');
    editNameLabel.innerText = "Name: "
    editNameLabel.className = "edit-label-name"
    editNameLabel.htmlFor = 'edit-adventure-name'
    
    var editName = document.createElement('input')
    editName.label = "Adventure Name : "
    editName.value = adventure.name
    editName.type = "text";
    editName.name = 'name'
    editName.id = "edit-adventure-name";

    editNameWrapper.appendChild(editNameLabel);
    editNameWrapper.appendChild(editName);

    var editDiscriptionWrapper = document.createElement('div')

    var editDescription = document.createElement('input')
    editDescription.value = adventure.description;
    editDescription.type = "text";
    editDescription.name = "description"
    editDescription.id = "edit-adventure-description";

    var editDescriptionLabel = document.createElement('label');
    editDescriptionLabel.innerText = "Discription: "
    editDescriptionLabel.id = "edit-label-discription" 
    editDescriptionLabel.htmlFor = "edit-adventure-description"

    editDiscriptionWrapper.appendChild(editDescriptionLabel);
    editDiscriptionWrapper.appendChild(editDescription);

    var editRouteRatingWrapper = document.createElement('div')
    editRouteRatingWrapper.id = 'edit-route-rating-wrapper'

    var editRouteRatingLabel = document.createElement('label')
    editRouteRatingLabel.innerText = "Rating: "
    editRouteRatingLabel.id = "edit-route-rating-label: "
    editRouteRatingLabel.htmlFor = "edit-adventure-route-rating"

    var editRouteRating = document.createElement('input')
    editRouteRating.type = "number";
    editRouteRating.value = adventure.rating
    editRouteRating.name = "rating"
    editRouteRating.id = "edit-adventure-route-rating";

    editRouteRatingWrapper.appendChild(editRouteRatingLabel);
    editRouteRatingWrapper.appendChild(editRouteRating);

    var editModeWrapper = document.createElement('div');
    editModeWrapper.id = 'edit-mode-wrapper'

    var editModeLabel = document.createElement('label')
    editModeLabel.id = 'edit-mode-label'
    editModeLabel.innerText = "Mode: "
    editModeLabel.htmlFor = "edit-adventure-mode"

    var editMode = document.createElement('input');
    editMode.type = "text";
    editMode.value = adventure.mode;
    editMode.name ="mode"
    editMode.id = "edit-adventure-mode";

    editModeWrapper.appendChild(editModeLabel);
    editModeWrapper.appendChild(editMode)

    var editReviewWrapper = document.createElement('div')
    editReviewWrapper.id = 'edit-review-wrapper'

    var editReviewLabel = document.createElement('label')
    editReviewLabel.id = 'edit-review-label'
    editReviewLabel.htmlFor = 'edit-adventure-review'
    editReviewLabel.innerText = "Review: "

    var editReview = document.createElement('input')
    editReview.type = "text";
    editReview.value = adventure.review
    editReview.name = 'review'
    editReview.id = "edit-adventure-review";

    editReviewWrapper.appendChild(editReviewLabel);
    editReviewWrapper.appendChild(editReview);

    var submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Submit";
    submit.id ="submit"

    
    scrollableContainer.appendChild(editWrapper)
    editWrapper.appendChild(editNameWrapper)
    editWrapper.appendChild(editDiscriptionWrapper)
    editWrapper.appendChild(editRouteRatingWrapper)
    editWrapper.appendChild(editModeWrapper)
    editWrapper.appendChild(editReviewWrapper)
    editWrapper.appendChild(submit)

    var editedAdventure = {};

    editWrapper.addEventListener("submit", function (event) {
      event.preventDefault();

      var formData = new FormData(editWrapper);
      
      editedAdventure.name = formData.get('name')
      editedAdventure.description =formData.get('description')
      editedAdventure.rating =formData.get('rating')
      editedAdventure.mode = formData.get('mode')
      editedAdventure.review = formData.get('review')

      console.log(editedAdventure)
      
        var jsonString = JSON.stringify(editedAdventure)

        var request = new XMLHttpRequest();
        request.open("PUT", "http://localhost:3000/api/wishlist/" + adventure._id);
        request.onload = function(){
        this.renderWishlist(this.adventures)  
        }.bind(this)
        request.setRequestHeader("Content-Type", "application/json");
        request.send(jsonString);

     

    }.bind(this))

  }
}



module.exports = ListScrollerView;


