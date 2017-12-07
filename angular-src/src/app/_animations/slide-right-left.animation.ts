import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideRightLeftAnimation =
    trigger('slideRightLeftAnimation', [
        state('*', style({
            position: 'absolute',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0)'
        })),
        transition(':enter', [
            style({
                position: 'fixed',
                right: '-400%',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),
            animate('.5s ease-in-out', style({
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }))
        ])
    ]);