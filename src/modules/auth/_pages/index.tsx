"use client";

import NationalCodeIcon from "@/assets/icons/nationalCodeIcon";
import PasswordIcon from "@/assets/icons/PasswordIcon";
import PhoneNumberIcon from "@/assets/icons/phoneNumberIcon";
import FixedButton from "@/components/ui/button/FixedButton";
import { CustomModal } from "@/components/ui/customModal/customModal";
import { MobileNumberInputBoxForm } from "@/components/ui/input-box/MobileNumberInputBoxForm";
import { NumberInputBoxForm } from "@/components/ui/input-box/numberInputBoxForm";
import { StyledInputAdornment } from "@/components/ui/input-box/StyledInputAdornment";
import { TextInputBoxForm } from "@/components/ui/input-box/TextInputBoxForm";
import { NATIONAL_CODE_REQUIRED_VALIDATION } from "@/constant/validations/nationalCodeValidations";
import { PHONE_NUMBER_REQUIRED_VALIDATIONS } from "@/constant/validations/phoneNumberValidations";
import { useModal } from "@/hooks/useModal/useModal";
import AuthSliders from "@/modules/auth/components/authSliders";
import { usePostCheckPhoneNumber } from "@/modules/auth/hooks/useCheckPhoneNumber";
import { useLoginPN } from "@/modules/auth/hooks/useLoginPN";
import { useRegister } from "@/modules/auth/hooks/useRegister";
import { useUserOtp } from "@/modules/auth/hooks/useUserOtp";
import { Box, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import { Controller, useForm } from "react-hook-form";
import { OtpInput } from "reactjs-otp-input";
import { Swiper as SwiperType } from "swiper";

const AuthPage = () => {
  const theme = useTheme();
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookie] = useCookies(["token"]);

  useEffect(() => {
    if (cookie.token) {
      router.replace("/app");
    }
  }, [cookie, router]);

  const {
    isOpen: checkPhoneNumberIsOpen,
    onClose: checkPhoneNumberOnClose,
    onOpen: checkPhoneNumberOnOpen,
  } = useModal();

  const {
    isOpen: RegisterFormIsOpen,
    onClose: RegisterFormOnClose,
    onOpen: RegisterFormOnOpen,
  } = useModal();

  const {
    isOpen: RegisterOtpIsOpen,
    onClose: RegisterOtpOnClose,
    onOpen: RegisterOtpOnOpen,
  } = useModal();

  const {
    isOpen: LoginOtpIsOpen,
    onClose: LoginOtpOnClose,
    onOpen: LoginOtpOnOpen,
  } = useModal();

  const {
    isOpen: LoginPasswordIsOpen,
    onClose: LoginPasswordOnClose,
    onOpen: LoginPasswordOnOpen,
  } = useModal();

  const swiperRef = useRef<SwiperType | null>(null);

  const { control, reset, handleSubmit, getValues } = useForm({
    defaultValues: {
      phoneNumber: undefined,
      nationalCode: undefined,
      passwordRegister: undefined,
      otpRegister: undefined,
      otpLogin: undefined,
      passwordLogin: undefined,
    },
  });

  const handleModalClose = () => {
    checkPhoneNumberOnClose();
    reset();
    if (swiperRef.current) {
      swiperRef.current.autoplay?.start();
    }
  };

  const {
    mutate: mutateCheckPhoneNumber,
    isPending: isPendingCheckPhoneNumber,
  } = usePostCheckPhoneNumber();

  const { mutate: mutateUserOtp, isPending: isPendingUserOtp } = useUserOtp();
  const { mutate: mutateRegister, isPending: isPendingRegister } =
    useRegister();
  const { mutate: mutateLoginPN, isPending: isPendingLoginPN } = useLoginPN();

  const onSubmitCheckPhoneNumber = (data: any) => {
    mutateCheckPhoneNumber(data.phoneNumber, {
      onSuccess(res) {
        if (res) {
          mutateUserOtp(
            {
              body: { phone: data.phoneNumber, reason: "signin" },
            },
            {
              onSuccess() {
                LoginOtpOnOpen();
              },
            }
          );
        } else {
          mutateUserOtp(
            {
              body: { phone: data.phoneNumber, reason: "signup" },
            },
            {
              onSuccess() {
                RegisterFormOnOpen();
              },
            }
          );
        }
      },
    });
  };

  const onSubmitRegisterForm = () => {
    RegisterFormOnClose();
    RegisterOtpOnOpen();
  };

  const onSubmitRegisterOtp = (data: any) => {
    mutateRegister(
      {
        body: {
          nationalCode: data.nationalCode,
          otp: data.otpRegister,
          password: data.passwordRegister,
          phoneNumber: data.phoneNumber,
          email: "",
        },
      },
      {
        onSuccess() {
          RegisterOtpOnClose();
        },
      }
    );
  };

  const onSubmitLoginOtp = (data: any) => {
    mutateLoginPN({
      body: {
        captchaTrackingNumber: "",
        dsCode: "11394",
        loginType: "otp",
        userCaptcha: "",
        username: data.phoneNumber,
        password: data.otpLogin,
      },
    });
  };

  const onSubmitLoginPassword = (data: any) => {
    mutateLoginPN({
      body: {
        captchaTrackingNumber: "",
        dsCode: "11394",
        loginType: "password",
        userCaptcha: "",
        username: data.phoneNumber,
        password: data.passwordLogin,
      },
    });
  };

  return (
    <>
      <AuthSliders
        isOpen={checkPhoneNumberIsOpen}
        swiperRef={swiperRef}
        onOpen={checkPhoneNumberOnOpen}
      />

      <CustomModal
        sxModal={{
          maxHeight: 300,
          maxWidth: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: "30px",
          pb: "80px",
        }}
        onClose={handleModalClose}
        open={checkPhoneNumberIsOpen}
        sxBottomSheet={{
          pb: "80px",
        }}
      >
        <Typography variant="h4Bold" color="neutral.600">
          حساب کاربری
        </Typography>
        <Typography variant="p2Regular" mt="6px" mb="20px" color="neutral.500">
          جهت ورود یا ثبت نام شماره موبایل خود را وارد نمایید.
        </Typography>
        <form onSubmit={handleSubmit(onSubmitCheckPhoneNumber)}>
          <MobileNumberInputBoxForm
            key="phoneNumber"
            name="phoneNumber"
            label="شماره موبایل"
            placeholder="شماره موبایل خود وارد کنید"
            control={control}
            autoFocus
            autoComplete="true"
            rules={PHONE_NUMBER_REQUIRED_VALIDATIONS}
            slotProps={{
              input: {
                startAdornment: (
                  <StyledInputAdornment position="start">
                    <PhoneNumberIcon sx={{ fontSize: "28px" }} />
                  </StyledInputAdornment>
                ),
              },
            }}
            defaultValue=""
          />
          <FixedButton
            loading={isPendingCheckPhoneNumber || isPendingUserOtp}
            type="submit"
            fullWidth
          >
            ورود
          </FixedButton>
        </form>
      </CustomModal>

      <CustomModal
        sxModal={{
          maxHeight: 400,
          maxWidth: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: "30px",
          pb: "100px",
        }}
        onClose={RegisterFormOnClose}
        open={RegisterFormIsOpen}
        sxBottomSheet={{
          pb: "80px",
        }}
      >
        <Typography variant="h4Bold" color="neutral.600">
          حساب کاربری
        </Typography>
        <Typography variant="p2Regular" mt="6px" mb="20px" color="neutral.500">
          کد ملی و رمز عبور دلخواه خود را وارد کنید
        </Typography>
        <form onSubmit={handleSubmit(onSubmitRegisterForm)}>
          <NumberInputBoxForm
            key="nationalCode"
            name="nationalCode"
            label="کد ملی"
            placeholder="کد ملی خود وارد کنید"
            control={control}
            autoFocus
            autoComplete="true"
            max={10}
            sx={{ marginBottom: 2 }}
            rules={NATIONAL_CODE_REQUIRED_VALIDATION}
            slotProps={{
              input: {
                startAdornment: (
                  <StyledInputAdornment position="start">
                    <NationalCodeIcon sx={{ fontSize: "28px" }} />
                  </StyledInputAdornment>
                ),
              },
            }}
            defaultValue=""
          />
          <TextInputBoxForm
            key="passwordRegister"
            name="passwordRegister"
            label="رمز عبور"
            placeholder="رمز عبور خود را انتخاب کنید"
            control={control}
            rules={{
              required: "وارد کردن رمز عبور الزامی است",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message:
                  "رمز عبور باید حداقل 6 کاراکتر، شامل یک حرف بزرگ، یک حرف کوچک، یک عدد و یک علامت نگارشی باشد",
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <StyledInputAdornment position="start">
                    <PasswordIcon sx={{ fontSize: "28px" }} />
                  </StyledInputAdornment>
                ),
              },
            }}
            defaultValue=""
          />
          <FixedButton type="submit" fullWidth>
            ورود
          </FixedButton>
        </form>
      </CustomModal>

      <CustomModal
        sxModal={{
          maxHeight: 300,
          maxWidth: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: "30px",
          pb: "80px",
        }}
        onClose={RegisterOtpOnClose}
        open={RegisterOtpIsOpen}
        sxBottomSheet={{
          pb: "80px",
        }}
      >
        <Typography variant="h4Bold" color="neutral.600">
          حساب کاربری
        </Typography>
        <Typography variant="p2Regular" mt="6px" mb="20px" color="neutral.500">
          کد پیامک شده به شماره {getValues("phoneNumber")} را وارد کنید
        </Typography>
        <form onSubmit={handleSubmit(onSubmitRegisterOtp)}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Controller
              name="otpRegister"
              control={control}
              rules={{ required: "کد تایید الزامی است", minLength: 6 }}
              render={({ field }) => (
                <OtpInput
                  value={field.value}
                  onChange={field.onChange}
                  numInputs={6}
                  containerStyle={{
                    direction: "ltr",
                    gap: "10px",
                    userSelect: "none",
                  }}
                  inputStyle={{
                    width: "42px",
                    height: "42px",
                    border: "1px solid",
                    boxShadow: "none",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                  focusStyle={{
                    border: "1px solid",
                    borderColor: theme.palette.primary[300],
                    outline: "none",
                    backgroundColor: theme.palette.primary[50],
                    color: "black",
                  }}
                  shouldAutoFocus={true}
                  isInputNum
                />
              )}
            />
          </Box>

          <FixedButton loading={isPendingRegister} type="submit" fullWidth>
            ورود
          </FixedButton>
        </form>
      </CustomModal>

      <CustomModal
        sxModal={{
          maxHeight: 300,
          maxWidth: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: "30px",
          pb: "80px",
        }}
        onClose={LoginOtpOnClose}
        open={LoginOtpIsOpen}
        sxBottomSheet={{
          pb: "80px",
        }}
      >
        <Typography variant="h4Bold" color="neutral.600">
          حساب کاربری
        </Typography>
        <Typography variant="p2Regular" mt="6px" mb="20px" color="neutral.500">
          کد پیامک شده به شماره {getValues("phoneNumber")} را وارد کنید
        </Typography>
        <form onSubmit={handleSubmit(onSubmitLoginOtp)}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Controller
              name="otpLogin"
              control={control}
              rules={{ required: "کد تایید الزامی است", minLength: 6 }}
              render={({ field }) => (
                <OtpInput
                  value={field.value}
                  onChange={field.onChange}
                  numInputs={6}
                  containerStyle={{
                    direction: "ltr",
                    gap: "10px",
                    userSelect: "none",
                  }}
                  inputStyle={{
                    width: "48px",
                    height: "48px",
                    border: "1px solid",
                    boxShadow: "none",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                  focusStyle={{
                    border: "1px solid",
                    borderColor: theme.palette.primary[300],
                    outline: "none",
                    backgroundColor: theme.palette.primary[50],
                    color: "black",
                  }}
                  shouldAutoFocus={true}
                  isInputNum
                />
              )}
            />
          </Box>
          <Typography
            sx={{ mt: 2, cursor: "pointer" }}
            variant="p2Medium"
            color="primary.500"
            onClick={() => {
              LoginOtpOnClose();
              LoginPasswordOnOpen();
            }}
          >
            ورود با رمز عبور ثابت
          </Typography>

          <FixedButton loading={isPendingLoginPN} type="submit" fullWidth>
            ورود
          </FixedButton>
        </form>
      </CustomModal>

      <CustomModal
        sxModal={{
          maxHeight: 300,
          maxWidth: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: "30px",
          pb: "100px",
        }}
        onClose={LoginPasswordOnClose}
        open={LoginPasswordIsOpen}
        sxBottomSheet={{
          pb: "80px",
        }}
      >
        <Typography variant="h4Bold" color="neutral.600">
          حساب کاربری
        </Typography>
        <Typography variant="p2Regular" mt="6px" mb="20px" color="neutral.500">
          رمز عبور خود را وارد کنید
        </Typography>
        <form onSubmit={handleSubmit(onSubmitLoginPassword)}>
          <TextInputBoxForm
            key="passwordLogin"
            name="passwordLogin"
            label="رمز عبور"
            placeholder="رمز عبور خود را انتخاب کنید"
            control={control}
            rules={{
              required: "وارد کردن رمز عبور الزامی است",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message:
                  "رمز عبور باید حداقل 6 کاراکتر، شامل یک حرف بزرگ، یک حرف کوچک، یک عدد و یک علامت نگارشی باشد",
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <StyledInputAdornment position="start">
                    <PasswordIcon sx={{ fontSize: "28px" }} />
                  </StyledInputAdornment>
                ),
              },
            }}
            defaultValue=""
          />
          <Typography
            sx={{ mt: 2, cursor: "pointer" }}
            variant="p2Medium"
            color="primary.500"
            onClick={() => {
              LoginOtpOnOpen();
              LoginPasswordOnClose();
            }}
          >
            ورود با رمز یک بار مصرف
          </Typography>
          <FixedButton loading={isPendingLoginPN} type="submit" fullWidth>
            ورود
          </FixedButton>
        </form>
      </CustomModal>
    </>
  );
};

export default AuthPage;
