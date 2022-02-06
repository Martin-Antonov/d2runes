import {animate, state, style, transition, trigger} from "@angular/animations";

export const PREVIEW_ANIMATION = (name: string) => {
  return [
    trigger(name, [
      transition(':enter', [
        style({opacity: 0}),
        animate('100ms ease-out', style({opacity: 1})),
      ]),
      transition(':leave', [
        animate('100ms', style({opacity: 0}))
      ])
    ])
  ]
}

export const TABLE_ANIMATION = [trigger('table', [
  state('open', style({
    transform: "translateX(-20%)"
  })),
  state('closed', style({
    transform: "translateX(-50%)"
  })),
  transition('closed -> open', [
    animate('100ms 50ms ease-out', style({transform: "translateX(-20%)"})),
  ]),
  transition('open -> closed', [
    animate('100ms 50ms ease-in', style({transform: "translateX(-50%)"}))
  ]),
])]
