var FilterView = function(filterElement){

  this.filterElement = filterElement;

}


FilterView.prototype = {

render: function(callback){

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

  // //avoid roads row
  // var roadsRow = document.createElement('div')
  // roadsRow.className = 'filter-form-row'

  // var roadsCheckBox = document.createElement('input')
  // roadsCheckBox.type = "checkbox";
  // roadsCheckBox.name = "avoidRoads";
  // roadsCheckBox.className = "filter-input"

  // var roadsLabel = document.createElement('label')
  // roadsLabel.innerHTML = "Avoid roads"
  // roadsLabel.className = "filter-label"

  // roadsRow.appendChild(roadsLabel)
  // roadsRow.appendChild(roadsCheckBox)
  // fieldSet.appendChild(roadsRow)

  //name
  // var nameRow = document.createElement('div')
  // nameRow.className = 'filter-form-row-textfield'

  // var nameLabel = document.createElement('label')
  // nameLabel.innerHTML = "Name"
  // nameLabel.className = "filter-label"

  // var nameInput = document.createElement('input')
  // nameInput.type = "text";
  // nameInput.name = "name";
  // nameInput.className = "filter-input-textfield"

  // nameRow.appendChild(nameLabel)
  // nameRow.appendChild(nameInput)
  // fieldSet.appendChild(nameRow)

  // //description
  // var descriptionRow = document.createElement('div')
  // descriptionRow.className = 'filter-form-row-textfield'

  // var descriptionLabel = document.createElement('label')
  // descriptionLabel.innerHTML = "Description"
  // descriptionLabel.className = "filter-label"

  // var descriptionInput = document.createElement('input')
  // descriptionInput.type = "text";
  // descriptionInput.name = "description";
  // descriptionInput.className = "filter-input-textfield"

  // descriptionRow.appendChild(descriptionLabel)
  // descriptionRow.appendChild(descriptionInput)
  // fieldSet.appendChild(descriptionRow)


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

    if(this.cycle.checked && !this.walk.checked) {
      query.mode = 'cycling'
    }

    if(!this.cycle.checked && this.walk.checked) {
      query.mode = 'walking'
    }

    if(this.cycle.checked && this.walk.checked) {
      query.$or = "[{mode: $all 'walking'},{mode: $all 'cycling'}]"
    }


    // if(this.name.value) {
    //   query.name = this.name.value
    // }


    // if(this.description.value) {
    //   query.description = this.description.value
    // }

    console.log(query)

  //send query as the payload of an XMLHTTPRequest post


    var jsonString = JSON.stringify(query)
    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/api/adventures/filter");
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      var array = JSON.parse(request.responseText) 
      callback(array);
//      console.log("we're back...", request.responseText );
    };

   request.send(jsonString);
  })

//   

  submitRow.appendChild(submitButton)
  fieldSet.appendChild(submitRow)











  this.filterElement.appendChild(form)


}







}

module.exports = FilterView