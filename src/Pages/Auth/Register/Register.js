import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Spinner from "../../Shared/Spinner/Spinner";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [passwordError, setPassswordError] = useState("");

  const navigate = useNavigate();
  // create user with firebase book
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating] = useUpdateProfile(auth);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    if (user) {
      toast("User Created Successfully!");
      toast("Email Verification Sent!");
      navigate("/");
    }
  }, [user, navigate]);
  if (loading || updating) {
    return <Spinner />;
  }

  // create user and update profile
  const handleFormInput = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    // password validation
    if (password !== confirmPassword) {
      setPassswordError("Password does not match");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-anchor-placement="top-bottom"
      className="container my-5 "
    >
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-4 col-md-8 col-12 mx-auto">
          <div className="w-100 form-details p-4">
            <h1 className="mt-2 title ">Hello There,</h1>
            <h4 className="mb-3 title ">Register now to explore more</h4>
            <Form onSubmit={handleFormInput}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  ref={nameRef}
                  className=""
                  required
                  type="text"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  ref={emailRef}
                  className=""
                  required
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  ref={passwordRef}
                  required
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  ref={confirmPasswordRef}
                  required
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <p className="text-danger">{passwordError}</p>
              <p className="text-danger">
                {error?.message.includes("email-already-in-use")
                  ? "Email Already in use"
                  : ""}
              </p>
              <p className="my-3">
                Already have a account?
                <span>
                  <Link to="/login" className="text-color">
                    Log in
                  </Link>
                </span>
              </p>
              <button className="btn w-100 auth-btn-color text-white fw-bold rounded-pill">
                Register
              </button>
            </Form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
