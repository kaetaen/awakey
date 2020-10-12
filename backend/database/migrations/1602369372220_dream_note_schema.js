'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DreamNoteSchema extends Schema {
  up () {
    this.create('dream_notes', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.string('title').notNullable()
      table.string('content').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('dream_notes')
  }
}

module.exports = DreamNoteSchema
