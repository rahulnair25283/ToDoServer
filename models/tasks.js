/**
 * Created by rahul on 11/10/16.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        title: DataTypes.STRING
    });

    return Task;
}
