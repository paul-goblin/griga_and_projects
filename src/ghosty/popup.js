export class Popup {
  constructor( displayId, message, bS = {}, inputFields) {
    this.display = document.getElementById(displayId);
    this.message = message || 'Hello World!';
    this.leftButtonText = bS.leftButtonText || 'leftButtonText';
    this.leftCallback = bS.leftCallback || function () {console.log('leftCallback')};
    this.rightButtonText = bS.rightCallback || 'rightButtonText';
    this.rightCallback = bS.rightCallback || function () {console.log('leftCallback')};
    this.inputFields = inputFields = [];

    this.popupHTMLString = '';
    this.generatePopupHTMLString();
    this.display.insertAdjacentHTML('beforeEnd', this.popupHTMLString);
  }

  generatePopupHTMLString() {
    let inputsHTMLString = '';
    //TODO iputHTMLString
    this.popupHTMLString = `
    <div class="popup" id="${this.display.id}-popup">
      <div class="popup-message">${this.message}</div>
      ${inputsHTMLString}
      <div class="level-bar popup-buttons-bar">
        <div class="button popup-button">${this.leftButtonText}</div>
        <div class="button popup-button">${this.rightButtonText}</div>
      </div>
    </div>
    `;
  }
}