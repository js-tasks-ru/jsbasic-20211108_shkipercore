function namify(users) {

  let names = [];

  for (const user of users) {
    names.push(user.name);
  }
  return names;
}
