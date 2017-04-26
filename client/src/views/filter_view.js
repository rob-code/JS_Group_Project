var FilterView = function(filterElement){

  this.filterElement = filterElement;

  this.render();
}


FilterView.prototype = {

render: function(){

  var title = document.createElement('div')
  title.innerHTML = "Search ";
  title.className = "filter-title";
  this.filterElement.appendChild(title)

  //make the form
  var form = document.createElement('form')
  form.id = "filterForm"
  form.method = "post";
  form.className = "filter-set";
  form.name = "filterForm";


  var fieldSet = document.createElement('fieldset')
  fieldSet.className = "filter-field-set"
  form.appendChild(fieldSet)

  //cycle row
  var cycleRow = document.createElement('div')
  cycleRow.className = 'filter-form-row'

  var cycleCheckBox = document.createElement('input')
  cycleCheckBox.type = "checkbox";
  cycleCheckBox.name = "cycle";
  cycleCheckBox.className = "filter-input"

  var cycleLabel = document.createElement('label')
  cycleLabel.innerHTML = "Cycle"
  cycleLabel.className = "filter-label"

  cycleRow.appendChild(cycleLabel)
  cycleRow.appendChild(cycleCheckBox)
  fieldSet.appendChild(cycleRow)

  //walk row
  var walkRow = document.createElement('div')
  walkRow.className = 'filter-form-row'

  var walkCheckBox = document.createElement('input')
  walkCheckBox.type = "checkbox";
  walkCheckBox.name = "walk";
  walkCheckBox.className = "filter-input"

  var walkLabel = document.createElement('label')
  walkLabel.innerHTML = "Walk"
  walkLabel.className = "filter-label"

  walkRow.appendChild(walkLabel)
  walkRow.appendChild(walkCheckBox)
  fieldSet.appendChild(walkRow)

  //avoid roads row
  var roadsRow = document.createElement('div')
  roadsRow.className = 'filter-form-row'

  var roadsCheckBox = document.createElement('input')
  roadsCheckBox.type = "checkbox";
  roadsCheckBox.name = "avoidRoads";
  roadsCheckBox.className = "filter-input"

  var roadsLabel = document.createElement('label')
  roadsLabel.innerHTML = "Avoid roads"
  roadsLabel.className = "filter-label"

  roadsRow.appendChild(roadsLabel)
  roadsRow.appendChild(roadsCheckBox)
  fieldSet.appendChild(roadsRow)

  //location
  var locationRow = document.createElement('div')
  locationRow.className = 'filter-form-row-textfield'

  var locationLabel = document.createElement('label')
  locationLabel.innerHTML = "Location"
  locationLabel.className = "filter-label"

  var locationInput = document.createElement('input')
  locationInput.type = "text";
  locationInput.name = "location";
  locationInput.className = "filter-input-textfield"

  locationRow.appendChild(locationLabel)
  locationRow.appendChild(locationInput)
  fieldSet.appendChild(locationRow)

  //distance
  var distanceRow = document.createElement('div')
  distanceRow.className = 'filter-form-row-textfield'

  var distanceLabel = document.createElement('label')
  distanceLabel.innerHTML = "Distance (kms)"
  distanceLabel.className = "filter-label"

  var distanceInput = document.createElement('input')
  distanceInput.type = "text";
  distanceInput.name = "distance";
  distanceInput.className = "filter-input-textfield"

  distanceRow.appendChild(distanceLabel)
  distanceRow.appendChild(distanceInput)
  fieldSet.appendChild(distanceRow)


  //clear search button
  var submitRow = document.createElement('div')
  submitRow.className = "filter-form-row-clearbutton"

  var submitButton = document.createElement('input') 
  submitButton.type = "submit";
  submitButton.name = "submit"
  submitButton.className = "filter-input-clearbutton"


  form.addEventListener('submit', function(event){

    event.preventDefault()
    var formData = new FormData(form)


    //can do it this way too
    // console.log(formData.get('cycle'))
    // if(formData.get('cycle')) console.log("cycle is checked")

    var query = {};

    if(this.cycle.checked) {
      query.cycle = this.cycle.checked
    }

    if(this.walk.checked) {
      query.walk = this.walk.checked
    }

    if(this.avoidRoads.checked) {
      query.avoidRoads = this.avoidRoads.checked
    }

    if(this.location.value) {
      query.location = this.location.value
    }


    if(this.distance.value) {
      query.distance = this.distance.value
    }


  //send query as the payload of an XMLHTTPRequest post


  //   var jsonString = JSON.stringify(query)
  //   var request = new XMLHttpRequest();
  //   request.open("GET", "http://localhost:3000/api/adventures/filter");
  //  request.setRequestHeader("Content-Type", "application/json");
  //   request.onload = function(){
  //     console.log("sending");
  //   };

  //  request.send(jsonString);
  // })

  var request = new XMLHttpRequest();  
    request.open("GET", "http://localhost:3000/api/adventures/filter/" + query);
  
    request.onload = function(){    
      if (request.status === 200){
          var jsonString = request.responseText; 
          this.itemList = JSON.parse(jsonString);
          console.log(this.itemList)

          //callback(this.itemList);
        }
      }.bind(this); 
      
      request.send();  

})

  submitRow.appendChild(submitButton)
  fieldSet.appendChild(submitRow)











  this.filterElement.appendChild(form)


}







}

module.exports = FilterView