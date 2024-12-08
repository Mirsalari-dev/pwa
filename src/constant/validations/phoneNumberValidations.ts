export const PHONE_NUMBER_REQUIRED_VALIDATIONS = {
  required: "وارد کردن شماره موبایل الزامی است",
  pattern: {
    value: /^09[0-9]{9}$/,
    message: "شماره موبایل باید با 09 شروع شده و 11 رقم باشد",
  },
};

export const PHONE_NUMBER_VALIDATIONS = {
  pattern: {
    value: /^09[0-9]{9}$/,
    message: "شماره موبایل باید با 09 شروع شده و 11 رقم باشد",
  },
};
