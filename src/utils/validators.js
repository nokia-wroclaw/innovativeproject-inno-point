export const textFieldValidator = value => {
  if (!value || !/\S/.test(value)) {
    return true;
  } else if (value.length > 30) {
    return true;
  }
  return false;
};

export const textAreaValidator = value => {
  if (!value || !/\S/.test(value)) {
    return true;
  } else if (value.length > 1000) {
    return true;
  }
  return false;
};
