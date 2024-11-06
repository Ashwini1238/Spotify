import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-card',
  templateUrl: './browse-card.component.html',
  styleUrl: './browse-card.component.css'
})
export class BrowseCardComponent implements OnInit{
  @Input() bgColor!: string;
  @Input() textColor!: string;
  @Input() title!: string;
  constructor() {}
  ngOnInit(): void {}
}
