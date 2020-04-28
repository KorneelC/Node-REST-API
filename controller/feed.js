const { validationResult } = require('express-validator')

exports.getClothing = (req, res, next) => {
    res.status(200).json({
        clothing: [{ item: 'shoes', price: '$' + 30, color:'gray' },
        { item: 'shirt', price: '$' + 10, color:'blue'}
        ]
    })
};


exports.createPosts = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()){
        return res.status(422).json({message:'Validation failed'});
    }
    
    const title = req.body.title;
    const content = req.body.content
    const info = req.body.info
    res.status(201).json({
        message: 'post succes',
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content,
            info: info
        }
    })
}