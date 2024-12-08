/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { postLoginPN } from "../services/api";

export const useLoginPN = () => {
  const [cookie, setCookie] = useCookies(["token"]);

  return useMutation({
    mutationFn: postLoginPN,
    onSuccess(res: any) {
      if (res.token) {
        setCookie("token", res.token, { path: "/" });
        toast.success("با موفقیت وارد شدید!");
        redirect("/app");
      }
    },
  });
};
