import { useRegister } from "@/hooks/useRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "./custom/FormInput";
import LoadingButton from "./custom/LoadingButton";

const signUpSchema = z.object({
  fullName: z.string().min(2, "Geçerli bir ad giriniz"),
  email: z.string().email("Geçerli bir email adresi giriniz."),
  password: z.string().min(6, "En az 6 karakter giriniz"),
});

const SignUpForm = () => {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const { mutate, isPending, error } = useRegister();

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <AuthLayout title="Create new account" subtitle="Please enter your details">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormInput
            control={form.control}
            name="fullName"
            label="Full Name"
            placeholder="John Doe"
          />

          <FormInput
            control={form.control}
            name="email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
          />

          <FormInput
            control={form.control}
            name="password"
            label="Password"
            type="password"
            placeholder="●●●●●●●"
          />

          <LoadingButton
            type="submit"
            loading={isPending}
            className="w-full h-12 bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold rounded-xl"
          >
            Create Account
          </LoadingButton>

          <Button
            type="button"
            variant="outline"
            className="w-full h-12 rounded-xl hover:bg-gray-50"
            disabled={isPending}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="h-5 mr-2"
              alt="Google"
            />
            Sign up with Google
          </Button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?
            <Link to="/signin" className="text-lime-600 ml-1 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </Form>
    </AuthLayout>
  );
};

export default SignUpForm;