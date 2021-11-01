//1. I'd like for you to write me a promise that resolves in 500ms with the value "hello"

const promise = new Promise((resolve, _) => {
    setTimeout(() => {
         resolve("hello");
    }, 500);  
});
//promise.then(res => console.log('Result: ', res))


// 2. Using the fetchUsers function write a version that returns a Promise<User[]> called
// promisifiedFetchUsers
// Note: you dont have control of the function, consider it a 3rd party API
// Note: signature of callback is callback(err, result)

const fetchUsers = (callback) => {
  const users = [
    { id: 1, name: "Mina", },
    { id: 2, name: "Jordan", },
    { id: 3, name: "Jennifer", }
  ]

  setTimeout(() => {
    // by the time this gets run, the function has already returned
    const returnedValue = callback(null, users)
  }, 500)
}

const promisifiedFetchUsers = () => {
  let callback;
  const promise = new Promise((resolve, reject) => {
      callback = (err, result) => {
        if(err) {
          reject(err);
        }
        resolve(result);
      }
  });
  
  fetchUsers(callback);
  return promise;
}
// promisifiedFetchUsers().then(users => console.log('Users: ', users))



// 3. Write a function (using async/await) fetchUsersAndFavoriteColor() that uses the fetchFavoriteColor and promisifiedFetchUser
// it should return a array of users with their favorite color
// fetchUsersAndFavoriteColor(): Promise<{ id: number, name: string, favoriteColor: string }[]>

const fetchFavoriteColor = (userId) => {
  const favoriteColors = {
    1: 'blue',
    2: 'yellow',
    3: 'green',
  }
  return new Promise((resolve)=>{setTimeout(()=>resolve(favoriteColors[userId]),1000)})
}

const fetchUsersAndFavoriteColor = async () => {
  const users = await promisifiedFetchUsers();
  return await Promise.all(users.map(async user => {
    const favoriteColor = await fetchFavoriteColor(user.id);
    return {id: user.id, name: user.name, favoriteColor};
  }));
}

fetchUsersAndFavoriteColor().then(usersAndFavColor => console.log('Users And Fav Color: ', usersAndFavColor))


// 4.  implement generic promisify
// type Callback<T> = (err: Error | null, data: T) => void
// function promisify<T>(fn: (cb: Callback<T>) => void): () => Promise<T>

const promisify = (fn) => {
  let callback;
  const promise = new Promise((resolve, reject) => {
      callback = (err, result) => {
        if(err) {
          reject(err);
        }
        resolve(result);
      }
  });
  
  fn(callback);
  return promise;
}

promisify(fetchUsers).then(res => console.log('Result: ', res))
