export const required = value => {
  if (!value) {
    return "Required";
  }

  if (typeof value === "string" && value.trim().length === 0) {
    return "Required";
  }
};
