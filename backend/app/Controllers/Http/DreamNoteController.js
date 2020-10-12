'use strict'

const DreamNote = use('App/Models/DreamNote')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with dreamnotes
 */
class DreamNoteController {
  /**
   * Show a list of all dreamnotes.
   * GET dreamnotes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const dreamnotes = DreamNote.all()

    return dreamnotes
  }

  
  /**
   * Create/save a new dreamnote.
   * POST dreamnotes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const { id } = auth.user
    const data = request.only(['title','content'])

    const dreamnotes = await DreamNote.create({ ...data, user_id: id  })

    return dreamnotes
  }

  /**
   * Display a single dreamnote.
   * GET dreamnotes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const dreamnotes = await DreamNote.findOrFail(params.id)

    return dreamnotes
  }
 
  /**
   * Update dreamnote details.
   * PUT or PATCH dreamnotes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dreamnotes = await DreamNote.findOrFail(params.id)

    const data = request.only(['title','content'])

    dreamnotes.merge(data)

    await dreamnotes.save()

    return dreamnotes
  }

  /**
   * Delete a dreamnote with id.
   * DELETE dreamnotes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const dreamnotes = await DreamNote.findOrFail(params.id)
    if (dreamnotes.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await dreamnotes.delete()
  }
}

module.exports = DreamNoteController
