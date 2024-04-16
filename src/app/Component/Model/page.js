const Model = {
  userName: {
    type: "string",
    required: "Please enter your name",
    placeholder: "Enter your name",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters long",
    },
    maxLength: {
      value: 12,
      message: "Name should be less than 12 characters",
    },
    pattern: {
      value: "^[a-zA-Z ]+$",
      message: "Invalid name. Name must contain only alphabetic characters",
    },
  },
  description: {
    type: "string",
    required: "Please enter description",

    placeholder: "Please enter a description",
    minLength: {
      value: 1,
      message: "Description should be more than 1 character",
    },
    maxLength: {
      value: 64,
      message: "Description should be less than 64 characters",
    },
    pattern: {
      value: /^[a-zA-Z0-9\s]+$/,
      message: "Please enter a valid alphanumeric string",
    },
  },
};
export default Model;
