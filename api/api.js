// Require
const express = require('express');
const apiRouter = express.Router();

const sqlite3 = require('sqlite3');

// Load database
const db = new sqlite3.Database('./database.sqlite');

// Router Param - 
apiRouter.param('tech', (req, res, next, tech) => {
    db.get(
        `SELECT * FROM Techstack WHERE tech = $tech`,
        {
            $tech: tech,
        },
        (err, row) => {
            if (err) {
                next(err);
            } else if (row) {
                req.tech = row;
                next();
            } else {
                res.sendStatus(404);
            }
        }
    );
});


// Route Handlers
// Returns all 
apiRouter.get('/', (req, res, next) => {
    // This retrieves all DISTINCT Tech
    db.all(
        `SELECT DISTINCT techDistinct AS tech, description FROM Techstack`,
        (err, rows) => {
            if (err) {
                next(err);
            } else {
                res.status(200).json({ techstack: rows });
            }
        }
    );
});

apiRouter.get('/:tech', (req, res, next) => {
    res.status(200).json({ tech: req.tech })
});



// Export
module.exports = apiRouter;