// save students email on db
export const storeUserInDB = user => {
  // console.log(user.email);
   
  
    fetch('https://assignment12-server-rayhan108.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  