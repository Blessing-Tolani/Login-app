import Head from "next/head";
import React, { useRef } from "react";

import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data, e) => {
    e.target.reset();
    alert(JSON.stringify(data));
  };

  return (
    <div className="formdiv">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className="font-semibold text-sm">
          Email
        </label>
        <input
          className="in w3-padding-16 mt-2"
          placeholder="ojotolani3@gmail.com"
          type="email"
          {...register("email", { required: "You must input an email" })}
        />
        <br />
        <label className="font-semibold text-sm">Password</label>
        <input
          className="in w3-padding-16 mt-2"
          type="password"
          {...register("password", {
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        <label className="font-semibold text-sm">Confirm password</label>
        <input
          className="in w3-padding-16 mt-2"
          type="password"
          {...register("confirmpassword", {
            validate: (value) =>
              value === password.current || "The passwords do not match",
          })}
        />
        {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
        <br />
        <div className="flex justify-center">
          <input type="submit" className="submitbutton" />
        </div>
      </form>
    </div>
  );
}
