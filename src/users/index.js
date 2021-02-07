exports.getUsers = (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.status(200).json([{
      firstName: 'Skarzold',
      lastName: 'Bellingar',
      id: '29181134',
      email: 'bellingarc@gmail.com',
    }, {
      firstName: 'Helya',
      lastName: 'Helya',
      id: '42069420',
      email: 'hellfirefox@death.com',
    }])
  }
  
  exports.createUser = (req, res) => {
    // for now... let's send back the data we receive 
    // TODO: save the data we get to a database
    const newUser = req.body
    res.status(200).send(newUser)
  }