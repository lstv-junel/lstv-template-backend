const { initDepartments } = require("./department");
const { initMenus } = require("./menus");
const { initUsers } = require("./user");
const router = require("express").Router();

const initRoutes = (app) => {

    router.use('/users', initUsers());
    router.use('/menus', initMenus());
    router.use('/departments', initDepartments())
    app.use("/api", router);
}
module.exports = {
    initRoutes
}