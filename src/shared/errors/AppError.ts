export class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) { //<< This stablishes a DEFAULT statusCode number
    this.message = message;
    this.statusCode = statusCode;
  }
}