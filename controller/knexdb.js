let knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./chinook.db"
    }
});


exports.getPlaylists = async (req, res, next) => {
    try {
        const result = await knex.select().from('playlists')
        res.status(200).send(result)

    }
    catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error);
    }

}

exports.PostNewPlaylist = async (req, res, next) => {
    try {
        const playlistName = req.body.playlistName
        knex.schema
        await knex('playlists').insert({ Name: playlistName })
        res.status(201).json({
            message: "created new playlist",
            newPlaylist: {
                playlist: playlistName,
            }
        })
    }
    catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error);
    }
}
