import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {

	constructor(els, offset){
		this.itemsToReveal = els;
		this.offsetInfo = offset;
		this.hideInitially();
		this.createWaypoint();

	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoint() {
		var targetObject = this;
		this.itemsToReveal.each(function(){
			var revealItemEach = this;
			new Waypoint({
				element: revealItemEach,
				handler: function(){
					$(revealItemEach).addClass("reveal-item--visible");
				},
				offset:targetObject.offsetInfo
			});

		});
	}

}

export default RevealOnScroll;