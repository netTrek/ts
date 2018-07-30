/**
 * File created by suenlue on 30.07.18.
 * Copyright (c) 2018 by netTrek GmbH & Co. KG
 */
import { Character } from './character';

export abstract class AbstractCharacter implements Character{

  get y (): number {
    return this._y;
  }

  set y ( value: number ) {
    if ( this._y !== value && !! this.target )  {
      this._y = value;
      this.target.style.top = `${this._y}px`;
    }
  }

  get x (): number {
    return this._x;
  }

  set x ( value: number ) {
    if ( this._x !== value && !! this.target )  {
      this._x = value;
      this.target.style.left = `${this._x}px`;
    }
  }

  get maxX (): number {
    if ( !!this.target && this.target.width > 0 ) {
      return window.innerWidth - this.target.width;
    }
    return 0;
  }

  get maxY (): number {
    if ( !!this.target && this.target.height > 0 ) {
      return window.innerHeight - this.target.height;
    }
    return 0;
  }

  private _x: number;
  private _y: number;
  private _xDir: number;
  private _yDir: number;
  protected speed: number = 8;
  private _intervalId: number | undefined;
  private target: HTMLImageElement | undefined;
  private body: HTMLBodyElement | null;

  private clickHandler = () => {
    this.destroy();
  };

  constructor ( private url: string ) {
    this.body = document.querySelector( 'body');
    this.create();
  }

  create () {
    if ( ! this.target ) {
      this.target = document.createElement( 'img' );
      this.target.onload = () => {
        this.target.width = 160;
        if ( this.target.height > 160 ) {
          this.target.width *= 160 / this.target.height;
        }
        this.x = Math.round( Math.random() * this.maxX );
        this.y = Math.round( Math.random() * this.maxY );
        this._xDir = Math.random() > .5 ? 1 : -1;
        this._yDir = Math.random() > .5 ? 1 : -1;
        this.target.addEventListener( 'click', this.clickHandler );
        this.move();
      };
      this.target.style.position = 'absolute';
      this.target.src = this.url;
      this.body.appendChild( this.target );
    }
  }

  destroy () {
    if ( !!this.target ) {
      this.stopMoving ();
      this.target.removeEventListener( 'click', this.clickHandler );
      this.body.removeChild( this.target );
      this.target = undefined;
      setTimeout( () => {
        this.create();
      }, Math.floor( Math.random() * 1000 )  + 1000 )
    }
  }

  move () {
    if ( !!this.target ) {
      this.stopMoving ();
      this._intervalId = window.setInterval( () => {
          this.x += this._xDir * this.speed;
          this.y += this._yDir * this.speed;
          if ( this.x < 0 || this.x > this.maxX ) {
            this._xDir *= -1;
          }
          if ( this.y < 0 || this.y > this.maxY ) {
            this._yDir *= -1;
          }
      }, 33 )
    }
  }

  protected stopMoving () {
    if ( !! this._intervalId ) {
      window.clearInterval( this._intervalId );
      this._intervalId = undefined;
    }
  }
}