import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  // tslint:disable-next-line:variable-name
  selected_member = {id: 0, name: '', surname: ''};

  members = [
    {name: 'Member 01', id: 1, secondname: 'Mario', phone: 'http://www.minhaapp.com/photo1'},
    {name: 'Member 02', id: 2, secondname: 'Jenesio', phone: 'http://www.minhaapp.com/photo2'},
    {name: 'Member 03', id: 3, secondname: 'Moriarte', phone: 'http://www.minhaapp.com/photo3'},
    {name: 'Member 04', id: 4, secondname: 'Mario', phone: 'http://www.minhaapp.com/photo1'},
  ];

  constructor(private api: ApiService, private router: Router) {
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data;
      },
      error => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }

  memberClicked = (member) => {
    this.router.navigate(['member-detail', member.id]);
  }
}
