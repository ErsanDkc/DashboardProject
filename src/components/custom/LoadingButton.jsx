import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const LoadingButton = ({
    children,
    loading = false,
    className = "",
    ...props
}) => {
    return (
        <Button
            disabled={loading}
            className={className}
            {...props}
        >
            {loading ?

                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {children}


        </Button>
    );
};

export default LoadingButton;