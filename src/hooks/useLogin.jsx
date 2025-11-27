import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "@/services/apis";
import { toast } from "react-toastify";

export const useLogin = () => {
    const { login } = useAuth();
    const navigate = useNavigate()

    return useMutation({
        mutationFn: loginRequest,
        onSuccess: (data) => {
            login(data);
            navigate("/dashboard")
        },
        onError:(e)=>{
            console.log(e);
            toast.error(e.response?.data?.message)
            
        }
    });
};
