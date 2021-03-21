import { AjvError } from './errors/errors'

export class Validation implements IValidation {
  private log
  private validator
  constructor(validator: any, log: any) {
    this.validator = validator
    this.log = log
  }
  //use to validate incoming requests
  public validateCurrent(instance: object) {
    const schema = {
      type: 'object'
    }

    const validate = this.validator.compile(schema)
    if (!validate(instance)) {
      throw new AjvError(validate.errors, 'ERROR_VALIDATION')
    }
    return true
  }
}

export interface IValidation {
  validateCurrent(instance: any): any
}
