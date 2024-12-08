import apiClient from "@/utils/services/api";

export const getCheckPhoneNumber = async (
  phone_number: string
): Promise<string> => {
  const response = await apiClient.get<string>(
    `/User/CheckPhoneNumber?phoneNumber=${phone_number}`
  );
  return response.data;
};

export const postUserOtp = async ({
  body,
}: {
  body: { reason: "signup" | "signin"; phone: string };
}): Promise<string> => {
  const response = await apiClient.post<string>(`/User/UserOTP`, body);
  return response.data;
};

export const postRegister = async ({
  body,
}: {
  body: {
    phoneNumber: string;
    nationalCode: string;
    password: string;
    otp: string;
    email: string;
  };
}): Promise<string> => {
  const response = await apiClient.post<string>(`/User/Register`, body);
  return response.data;
};

export const postLoginPN = async ({
  body,
}: {
  body: {
    username: string;
    password: string;
    captchaTrackingNumber: string;
    userCaptcha: string;
    dsCode: string;
    loginType: "otp" | "password";
  };
}): Promise<string> => {
  const response = await apiClient.post<string>(`/User/LoginPN`, body);
  return response.data;
};
