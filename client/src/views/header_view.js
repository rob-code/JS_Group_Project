var HeaderView = function(headerElement){

  this.headerElement = headerElement
  this.adventureItem = null
  this.wishlistItem = null
  this.render()
}

HeaderView.prototype = {

  render: function(){

    var headerWrapper = document.createElement('div')
    headerWrapper.className = "header-wrapper"

    var headerViewSeparator1 = document.createElement('div')
    headerViewSeparator1.className = "header-view-item"
    headerViewSeparator1.innerHTML = " | "

    this.adventureItem = document.createElement('div')
    this.adventureItem.className = "header-view-item"
    this.adventureItem.innerHTML = "all Adventures"
    this.adventureItem.style = "cursor: pointer"

    var headerViewSeparator2 = document.createElement('div')
    headerViewSeparator2.className = "header-view-item"
    headerViewSeparator2.innerHTML = " | "

    this.wishlistItem = document.createElement('div')
    this.wishlistItem.className = "header-view-item" 
    this.wishlistItem.innerHTML = "my Adventures"
    this.wishlistItem.style = "cursor: pointer"

    var headerViewSeparator3 = document.createElement('div')
    headerViewSeparator3.className = "header-view-item"
    headerViewSeparator3.innerHTML = " | "

    headerWrapper.appendChild(headerViewSeparator1);
    headerWrapper.appendChild(this.adventureItem);
    headerWrapper.appendChild(headerViewSeparator2);
    headerWrapper.appendChild(this.wishlistItem);
    headerWrapper.appendChild(headerViewSeparator3);

    this.headerElement.appendChild(headerWrapper);

  }

}



module.exports = HeaderView