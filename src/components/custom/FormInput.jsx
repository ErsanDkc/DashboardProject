import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormInput = ({
  control,
  name,
  label,
  type = "text",
  placeholder,
  className = "",
  disabled = false
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-gray-700">
            {label}
          </FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type={isPassword && showPassword ? "text" : type}
                placeholder={placeholder}
                disabled={disabled}
                className={`
                  px-4 py-3 h-12 rounded-xl
                  
                  // Varsayılan Border Rengi (Hata Durumu Öncelikli)
                  ${fieldState.error ? "border-red-500" : "border-gray-200"}
                  
                  // Password alanı için padding
                  ${isPassword ? "pr-12" : ""} 
                  ${className}
                  
                  // Odaklanma (Focus) Stilleri: Ring'i kaldır ve border rengini koru
                  focus-visible:ring-0 
                  focus-visible:ring-offset-0 
                  
                  // Odaklanmada (Focus) border renginin korunması
                  ${fieldState.error
                    ? "focus-visible:border-red-500"
                    : "focus-visible:border-gray-200"
                  }
                `}
                {...field}
              />
              {isPassword && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={disabled}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              )}
            </div>
          </FormControl>

          {fieldState.error && (
            <FormMessage className="text-sm text-red-500 mt-1">
              {fieldState.error.message}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

export default FormInput;