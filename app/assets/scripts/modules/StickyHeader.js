import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {

	constructor(){
		this.siteHeader = $(".site-header");
		this.headerTriggerPoint = $(".large-hero__text");
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createHeaderWaypoint();
		this.createSectionWaypoint();

	}

	createHeaderWaypoint(){
		var that = this;
		new Waypoint({

			element:that.headerTriggerPoint[0],
			handler: function(direction){
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createSectionWaypoint() {
		var that = this;
		this.pageSections.each(function(){
			var eachSection = this;

			new Waypoint({

				element:eachSection,
				handler: function(direction){
					if(direction == "down") {
						var matchingLinkInfo = eachSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingLinkInfo).addClass("is-current-link");
					}
				},
				offset: "23%"

			});

			new Waypoint({

				element:eachSection,
				handler: function(direction){
					if(direction == "up") {
						var matchingLinkInfo = eachSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingLinkInfo).addClass("is-current-link");
					} 
				},
				offset: "-60%"

			});
		});


		// Extra Feature I created on my own
		// turing all links white when scrolled up to the hero section
		// additionally coded by applying the learned concept
		new Waypoint({
			element:that.headerTriggerPoint[0],
			handler: function(direction){
				if(direction == "up") {
					that.headerLinks.removeClass("is-current-link");
				}
			},
			offset: "0%"

		});
	}

}



export default StickyHeader;