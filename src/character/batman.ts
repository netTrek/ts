/**
 * File created by suenlue on 30.07.18.
 * Copyright (c) 2018 by netTrek GmbH & Co. KG
 */
import { AbstractCharacter } from './abstract.character';
import { Points } from '../points';

export class Batman extends AbstractCharacter {

  constructor () {
    super ( './assets/images/batman.png' )
  }

  destroy () {
    super.destroy();
    Points.getInstance().decrement();
  }
}

