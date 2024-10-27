export class BaseEntity {
  async update(data) {
    try {
      const validatedData = this.validate(data);
      await this.save(validatedData);
      return this.onSuccess(validatedData);
    } catch (error) {
      return this.onError(error);
    }
  }

  validate(data) {
    throw new Error("Method validate() must be implemented.");
  }

  async save(data) {
    console.log("Saving data:", data);
  }

  onSuccess(data) {
    return {
      statusCode: 200,
      status: "success",
      data,
    };
  }

  onError(error) {
    return {
      statusCode: 500,
      status: "error",
      message: error.message,
    };
  }
}
