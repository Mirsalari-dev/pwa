export const checkMelliCode = (meli_code: string) => {
  if (meli_code?.length === 10) {
    if (
      meli_code === "1111111111" ||
      meli_code === "0000000000" ||
      meli_code === "2222222222" ||
      meli_code === "3333333333" ||
      meli_code === "4444444444" ||
      meli_code === "5555555555" ||
      meli_code === "6666666666" ||
      meli_code === "7777777777" ||
      meli_code === "8888888888" ||
      meli_code === "9999999999"
    ) {
      return true;
    }
    const c = parseInt(meli_code.charAt(9), 10);
    const n =
      parseInt(meli_code.charAt(0), 10) * 10 +
      parseInt(meli_code.charAt(1), 10) * 9 +
      parseInt(meli_code.charAt(2), 10) * 8 +
      parseInt(meli_code.charAt(3), 10) * 7 +
      parseInt(meli_code.charAt(4), 10) * 6 +
      parseInt(meli_code.charAt(5), 10) * 5 +
      parseInt(meli_code.charAt(6), 10) * 4 +
      parseInt(meli_code.charAt(7), 10) * 3 +
      parseInt(meli_code.charAt(8), 10) * 2;

    const r = n - parseInt(String(`${n / 11}`), 10) * 11;
    return !(
      (r === 0 && r === c) ||
      (r === 1 && c === 1) ||
      (r > 1 && c === 11 - r)
    );
  }
  return true;
};

export const NATIONAL_CODE_REQUIRED_VALIDATION = {
  maxLength: { value: 10, message: "وارد کردن کد ملی 10 رقمی اجباری است" },
  minLength: { value: 10, message: "وارد کردن کد ملی 10 رقمی اجباری است" },
  validate: (value: string) => {
    if (checkMelliCode(value)) {
      return "کدملی وارد شده نامعتبر است";
    }
    return true;
  },
  required: "وارد کردن کد ملی اجباری است",
};
