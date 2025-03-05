import {CurrentUser} from './CurrentUser';
import {UsersObjectType, UserType} from './HW2';

type UserList2PropsType = {
	users: UsersObjectType; // пропиши типизацию
	filterUsers: () => void // пропиши типизацию
};

export const UserList2 = ({filterUsers, users}: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={() => filterUsers()}>SHOW ME FRIENDS FROM LA</button>

			<ul>
				{users.myFriends.map((user) => (
					<CurrentUser user={user} key={user.id} />
				))}
			</ul>
		</div>
	);
};
