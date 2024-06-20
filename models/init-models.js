var DataTypes = require("sequelize").DataTypes;
var _departmentfile = require("./departmentfile");
var _employeefile = require("./employeefile");
var _menus = require("./menus");
var _syspar = require("./syspar");
var _user_menus = require("./user_menus");
var _useractivitylogfile = require("./useractivitylogfile");
var _users = require("./users");

function initModels(sequelize) {
  var departmentfile = _departmentfile(sequelize, DataTypes);
  var employeefile = _employeefile(sequelize, DataTypes);
  var menus = _menus(sequelize, DataTypes);
  var syspar = _syspar(sequelize, DataTypes);
  var user_menus = _user_menus(sequelize, DataTypes);
  var useractivitylogfile = _useractivitylogfile(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    departmentfile,
    employeefile,
    menus,
    syspar,
    user_menus,
    useractivitylogfile,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
