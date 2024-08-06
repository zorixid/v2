import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = {
  success: (text: any, duration = 3000) => {
    toast.success(text, { autoClose: duration });
  },
  info: (text: any, duration = 2000) =>
    toast.info(text, { autoClose: duration }),
  error: (text: any, duration = 2000) =>
    toast.error(text, { autoClose: duration }),
  warning: (text: any, duration = 2000) =>
    toast.warning(text, { autoClose: duration }),
};
export const ToastrContext = React.createContext(notify);

const ToastrProvider = (props: any) => {
  return (
    <ToastrContext.Provider value={notify}>
      {props.children}
      <ToastContainer
        position="top-center"
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={"bg-gold-main/70 text-black/60 backdrop-blur-sm"}
        className={"min-w-full sm:min-w-fit"}
      />
    </ToastrContext.Provider>
  );
};

export default ToastrProvider;
