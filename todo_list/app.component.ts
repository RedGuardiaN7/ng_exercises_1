import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo_list';

  public elements: Array<unknown> = [];

  public appendElement(): void {

    if(<HTMLInputElement>document.getElementById("submit") != null){
    
    this.elements.push((<HTMLInputElement>document.getElementById("submit")).value);
    console.log(this.elements);
  }
}

}
