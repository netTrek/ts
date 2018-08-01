import { UserService } from './user/userService';
import { UserListCtrl } from './user/userListCtrl';
import { UserItemRendererCtrl } from './user/userItemRendererCtrl';

export const elem = document.querySelector( 'h1' );
elem.innerText = 'Hello TypeScript !!!!';

UserService.getInstance().getUserList().then( users => {
  // console.log ( users );
  new UserListCtrl( 'userlist', users, UserItemRendererCtrl )
    .renderIn( document.body );
});
// let ul: UserListCtrl = new UserListCtrl( 'userlist', []
// );
//
// let ulElem = ul.renderIn( document.body );
// console.log ( ulElem === ul.target );
