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
    job_name: {
      // .name
      type: DataTypes.STRING,
      allowNull: false,
    },
    job_city: {
      // .cityCategory
      type: DataTypes.STRING,
    },
    job_state: {
      // .stateCategory
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    company_name: {
      // .company
      type: DataTypes.STRING,
      allowNull: false,
    },
    job_type: {
      // Full time vs Part Time etc...
      // .jobType
      type: DataTypes.STRING,
      allowNull: false,
    },
    annual_salary_from: {
      // .annualSalaryFrom
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    annual_salary_to: {
      // .annualSalaryTo
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    job_url: {
      // .jobUrl
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: 'blog',
  }
);

module.exports = Jobs;
