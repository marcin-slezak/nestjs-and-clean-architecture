import { User } from './user';

describe('User', () => {
  it('getFullName', () => {
    const user = new User()
    user.firstName = 'Jan'
    user.lastName = 'Kowalski'
    expect(user.fullName).toEqual('Jan Kowalski');
  });
});
