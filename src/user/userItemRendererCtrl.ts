/**
 * File created by suenlue on 31.07.18.
 * Copyright (c) 2018 by netTrek GmbH & Co. KG
 */
import { User } from './user';
import { UserItemRenderer } from './userItemRenderer';

export class UserItemRendererCtrl implements UserItemRenderer {
  get selected (): boolean {
    return this._selected;
  }

  set selected ( value: boolean ) {
    this._selected = value;
    if ( value ) {
      this.target.style.color = 'red';
    } else {
      this.target.style.color = null;
    }
  }

  get target (): HTMLElement {
    return this._target;
  }
  private _target: HTMLElement;
  private _selected: boolean;

  constructor ( private tempId,
                public user: User,
                ) {}

  renderIn ( elem: HTMLElement ): HTMLElement { //apendChild HtmlElement
    const temp   = document.querySelector( `template#${this.tempId}`) as HTMLTemplateElement;
    const target = temp.content.cloneNode( true ) as HTMLElement;
    this._target = target.querySelector('li');
    this._target.innerText = `${this.user.firstname} ${this.user.lastname}`;

    this._target.addEventListener( 'click', () => {
      this._target.dispatchEvent(
        new CustomEvent( 'selectedUser', {
          detail: this
        })
      )
    });
    elem.appendChild( this._target );
    return this._target;
  }


}