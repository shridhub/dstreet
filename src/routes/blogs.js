const express = require('express')

const router = express.Router()

router.get('/blogs/:id', (req, res) => {
    const num = req.params.id
    if( num < arr.length){
        res.render('blog', {data: arr[num]})
    } else {
        res.render('404')
    }
})

module.exports = router