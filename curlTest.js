const url = 'http://127.0.0.1:8000/mygrocerylist/api/v1/'

function createUser(name) {
  const userData = {
    name: name
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(userData)
  }
  let ressource = 'user/'
  fetch(url + ressource, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      return data
    })
    .then(data => createList('nouvelle liste', data.id))
    .then(data => findUser(data.user))
}
createUser("Marco")


function createList(title, userId) {
  const listData = {
    title: title,
    user: userId
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(listData)
  }
  let ressource = 'list/'
  return new Promise((resolve) => {
    fetch(url + ressource, options)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        resolve(data)
      })
  })
}

function findUser(userId) {
  let ressource = 'user/'
  fetch(url + ressource + userId)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  })
}
