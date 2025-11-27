import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      //   theme={theme?.palette?.mode}
      // bodyStyle={{ color: "#fff" }}
      stacked // birden fazla toast'ı göstermez
    />
  );
}

export default Toast;