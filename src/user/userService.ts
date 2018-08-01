/**
 * File created by suenlue on 31.07.18.
 * Copyright (c) 2018 by netTrek GmbH & Co. KG
 */
import { User } from './user';

let instance: UserService;

export class UserService {

  readonly endpoint: string = 'http://localhost:3000/users';
  private userList: User[];

  static getInstance (): UserService {
    if ( !instance ) instance = new UserService();
    return instance
  }

  private constructor () {}
/*
  // ohne async
  getUserList () {
    fetch( this.endpoint ).then( (response) => {
      response.json().then( userList => {
        console.log ( userList );
      })
    })
  }
  */

  async getUserList (): Promise<User[]> {
    const response = await fetch( this.endpoint );
    this.userList = await response.json();
    return this.userList;
  }

}