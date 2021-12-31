import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../error/missing-params-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return {
      // TODO: Remove this zero to definitive implementation
      statusCode: 200,
      body: 'any_response_body'
    }
  }
}
