const User = require('./User');
const Jobs = require('./Jobs');
const Favorite = require('./Favorite');

User.hasMany(Jobs, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Jobs.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Favorite, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Favorite.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Jobs, Favorite };
