import users from '../../../public/users.json'

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json({users: users.find(userList => userList.page === parseInt(req.query.page))});
      break
  }
}