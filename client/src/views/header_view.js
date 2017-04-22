var HeaderView = function(headerElement){

  this.headerElement = headerElement
  this.render()
}

HeaderView.prototype = {

  render: function(){

    var headerWrapper = document.createElement('div')
    headerWrapper.className = "header-wrapper"

    var headerViewSeparator1 = document.createElement('div')
    headerViewSeparator1.className = "header-view-item"
    headerViewSeparator1.innerHTML = " | "


    var adventureItem = document.createElement('div')
    adventureItem.className = "header-view-item"
    adventureItem.innerHTML = "all adventures"

    var headerViewSeparator2 = document.createElement('div')
    headerViewSeparator2.className = "header-view-item"
    headerViewSeparator2.innerHTML = " | "

    var wishlistItem = document.createElement('div')
    wishlistItem.className = "header-view-item" 
    wishlistItem.innerHTML = "myAdventures"

    var headerViewSeparator3 = document.createElement('div')
    headerViewSeparator3.className = "header-view-item"
    headerViewSeparator3.innerHTML = " | "

    headerWrapper.appendChild(headerViewSeparator1);
    headerWrapper.appendChild(adventureItem);
    headerWrapper.appendChild(headerViewSeparator2);
    headerWrapper.appendChild(wishlistItem);
    headerWrapper.appendChild(headerViewSeparator3);

    this.headerElement.appendChild(headerWrapper);

  }

}



module.exports = HeaderView