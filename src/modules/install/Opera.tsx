import addText from "@/assets/svg/addText.svg";
import installOpera from "@/assets/svg/installOpera.svg";
import logo from "@/assets/svg/logo.svg";
import logoPattern from "@/assets/svg/logoPattern.svg";
import more from "@/assets/svg/more.svg";
import FixedButton from "@/components/ui/button/FixedButton";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const OperaInstall = () => {
  const router = useRouter();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="100vw"
        position="relative"
        minHeight="100dvh"
        bgcolor="primary.800"
        sx={{
          pb: "80px",
        }}
      >
        <Image style={{ marginTop: "60px" }} src={logo} alt="logo" />
        <Typography
          color="white"
          px="12px"
          textAlign="center"
          variant="subH2Medium"
          my="36px"
          lineHeight="28px"
        >
          وب‌اپلیکیشن پاداش را به صفحه اصلی تلفن همراه خود اضافه کنید
        </Typography>
        <Box width="90%" display="flex" flexDirection="column" gap="30px">
          <Box
            border="1px solid"
            borderColor="surface.500"
            py="24px"
            px="20px"
            borderRadius="16px"
            width="100%"
            display="flex"
            gap="10px"
            alignItems="center"
          >
            <Box>
              <Image src={more} alt="" />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography color="white" variant="p2Bold">
                More
              </Typography>
              <Typography color="#A8A8A8" variant="p2Bold">
                انتخاب این دکمه در نوار پایین سمت راست.
              </Typography>
            </Box>
          </Box>
          <Box
            border="1px solid"
            borderColor="surface.500"
            py="24px"
            px="20px"
            borderRadius="16px"
            width="100%"
            display="flex"
            gap="10px"
            alignItems="center"
          >
            <Box>
              <Image src={installOpera} alt="" />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography color="white" variant="p2Bold">
                Install
              </Typography>
              <Typography color="#A8A8A8" variant="p2Bold">
                انتخاب این گزینه از منوی ظاهر شده.
              </Typography>
            </Box>
          </Box>
          <Box
            border="1px solid"
            borderColor="surface.500"
            py="24px"
            px="20px"
            borderRadius="16px"
            width="100%"
            display="flex"
            gap="10px"
            alignItems="center"
          >
            <Box>
              <Image src={addText} alt="" />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography color="white" variant="p2Bold">
                Add
              </Typography>
              <Typography color="#A8A8A8" variant="p2Bold">
                انتخاب این گزینه از کادر ظاهر شده.
              </Typography>
            </Box>
          </Box>
          <FixedButton fullWidth onClick={() => router.push("/app")}>
            متوجه شدم
          </FixedButton>
        </Box>

        <Image
          src={logoPattern}
          alt="logo pattern"
          style={{
            objectFit: "cover",
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "50%",
            height: "auto",
          }}
        />
      </Box>
    </>
  );
};
export default OperaInstall;
