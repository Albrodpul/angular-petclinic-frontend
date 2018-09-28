import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-petclient',
  templateUrl: './petclient.component.html',
  styleUrls: ['./petclient.component.css']
})
export class PetclientComponent implements OnInit {

  owners: any;

  constructor(private petsService: PetsService) { }

  ngOnInit() {
    console.log("Pet Client Component Initialized");
    this.refresh();
  }

  
  public refresh(): void {
    this.petsService.getOwners()
      .subscribe(
        data => {
          this.owners = data;
        }
      );
  }

}
