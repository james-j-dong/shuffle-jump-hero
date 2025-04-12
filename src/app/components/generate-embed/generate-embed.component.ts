import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-embed',
  imports: [],
  templateUrl: './generate-embed.component.html',
  styleUrl: './generate-embed.component.scss'
})
export class GenerateEmbedComponent {
  embedCode: string = '';
  ngOnInit(): void {
    this.embedCode = this.generateEmbedCode();
    
  }
  generateEmbedCode(): string {
    const embedCode = `<iframe src="https://example.com/embed" width="600" height="400" frameborder="0"></iframe>`;
    return embedCode;
  }
  copyToClipboard(): void {  
    navigator.clipboard.writeText(this.embedCode).then(() => {
      console.log('Embed code copied to clipboard');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  }
}
