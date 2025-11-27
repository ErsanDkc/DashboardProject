import { z } from "zod";
import AuthLayout from "./AuthLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "@/hooks/useLogin";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import LoadingButton from "./custom/LoadingButton";
import FormInput from "./custom/FormInput";

const signInSchema = z.object({
  email: z.string()
    .min(1, "Email adresi gereklidir")
    .email("Geçerli bir email adresi giriniz"),
  password: z.string()
    .min(1, "Şifre gereklidir")
    .min(6, "Şifre en az 6 karakter olmalıdır"),
});

const SignInForm = () => {
  const { mutate, isPending, error } = useLogin();
  
  const form = useForm({
    resolver: zodResolver(signInSchema),
    mode:"all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <AuthLayout
      title="Sign In"
      subtitle="Welcome back! Please enter your details"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormInput
            control={form.control}
            name="email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            disabled={isPending}
          />

          <FormInput
            control={form.control}
            name="password"
            label="Password"
            type="password"
            placeholder="●●●●●●●"
            disabled={isPending}
          />

          <LoadingButton
            type="submit"
            loading={isPending}
            className="w-full h-12 bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold rounded-xl"
          >
            Sign In
          </LoadingButton>

          <Button
            type="button"
            variant="outline"
            disabled={isPending}
            className="w-full h-12 rounded-xl hover:bg-gray-50"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="h-5 mr-2"
              alt="Google"
            />
            Sign in with Google
          </Button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?
            <Link
              to="/signup"
              className="text-lime-600 ml-1 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </Form>
    </AuthLayout>
  );
};

export default SignInForm;