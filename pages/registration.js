import Head from "next/head";
import { useRouter } from "next/router"
import * as Yup from "yup";
import * as userService from "../services/userService";
import auth from "../services/authService";
import { Form, Input, Button, Checkbox } from "../components/common/form";

const RegistrationValidationSchema = Yup.object().shape({
  name: Yup.string().required().min(6).label("Name"),
  email: Yup.string().required().email().label("Email"),
  isAdmin: Yup.boolean(),
  password: Yup.string().required().min(4).label("Password"),
});

const Registration = () => {

  const router = useRouter();
  
  const handleSumbit = async (user) => {
    try {
      const response = await userService.register(user);
      auth.loginWithJwt(response.headers["x-auth-token"]);

      if (user) {
        router.push({
          pathname: "/",
          //          query: { user },
        });
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
        <title>Registration page</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white">
          <Form
            initialValues={{
              name: "",
              email: "",
              isAdmin: false,
              password: "",
            }}
            onSubmit={handleSumbit}
            validationSchema={RegistrationValidationSchema}
          >
            <div className="px-6 py-4 pb-0">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Name
              </label>
              <Input name="name" placeholder="Alexander" type="text" />
            </div>
            <div className="px-6 py-4 pb-0">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email
              </label>
              <Input
                name="email"
                placeholder="example@example.com"
                type="email"
              />
            </div>
            <div className="px-6 py-4 pb-0">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <Input name="password" placeholder="qwerty" type="password" />
            </div>
            <div className="px-6 py-4 pb-0">
              <Checkbox name="isAdmin" label="As admin" />
            </div>
            <div className="px-6 py-6">
              <Button label="Registration" type="submit" />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Registration;
