import { Component, OnInit, Input } from '@angular/core';
import {Task} from "../../Task"

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() task: Task

  constructor() { }

  ngOnInit(): void {
  }

}