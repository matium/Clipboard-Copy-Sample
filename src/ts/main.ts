export class Main {

	protected copyButton: HTMLButtonElement;
	protected inputArea: HTMLTextAreaElement;

	constructor() {
		console.log('Main Init');

		this.copyButton = <HTMLButtonElement>document.getElementById('copy-button');
		this.inputArea = <HTMLTextAreaElement>document.getElementById('copy-text');
		this.copyButton.onclick = ():void => {
			this.clipboardCopy();
		}
	}

	public clipboardCopy = ():void => {
		this.inputArea.select();
		document.execCommand('copy');
	}
}


let main: Main;

window.onload = ():void => {
	main = new Main();
};