"use strict";

var toggleSidebarCategories = document.querySelector(".js-sidebar-categories-toggle");
var listOfCategories = document.querySelector(".sidebar-faq-categories-list");
var arrayOfCategories = listOfCategories.getElementsByClassName('sidebar-faq-categories-item');
var hideSidebarCategories = true;
var HOW_MUCH_CATEGORIES_SHOW = 4;

toggleSidebarCategories.addEventListener("click", function (evt) {
  evt.preventDefault();
	if (hideSidebarCategories) {		
		hideSidebarCategories = false;
		toggleSidebarCategories.innerHTML = "Hide";	
		for (var i = HOW_MUCH_CATEGORIES_SHOW; i < arrayOfCategories.length; i++) {
			var itemOfCategories = arrayOfCategories[i];
			itemOfCategories.classList.remove("js-visually-hidden");			
		}
	}
	else {		
		hideSidebarCategories = true;
		toggleSidebarCategories.innerHTML = "More";		
		for (var i = HOW_MUCH_CATEGORIES_SHOW; i < arrayOfCategories.length; i++) {
			var itemOfCategories = arrayOfCategories[i];			
			itemOfCategories.classList.add("js-visually-hidden");
		}
	}
});




