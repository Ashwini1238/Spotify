import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from '../../services/searchbar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  public isSearchVisible: boolean = false;
  @Output() public inputFilterRes: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private sb: SearchBarService) {}

  ngOnInit(): void {
    this.sb.isSearchVisible.subscribe((status) => {
      this.isSearchVisible = status;
    });
  }

  onNavigateToLogin() {
    this.router.navigate(['/', 'login']);
  }

  onNavigateToSignup() {
    this.router.navigate(['/', 'signup']);
  }

  filterBrowsingList(inputElement: HTMLInputElement) {
    // console.log(inputElement);
    this.inputFilterRes.emit(inputElement.value);
  }
}