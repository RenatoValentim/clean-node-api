import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../error/missing-params-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
    return {
      // TODO: Remove this zero to definitive implementation
      statusCode: 0,
      body: 'any_response_body'
    }
  }
}
