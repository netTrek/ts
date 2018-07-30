import { Batman } from './character/batman';
import { Joker } from './character/joker';

export const elem = document.querySelector( 'h1' );
elem.innerText = 'Hello TypeScript !!!!';

let batman: Batman = new Batman();

for ( let i = 0; i < 5 ; i ++ ) {
  new Joker();
}