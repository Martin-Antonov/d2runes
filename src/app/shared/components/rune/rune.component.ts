import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RunesService} from "../../../services/runes/runes.service";

@Component({
  selector: 'app-rune',
  templateUrl: './rune.component.html',
  styleUrls: ['./rune.component.scss']
})
export class RuneComponent implements OnInit {
  @Input() redirectEnabled: boolean = true;
  @Input() disabled: boolean = false;
  @Input() hoverInfoEnabled: boolean = false;
  @Input() name: string;
  @Input() labelVisible: boolean = true;
  @Input() isLarge: boolean = false;

  constructor(private router: Router, public rs: RunesService) {
  }

  ngOnInit(): void {
  }

  redirect() {
    if (this.redirectEnabled) {
      this.router.navigate(['/runes/' + this.name])
    }
  }

  setRune(event: any) {
    if (this.hoverInfoEnabled) {
      this.rs.setRune(event, this.name);
    }
  }

  deleteRune() {
    if (this.hoverInfoEnabled) {
      this.rs.deleteRune();
    }
  }
}
