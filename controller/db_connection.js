const mysql = require('mysql');
let con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: 'Myshop'
});

exports.getSpecificClothing = (req, res) => {
  const id = req.params.id
  con.query(`SELECT * FROM clothing WHERE id = "${id}"`, (err,result) => {
    if (err) throw err;
    else {
      res.send(result);
    }
  });

};

exports.getClothing = (req, res) => {
  con.query("SELECT * FROM clothing", (err, result) => {
    if (err) throw err;
    else {
      res.send(result);
    }
  })
};

exports.postClothing = (req, res) => {
  const name = req.body.name;
  const color = req.body.color;
  const size = req.body.size
  con.connect((err) => {
    let sql = `INSERT INTO clothing (name, color, size) VALUES ("${name}", "${color}", "${size}")`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      else {
        res.status(201).json({
          message: "added new clothes",
          newCloth: {
            name: name,
            color: color,
            size: size
          }
        })
      }
    });
  });
  
}



