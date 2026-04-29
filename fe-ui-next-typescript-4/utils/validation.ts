export const validate = (data: any) => {
  const err: any = {};

  if (!data.fullname) err.fullname = "Required";
  if (!/^\d{10}$/.test(data.mobile)) err.mobile = "Invalid";
  if (!data.dob) err.dob = "Required";
  if (!data.message) err.message = "Required";

  return err;
};
