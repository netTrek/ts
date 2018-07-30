/**
 * File created by suenlue on 30.07.18.
 * Copyright (c) 2018 by netTrek GmbH & Co. KG
 */

let p: Points | undefined;

export class Points {
  private target: HTMLDivElement;

  static getInstance (): Points {
    if ( !p ) {
      p = new Points();
    }
    return p
  }

  private points: number = 0;

  constructor () {
    this.create ();
  }

  increment ( points: number = 5 ) {
    this.updatePoints ( points );
  }

  decrement ( points: number = -10 ) {
    this.updatePoints ( points );
  }

  private create () {
    this.target = document.createElement( 'div' );
    this.target.style.position = 'absolute';
    this.target.style.left =
    this.target.style.bottom = '10px';
    document.querySelector( 'body').appendChild( this.target );
    this.updatePoints ( );
  }

  private updatePoints ( points: number = 0 ) {
    this.points += points;
    this.target.innerText = this.points.toString();
  }
}