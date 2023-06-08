// save students on db
export const storeUserInDB = user => {
    const currentLoggedUsers = {
      email: user.email,
    }
  
    fetch(`https://localhost:50000/students/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentLoggedUsers),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  