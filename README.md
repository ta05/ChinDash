# ChinDash

ChinDash is a Full Stack application that stores and presents data on album sales.

The application allows the user to view the sales by genre and enter invoices to add new album sales.

ChinDash was built on a MERN stack using a mysql database to store the Album Data.

## Installation

Fork the repository and open a terminal. Go to the repo's directory, into the client folder and run `npm install` to install the required packages for the client side. `cd` into the server folder and run `npm install` to install the required packages for the server side. Run `npm run dev` to run the React app.

To interact with the database, you will need to establish your mysql database. In your mysql cli or workbench run the SQL queries from `server/data/Chinook_MySQL.sql` to create and populate the Chinook database.

In the client folder, create a `.env` file and create the following variables:

- DB_HOST=\<your-database-host>
- DB_PORT=\<your-database-port>
- DB_NAME=\<your-database-name>
- DB_USER=\<your-database-username>
- DB_PASS=\<your-database-password>

Within the `.env` file, you may also add a variable `PORT` for the server, but this is optional. The server will run on port 3002 by default.

In the server folder, create a `.env` file and create the following variable:

- VITE_SERVER_BASE_URL=http://localhost:\<PORT>

Make sure the `PORT` matches the `PORT` for the server. By default the server will run on port **3002**. If you create a `PORT` environmental variable in the server `.env` this must match the `VITE_SERVER_BASE_URL` port.

## Technology
- [React.js](https://react.dev/)
- [Node.js](https://nodejs.org/en)
- [MySQL](https://www.mysql.com/)
- [Material UI](https://mui.com/material-ui/) for the Charts, Graphs and some components.
- [Sequelize](https://sequelize.org/) for ORM.

## Credits

- [Ed Roh](https://www.youtube.com/watch?v=wYpCWwD1oz0) for the Dashboard design and theme inspiration.
- [Chinook Database](https://github.com/lerocha/chinook-database) for the origin of the data

