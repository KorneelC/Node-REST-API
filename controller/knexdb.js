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

exports.postNewPlaylist = async (req, res, next) => {
    const playlistName = req.body.playlistName
    try {
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

exports.updatePlaylist = async (req, res, next) => {
    const searchPlaylistName = req.body.searchPlaylistName
    const updatePlaylistName = req.body.updatePlaylistName
    try {
        await knex('playlists').where({
            Name: searchPlaylistName,
        })
        .update({Name: updatePlaylistName})
        res.status(200).json({
            message: "updated playlist",
            newPlaylist: {
                playlist: updatePlaylistName,
            }
        })
    }
    catch(error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error);
    }
}
exports.deletePlaylist =  async (req,res,next) => {
    const playlist = req.body.deletePlaylist
    try {
        await knex('playlists').where({Name: playlist}).del();
        res.status(200).json({
            message: `deleted playlist ${playlist}`
        })
    }
    catch(error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error);
    }
}