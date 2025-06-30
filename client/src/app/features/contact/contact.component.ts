import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

    public buttonText: string = 'Send Message';

  sendMessage() {
    
    this.buttonText = 'Message Sent';

     // Change the text back to "Send Message" after 3 seconds
     setTimeout(() => {
      this.buttonText = 'Send Message';
    }, 3000);

  }
  
}
