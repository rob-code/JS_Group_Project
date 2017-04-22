var FilterView = function(filterElement){

  this.filterElement = filterElement;

  this.render();
}


FilterView.prototype = {

render: function(){

  var title = document.createElement('div')
  title.innerHTML = "Filters ";
  title.className = "filter-title";
  this.filterElement.appendChild(title)

  //make the form
  var form = document.createElement('form')
  form.method = "post";
  form.class = "filter-set";
  form.name = "filter";

  var fieldSet = document.createElement('fieldset')
  fieldSet.className = "filter-field-set"
  form.appendChild(fieldSet)

  //cycle row
  var cycleRow = document.createElement('div')
  cycleRow.className = 'form-row'

  var cycleCheckBox = document.createElement('input')
  cycleCheckBox.type = "checkbox";
  cycleCheckBox.name = "cycle";
  cycleCheckBox.value = "cycle";
  cycleCheckBox.className = "filter-input"

  var cycleLabel = document.createElement('label')
  cycleLabel.innerHTML = "Cycle"
  cycleLabel.className = "filter-label"

  cycleRow.appendChild(cycleCheckBox)
  cycleRow.appendChild(cycleLabel)
  fieldSet.appendChild(cycleRow)

  //walk row
  var walkRow = document.createElement('div')
  walkRow.className = 'form-row'

  var walkCheckBox = document.createElement('input')
  walkCheckBox.type = "checkbox";
  walkCheckBox.name = "walk";
  walkCheckBox.value = "walk";
  walkCheckBox.className = "filter-input"

  var walkLabel = document.createElement('label')
  walkLabel.innerHTML = "Walk"
  walkLabel.className = "filter-label"

  walkRow.appendChild(walkCheckBox)
  walkRow.appendChild(walkLabel)
  fieldSet.appendChild(walkRow)

  //location
  var locationRow = document.createElement('div')
  locationRow.className = 'form-row'

  var locationLabel = document.createElement('label')
  locationLabel.innerHTML = "Location"
  locationLabel.className = "filter-label"

  var locationInput = document.createElement('input')
  locationInput.type = "text";
  locationInput.name = "location";
  locationInput.className = "filter-input"

  locationRow.appendChild(locationLabel)
  locationRow.appendChild(locationInput)
  fieldSet.appendChild(locationRow)

  //distance
  var distanceRow = document.createElement('div')
  distanceRow.className = 'form-row'

  var distanceLabel = document.createElement('label')
  distanceLabel.innerHTML = "Max adventure distance (kms)"
  distanceLabel.className = "filter-label"

  var distanceInput = document.createElement('input')
  distanceInput.type = "text";
  distanceInput.name = "distance";
  distanceInput.className = "filter-input"

  distanceRow.appendChild(distanceLabel)
  distanceRow.appendChild(distanceInput)
  fieldSet.appendChild(distanceRow)







  this.filterElement.appendChild(form)


}







}

module.exports = FilterView