import { Sequelize } from 'sequelize';
const db ={
  NAME: "tema7",
  USERNAME: "tema7",
  PASSWORD: "tema7",
  options: {
    dialect: "mysql",
    timezone: "+00:00",
    host: 'mysqltema7',
    port: 3306,
    logging: function (str) {
      console.log(str);
  },
  },

};
export const sequelize = new Sequlize(db.NAME, db.USERNAME, db.PASSWORD, db.options);