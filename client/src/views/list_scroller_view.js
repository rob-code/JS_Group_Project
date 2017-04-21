var ListScrollerView = function(scrollerElement){

this.scrollerElement = scrollerElement;

}


ListScrollerView.prototype = {

renderAdventures: function(adventures){
console.log('lets render the adventure')

// adventures.forEach(function(adventure, index){
// var option = document.createElement('option')
// // //content here 
// // option.??
// // option.??

// this.scrollerElement.addChild(option)
// }.bind(this))



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


