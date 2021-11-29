function showSalary(users, age) {

  let result = '';

  const filteredUsers = users.filter((user) => user.age <= age);
  const mappedUsers = filteredUsers.map((user) => user.name + ', ' + user.balance);

  for (const item of mappedUsers) {
    if (item !== mappedUsers[mappedUsers.length - 1]) {
      result += item + '\n';
    } else {
      result += item;
    }
  }
  return result;
}
