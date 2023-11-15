const userCtrl = require("../../controllers/users")
const User = require('../../models/user')
const http = require('http');

const users = [{
  _id: "oeihfzeoi",
  name: "xaxa",
  username: "xaxa",
  email: "jeanbalangue@hotmail.fr",
  phone: "1111111111",
  address: "1111111111",
  company: "1111111111",
  website: "1111111111",
  userId: "xaxa",
}]

const getUsersOptions = {
  hostname: 'localhost',
  port: 3001,
  path: '/users',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}

const postUsersOptions = {
  hostname: 'localhost',
  port: 3001,
  path: '/users',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body : [JSON.stringify(users[0])]
};

describe('Users should work :)', () => {
  it('getUser() should return an array of users and status code', (done) => {
    let req = http.request(getUsersOptions, (res) => {
      res.on('data', (elements) => {
        data = JSON.parse(elements)
        // console.log(res.statusCode)
        if (Object.keys(data).length > 0){
          expect(new User({...data[0]})).toBeTruthy()
          expect(new User({...data[0]})).toBeInstanceOf(User)
          expect(res.statusCode).toBe(200)
        } else {
          expect(res.statusCode).toBe(401)
        }
      })
      done() // permet d'attendre que la promise soit resolue avant d'expecter
    })
    req.end() // permet de lancer la requete ...
  })
})


xdescribe('postUsers() should work :)', () => {
  it('should return 201 status code', (done) => {
    let req = http.request(postUsersOptions, (res) => {
      res.on('data', (elements) => {
        data = JSON.parse(elements)
        console.log('data post', data)
        if (data.message === 'Objet enregistré !') {
          expect(res.statusCode).toBe(201)
          console.log('status 1:', res.statusCode)
        }
        console.log('status 2:', res.statusCode)
      })
    })
    done() 
    req.end()
  })
})