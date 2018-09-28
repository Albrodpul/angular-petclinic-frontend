import { Component, OnInit } from '@angular/core';
import { RendersService } from '../../services/renders.service';


@Component({
  selector: 'app-restclient',
  templateUrl: './restclient.component.html',
  styleUrls: ['./restclient.component.css']
})
export class RestclientComponent implements OnInit {

  renders: any;
  newRender: any;

  constructor(private rendersService: RendersService) {
  }

  ngOnInit() {
    console.log("REST Client Component Initialized");
    this.refresh();
  }

  public refresh(): void {
    this.rendersService.getRenders()
      .subscribe(
        data => {
          this.renders = data;
        }
      );
  }

  public postRender(sampleModel, view, ctrl): void {
    this.newRender = [{ "id": sampleModel.split('.')[0], "sampleModel": sampleModel, "view": view, "ctrl": ctrl, "type": "ng" }];
    console.log(this.newRender);
    this.rendersService.postRender(this.newRender)
      .subscribe(
        data => {
          console.log(data);
          console.log("Ok")
          this.refresh();
        },
        err => {
          if (err.status == 201) {
            this.refresh();
          } else {
            console.log("mal");
          }
        }
      )
  }

  public deleteRender(idRender): void {
    this.rendersService.deleteRender(idRender)
      .subscribe(
        data => {
          this.refresh();
          console.log("Ok");
        },
        err => {
          console.log("Mal");
        }
      )
  }


}
