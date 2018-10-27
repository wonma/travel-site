import $ from 'jquery';

class Modal {

	constructor(){
		this.openModalBtn = $(".open-modal");
		this.modalBox = $(".modal");
		this.closeModalBtn = $(".modal__btn-close");
		this.events();
	}

	events(){
		this.openModalBtn.click(this.openModal.bind(this));
		this.closeModalBtn.click(this.closeModal.bind(this));
		$(document).keyup(this.keyCloseModal.bind(this));
	}

	openModal(){
		this.modalBox.addClass("modal--is-visible");
		return false;
	}

	closeModal(){
		this.modalBox.removeClass("modal--is-visible");
	}

	keyCloseModal(e){
		if(e.keyCode == 27) {
			this.modalBox.removeClass("modal--is-visible");
		}
	}

}


export default Modal;