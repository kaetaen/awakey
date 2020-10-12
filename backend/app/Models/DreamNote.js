'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DreamNote extends Model {
  user () {
    this.belongsTo('App/Models/User')
  }
}

module.exports = DreamNote
