import { type GetServerSideProps } from "next";
import { Input, PasswordInput, Stack, Grid, Button, Title } from '@mantine/core';
import { getCsrfToken } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

interface LoginFormData {
    email: string;
    password: string;
}

interface SigninProps {
  csrfToken: string
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
    props: {
      csrfToken: await getCsrfToken(ctx),
    },
  });


const Signin = ({ csrfToken }: SigninProps) => {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = async ({email, password}: LoginFormData) => {
    try {
        const res = await signIn("credentials", { email, password });
        console.log(res);
    } catch {
        console.log("something went wrong!");
    }

  }

  return (
    <Grid justify="center" mt={100}>
    <Grid.Col span={3}>
        <Stack>
          <Title order={1}>loginTitle</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <Input.Wrapper>
                  <Input {...register("email")}  placeholder="emailPlaceholder"  />
                </Input.Wrapper>
                <Input.Wrapper>
                  <PasswordInput {...register("password")} placeholder="passwordPlaceholder" />
                </Input.Wrapper>
              <Button type="submit">loginButton</Button>
            </Stack>
          </form>
        </Stack>
    </Grid.Col>
</Grid>
  );
};

export default Signin;