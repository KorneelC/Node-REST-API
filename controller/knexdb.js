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
    try {
        const playlistName = req.body.playlistName
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
    const playlist = Number(req.params.id);
    const updatePlaylistName = req.body.updatePlaylistName
    try {
        await knex('playlists').where({
            PlaylistId: playlist,
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
    const playlist = Number(req.params.id) 
    try {
        await knex('playlists').where({PlaylistId: playlist}).del();
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