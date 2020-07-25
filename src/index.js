import { getUsers } from './api/userApi';

getUsers().then(res => {
  let userBody = '';

  res.forEach(user => {
    userBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="delete-user">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`;
  });
});
