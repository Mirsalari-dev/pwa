import { useMutation } from "@tanstack/react-query";
import { postRegister } from "../services/api";

export const useRegister = () => {
  return useMutation({
    mutationFn: postRegister,
  });
};
