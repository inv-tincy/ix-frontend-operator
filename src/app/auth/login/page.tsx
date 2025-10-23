"use client";

import { Box, Stack, useTheme } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button as MintButton,
  TextField as MintTextField,
  Typography as MintTypography,
  Link as MintLink,
  Alert as MintAlert,
} from "@mui/material";
import { useTranslation } from "react-i18next"; // ✅ import i18n hook

// Validation schema
const Schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export type TScheme = yup.InferType<typeof Schema>;

export default function Login() {
  const theme = useTheme();
  const { t } = useTranslation(); // ✅ useTranslation hook
  const [form, setForm] = useState<{ error?: string }>({});

  const methods = useForm<TScheme>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(Schema),
  });

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = methods;

  const onSubmit = (data: TScheme) => {
    console.log("Login Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Header */}
      <Box sx={{ px: 2, py: 1 }}>
        <MintTypography
          variant="h5"
          fontWeight={700}
          color={theme.palette.primary.main}
        >
          {t("login.title")}
        </MintTypography>
      </Box>

      {/* Form Container */}
      <Box
        p={3}
        bgcolor={theme.palette.background.paper}
        display="flex"
        flexDirection="column"
        gap={3}
        borderRadius={2}
        mt={2}
        boxShadow={2}
        maxWidth={400}
        mx="auto"
      >
        <MintTypography variant="body1" color="text.secondary">
          {t("login.subtitle")}
        </MintTypography>

        {/* Error message (if any) */}
        {form.error && (
          <MintAlert severity="error" variant="outlined">
            {form.error}
          </MintAlert>
        )}

        {/* Username */}
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState }) => (
            <MintTextField
              {...field}
              label={t("login.username")}
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <MintTextField
              {...field}
              label={t("login.password")}
              type="password"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        {/* Submit button */}
        <Stack gap={2}>
          <MintButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isValid}
            fullWidth
            sx={{ textTransform: "none" }}
          >
            {t("login.submit")}
          </MintButton>

          <Stack gap={0.5} alignItems="flex-end">
            <Box display="flex" gap={0.5}>
              <MintTypography variant="body2" color="text.secondary">
                {t("login.notMember")}
              </MintTypography>
              <MintLink href="#" underline="hover" color="primary">
                {t("login.register")}
              </MintLink>
            </Box>

            <MintLink href="#" underline="hover" color="primary">
              {t("login.forgot")}
            </MintLink>
          </Stack>
        </Stack>
      </Box>
    </form>
  );
}
