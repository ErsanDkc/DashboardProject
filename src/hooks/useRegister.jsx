import { useMutation } from "@tanstack/react-query";
import { registerRequest } from "@/services/apis";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate()
  const { login } = useAuth();

  return useMutation({
    mutationFn: registerRequest,
    onSuccess: (data) => {
      navigate("/signin")
    },
    onError: (e) => {
      toast.error(e.response?.data?.message)

    }
  });
};
