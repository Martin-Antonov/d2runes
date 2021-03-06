import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ISpecificItem} from "../../../services/uniques/models/Items";
import {PREVIEW_ANIMATION} from "../../../shared/Animations";
import {UniquesService} from "../../../services/uniques/uniques.service";

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
  animations: PREVIEW_ANIMATION('i')
})
export class ItemPreviewComponent implements OnInit {
  @HostBinding("@i")
  @Input() item: ISpecificItem;

  constructor(private us: UniquesService) {
  }

  ngOnInit(): void {
  }

}
