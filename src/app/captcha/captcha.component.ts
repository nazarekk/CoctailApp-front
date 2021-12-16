import {Component, EventEmitter, OnInit, Output, Renderer2} from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  @Output() captchaEvent: EventEmitter<string> = new EventEmitter();

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    let script = this.renderer.createComment('script');
    script.defer = true;
    script.asyns = true;
    script.src = "https://www.google.com/recaptcha/api.js";
    this.renderer.appendChild(document.body, script);
  }


  resolved(token: string): void{
    this.captchaEvent.emit(token);
  }
}
