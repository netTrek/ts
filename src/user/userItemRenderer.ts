import { User } from './user';

/**
 * File created by suenlue on 31.07.18.
 * Copyright (c) 2018 by netTrek GmbH & Co. KG
 */

export interface UserItemRenderer {

  user: User;
  target: HTMLElement;
  renderIn ( elem: HTMLElement ): HTMLElement;

}