import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  serverElements:{type: string, name: string, content:string}[] = [];
  onServerCreated(serverData: any){
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    })
  }
  onBlueprintCreated(serverData: any){
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.name,
      content: serverData.content
    })
  }
  onChangeFirst(){
    this.serverElements[0].name = 'Changed'
  }
  onDestroyFirst(){
    this.serverElements.splice(0,1)
  }
}
