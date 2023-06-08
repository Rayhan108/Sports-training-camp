// save students email on db
export const storeUserInDB = user => {
  console.log(user.email);
    const currentLoggedUsers = {
      email: user.email,
    }
  
    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentLoggedUsers),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  