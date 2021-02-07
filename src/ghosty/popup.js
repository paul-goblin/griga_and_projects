export class Popup {
  constructor( displayId, message, buttons, inputFields, h3Text, pText) {
    this.display = document.getElementById(displayId);
    this.message = message || 'Hello World!';
    this.buttonsData = buttons || [];
    this.inputFields = inputFields || [];
    this.h3Text = h3Text;
    this.pText = pText;

    this.popupHTMLString = '';
    this.generatePopupHTMLString();
    this.display.insertAdjacentHTML('beforeEnd', this.popupHTMLString);
    this.setupButtonListeners();
  }

  generatePopupHTMLString() {
    let popupTextHTML = '';
    if ( this.h3Text || this.pText ) {
      let h3TextHTML = '';
      let pTextHTML = '';
      if (this.h3Text) {h3TextHTML = `<h3>${this.h3Text}</h3>`};
      if (this.pText) {pTextHTML = `<p>${this.pText}</p>`};
      popupTextHTML = `
      <div class="popup-text">
        ${h3TextHTML}
        ${pTextHTML}
      </div>
      `;
    }

    let inputsHTMLString = '';
    this.inputFields.forEach( iData => {
      inputsHTMLString += `
      <div class="popup-input-line">
        <label for="${iData.name}">${iData.label}</label>
        <input type="text" id="${iData.name}-input" name="${iData.name}" placeholder="${iData.placeholder}">
      </div>
      `;
    } );

    let buttonsHTMLString = '';
    this.buttonsData.forEach( bData => {
      buttonsHTMLString += `
      <div class="button popup-button" id="${bData.id}">${bData.text}</div>
      `;
    } )

    this.popupHTMLString = `
    <div class="popup" id="${this.display.id}-popup">
      <div class="popup-message">${this.message}</div>
      ${popupTextHTML}
      ${inputsHTMLString}
      <div class="level-bar popup-buttons-bar">
        ${buttonsHTMLString}
      </div>
    </div>
    `;
  }

  setupButtonListeners() {
    this.buttonsData.forEach( bD => {
      document.getElementById( bD.id ).addEventListener( 'click', e => this.handleButtonClick(e) );
    } );
  }

  handleButtonClick( e ){
    const bData = this.buttonsData.find( bD => bD.id === e.target.id );
    const inputValues = {};
    this.inputFields.forEach( iData => {
      const inputElm = document.getElementById(iData.name+'-input');
      let value = inputElm.value;
      if (value === "") { value = iData.placeholder };
      inputValues[iData.name] = value;
    } );
    bData.click( inputValues );
  }

  close() {
    document.getElementById(this.display.id+'-popup').remove();
  }
}