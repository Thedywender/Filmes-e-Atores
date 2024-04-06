const httpStatus = {
    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 204,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INVALID_DATA: 422,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500,
  };
    
  const HttpRef = (status) => httpStatus[status] || 500;
    
  export default { HttpRef, httpStatus };