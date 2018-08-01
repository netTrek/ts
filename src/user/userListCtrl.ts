/**
 * File created by suenlue on 31.07.18.
 * Copyright (c) 2018 by netTrek GmbH & Co. KG
 */
import { User } from './user';
import { UserItemRenderer } from './userItemRenderer';

export class UserListCtrl {
  get selectedUser (): UserItemRenderer {
    return this._selectedUser;
  }

  set selectedUser ( value: UserItemRenderer ) {
    this._selectedUser = value;
  }

  get target (): HTMLElement {
    return this._target;
  }

  private _selectedUser: UserItemRenderer;
  private _target: HTMLElement;
  private items: UserItemRenderer[] =[];

  constructor ( private tempId: string,
                private dataProvider: User[],
                private itemRenderClass ) {
  }

  renderIn ( elem: HTMLElement ): HTMLElement { //apendChild HtmlElement
    const temp   = document.querySelector( `template#${this.tempId}`) as HTMLTemplateElement;
    this._target = temp.content.cloneNode( true ) as HTMLElement;

    const ul = this._target.querySelector( 'ul' );

    this.dataProvider.forEach( (value, index, array) => {
      const item = new this.itemRenderClass (
        'renderer',
        value
      );
      item.renderIn( ul );
      this.addItem ( item as UserItemRenderer );
    });

    elem.appendChild( this._target );
    return this._target;
  }

  private addItem ( item: UserItemRenderer ) {
    item.target.addEventListener( '_selectedUser', ( evt: CustomEvent ) => {
      this._selectedUser = evt.detail as UserItemRenderer;
    } );
    this.items.push( item );
  }
}