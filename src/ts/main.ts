export class Main {

	protected copyButton: HTMLButtonElement;
	protected inputArea: HTMLTextAreaElement;

	protected tweetHashText: string;

	constructor() {
		console.log('Main Init');

		this.copyButton = <HTMLButtonElement>document.getElementById('copy-button');
		this.copyButton.onclick = ():void => {
			this.clipboardCopy();
		};

		// 定形テキストをコピーさせてみる
		this.tweetHashText = `＜おいしい食事とミンティアの写真や動画を投稿してね！＞
		#食べたらMINITA 
		http://www.mintia.jp/campaign/?=anm`;
	}

	public clipboardCopy = ():void => {
		let textArea: HTMLTextAreaElement = document.createElement('textarea');
		textArea.value = this.tweetHashText;
		document.body.appendChild(textArea);
		textArea.select();
		let result: boolean = document.execCommand('copy');
		document.body.removeChild(textArea);
		console.log(result);
	}
}


let main: Main;

window.onload = ():void => {
	main = new Main();
};