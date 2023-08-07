import { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // sign in with email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  //send pass reset
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user);
  useEffect(() => {
    if (token) {
      toast.success("Logged in Successfully!");
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);
  if (loading || sending) {
    return <Loading></Loading>;
  }

  // handle for submit for sign in
  const handleSumbit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    await signInWithEmailAndPassword(email, password);
    // const { data } = await axios.post("https://infinity-electronics-gadget-server.vercel.app/login", { email });
    // localStorage.setItem("accessToken", data.accessToken);
    // navigate(from, { replace: true });
  };

  // rest password
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email,Please Reset Password");
    } else {
      toast("Please Enter Email");
    }
  };
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-anchor-placement="top-bottom"
      className="container login-container"
    >
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-4 col-md-8 col-12 mx-auto">
          <div className="w-100 form-details p-4">
            <h1 className="my-4 title">WELCOME BACK</h1>
            <Form onSubmit={handleSumbit}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  className=""
                  ref={emailRef}
                  required
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  required
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <p className="text-danger">
                {error?.message.includes("wrong-password")
                  ? "Wrong Password"
                  : ""}
              </p>
              <p className="text-danger">
                {error?.message.includes("user-not-found")
                  ? "User not found!"
                  : ""}
              </p>
              <h6 className="my-3">
                Forget Password?
                <span>
                  <Link
                    onClick={resetPassword}
                    to="/login"
                    className="text-color"
                  >
                    Reset Password
                  </Link>
                </span>
              </h6>
              <h6 className="my-3">
                Don't have a account?
                <span>
                  <Link to="/register" className="text-color">
                    Register
                  </Link>
                </span>
              </h6>

              <button className="btn w-100 auth-btn-color text-white fw-bold rounded-pill">
                Login
              </button>
            </Form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
