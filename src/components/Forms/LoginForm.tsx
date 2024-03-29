import { FC } from "react";
import { useForm } from "react-hook-form";
import { BoxProps, Button } from "@mui/material";

import { FormRow, FormTextInput, FormWrapper } from "./Atoms";

interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  maxWidth?: BoxProps["maxWidth"];
  onSubmit: (data: LoginFormValues) => void;
}

export const LoginForm: FC<LoginFormProps> = ({ maxWidth, onSubmit }) => {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)} maxWidth={maxWidth}>
      <FormRow>
        <FormTextInput
          required
          type="email"
          label="Email"
          {...register("email")}
        />
      </FormRow>
      <FormRow>
        <FormTextInput
          required
          type="password"
          label="Password"
          {...register("password")}
        />
      </FormRow>

      <FormRow mt={6}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </FormRow>
    </FormWrapper>
  );
};
