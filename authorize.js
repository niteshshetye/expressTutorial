const authorize = (req, res, next)=>{
    const {user} = req.query
    if(user === 'jhone'){
        req.user = {name: 'jhone', id: 3}
        next()
    }
    else{
        res.status(401).send('Unauthorize')
    }
} 

module.exports = authorize