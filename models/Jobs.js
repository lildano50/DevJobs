const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Jobs extends Model {}

//WebApi object categories listed below: 

Jobs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      // .name
      type: DataTypes.STRING,
      allowNull: false,
    },
    cityCategory: {
      // .cityCategory
      type: DataTypes.STRING,
    },
    stateCategory: {
      // .stateCategory
      type: DataTypes.STRING,
      allowNull: false
    },
    company: {
      // .company
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobType: {
      // Full time vs Part Time etc...
      // .jobType
      type: DataTypes.STRING,
      allowNull: false,
    },
    annualSalaryFrom: {
      // .annualSalaryFrom
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    annualSalaryTo: {
      // .annualSalaryTo
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    jobUrl: {
      // .jobUrl
      type: DataTypes.STRING,
      allowNull: false,
    },
    // .isFullRemote
    isFullRemote: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'job',
  }
);

module.exports = Jobs;
