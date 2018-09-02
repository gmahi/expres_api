
const pool = require('../data/config');

const router = function (app) {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });
    app.get('/users', (request, response) => {
        pool.query('SELECT * FROM users', (error, result) => {
            if (error) throw error;
            response.send(result);
        })
    });

    app.get('/users/:id', (request, response) => {
        pool.query('SELECT * FROM users where id = ?', request.params.id, (error, result) => {
            if (error) throw error;
            response.send(result);
        })
    });

    app.post('/users', (request, response) => {
        pool.query('INSERT INTO USERS SET ?', request.body, (error, result) => {
            if (error) throw error;
            response.status(201).send(`User added with ID: ${result.insertId}`);
        })
    });
    app.put('/users/:id', (request, response) => {
        pool.query('UPDATE users SET ? where id = ?',[  request.body, request.params.id], (error, result) => {
            if (error) throw error;
            response.send('User updated successfully!.');
        })
    });

    app.delete('/users/:id', (request, response) => {
        pool.query('DELETE FROM users  WHERE id = ?', request.params.id, (error, result) => {
            if (error) throw error;
            response.send('User delted successfully!.');
        })
    });


    






}
module.exports = router;