import { useMutation } from "@tanstack/react-query";
import { postUserOtp } from "../services/api";

export const useUserOtp = () => {
  return useMutation({
    mutationFn: postUserOtp,
  });
};
