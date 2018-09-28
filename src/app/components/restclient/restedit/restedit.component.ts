import { Component, OnInit } from '@angular/core';
import { RendersService } from '../../../services/renders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restedit',
  templateUrl: './restedit.component.html',
  styleUrls: ['./restedit.component.css']
})
export class ResteditComponent implements OnInit {

  renders:any;
  
  constructor(private rendersService: RendersService, private route: ActivatedRoute) { }

  id=this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.rendersService.getRendersById(this.id)
    .subscribe(
      data => {
        this.renders = data;
      }
    );
  }

  public updateRender(): void{
    
  }

}
