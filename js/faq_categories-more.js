var toggleSidebarCategories = $(".js-sidebar-categories-toggle");
var listOfCategories = document.querySelector(".sidebar-faq-categories-list");
var arrayOfCategories = listOfCategories.getElementsByClassName('sidebar-faq-categories-item');
var hideSidebarCategories = true;
const HOW_MUCH_CATEGORIES_SHOW = 4;

toggleSidebarCategories.on("click", function () {
	if (hideSidebarCategories) {
		hideSidebarCategories = false;
		toggleSidebarCategories.html("Hide");
		for (let i = HOW_MUCH_CATEGORIES_SHOW; i < arrayOfCategories.length; i++) {
            $(arrayOfCategories[i]).css("display", "block");
		}
	}
	else {		
		hideSidebarCategories = true;
        toggleSidebarCategories.html("More");
		for (let i = HOW_MUCH_CATEGORIES_SHOW; i < arrayOfCategories.length; i++) {
            $(arrayOfCategories[i]).css("display", "none");
		}
	}
});




