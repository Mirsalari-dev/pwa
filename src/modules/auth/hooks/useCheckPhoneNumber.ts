import { useMutation } from "@tanstack/react-query";
import { getCheckPhoneNumber } from "../services/api";

export const usePostCheckPhoneNumber = () => {
  return useMutation({
    mutationFn: getCheckPhoneNumber,
    onSuccess(data) {
      console.log("dataget", data);
    },
  });
};
