import React, { useEffect } from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import facebook from "../../../Images/facebook.png";
import github from "../../../Images/github.png";
import google from "../../../Images/google.png";
import "./SocialLogin.css";
const SocialLogin = () => {
  let errorElement;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // login with google using firebase hook
  const [signInWithGoogle, googleUser, , googleError] =
    useSignInWithGoogle(auth);

  // login with github using firebase hook
  const [signInWithGithub, githubUser, , githubError] =
    useSignInWithGithub(auth);

  // handle error for google and github log in
  if (googleError || githubError) {
    errorElement = (
      <p className="text-danger text-center mt-2">
        Error:
        {googleError?.message.includes("popup-closed-by-user") ||
        githubError?.message.includes("popup-closed-by-user")
          ? "Popup Closed by user!"
          : ""}
      </p>
    );
  }
  useEffect(() => {
    if (googleUser || githubUser) {
      toast.success("Logged in Successfully!");
      navigate(from, { replace: true });
    }
  }, [googleUser, navigate, githubUser, from]);

  // function to sign in google
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div>
      {errorElement}
      <h6 className="text-center my-3">Or Sign in with</h6>
      <div className="d-flex align-items-center justify-content-center">
        <img
          onClick={handleGoogleSignIn}
          className="mx-2 logos"
          width={40}
          src={google}
          alt=""
        />
        <img
          className="logos"
          onClick={() => signInWithGithub()}
          width={40}
          src={github}
          alt=""
        />
        <img className="mx-2 logos" width={40} src={facebook} alt="" />
      </div>
    </div>
  );
};

export default SocialLogin;
