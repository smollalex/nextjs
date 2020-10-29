import { useState } from "react";
import Head from "next/head";
import * as Yup from "yup";

import auth from "../services/authService";
import { Form, Input, Button } from "../components/common/form";

import { useRouter } from "next/router";

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Login = () => {
 
  const router = useRouter();

  const handleSumbit = async ({ email, password }) => {
    try {
      
      await auth.login(email, password);
      const user = auth.getCurrentUser();

      if (user) {
        router.push({
          pathname: '/',
//          query: { user },
        })
      }
    } catch (error) {
      
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = error.response.data;
        setErrors({ errors });
      }
    }
  };

  return (
    <>
      <Head>
        <title>Login page</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-8">
            <Form
              initialValues={{ email: "", password: "" }}
              onSubmit={handleSumbit}
              validationSchema={LoginValidationSchema}
            >
              <div className="mb-2">
                <Input
                  name="email"
                  placeholder="example@example.com"
                  type="email"
                />
              </div>
              <div className="mb-2">
                <Input name="password" placeholder="qwerty" type="password" />
              </div>
              <div className="mt-6">
                <Button label="Login" type="submit" />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
