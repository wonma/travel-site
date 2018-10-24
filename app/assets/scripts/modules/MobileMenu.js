import $ from 'jquery';

class MobileMenu {

	constructor(){
		this.menuIcon = $(".site-header__menu-icon");
		this.events();
		this.menuContent = $(".site-header__menu-content");
		this.siteHeader = $(".site-header");
	}


	events(){
		this.menuIcon.click(this.toggleMenuContent.bind(this));
	}

	toggleMenuContent(){
		this.menuContent.toggleClass("site-header__menu-content--visible");
		this.siteHeader.toggleClass("site-header--blue");
		this.menuIcon.toggleClass("site-header__menu-icon--close");
	}
}



export default MobileMenu;