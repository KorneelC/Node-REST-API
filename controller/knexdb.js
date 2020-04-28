let knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'Myshop'
    }
});

exports.getSpecificUser = (req, res, next) => {
    const id = req.params.id
    knex('users').where({
        id: id,
    }).then(result => {
        res.send(result);
    })
        .catch(err => {
            console.log(err);
        })
}
exports.getUser = (req, res, next) => {
    knex.select().from('accounts').then(result => {
        res.send(result);
    })
        .catch(err => {
            console.log(err);
        })

}

exports.postUser = (req, res) => {
    const userName = req.body.userName;
    const accountName = req.body.accountName;
    knex.schema
        .then(() =>
            knex('users').insert({ user_name: userName })
        )

        .then(rows =>
            knex('accounts').insert({ account_name: accountName, user_id: rows[0] })
        )

        .catch(err => {
            console.error(err);
        });

    res.status(201).json({
        message: "created new user",
        newUser: {
            name: userName,
            account_name: accountName,
        }
    })
}