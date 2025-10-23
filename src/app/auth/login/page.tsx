"use client";

import { Box, Stack, useTheme } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// If you don’t have design-system components yet, you can temporarily replace them with MUI components
import {
  Button as MintButton,
  TextField as MintTextField,
  Typography as MintTypography,
  Link as MintLink,
  Alert as MintAlert,
} from "@mui/material";

// Validation schema
const Schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export type TScheme = yup.InferType<typeof Schema>;

export default function Login() {
  const theme = useTheme();
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
          Login
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
          Please enter your credentials to continue
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
              label="Username"
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
              label="Password"
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
            Login
          </MintButton>

          <Stack gap={0.5} alignItems="flex-end">
            <Box display="flex" gap={0.5}>
              <MintTypography variant="body2" color="text.secondary">
                Not a member?
              </MintTypography>
              <MintLink href="#" underline="hover" color="primary">
                Register
              </MintLink>
            </Box>

            <MintLink href="#" underline="hover" color="primary">
              Forgot ID or Password?
            </MintLink>
          </Stack>
        </Stack>
      </Box>
    </form>
  );
}
