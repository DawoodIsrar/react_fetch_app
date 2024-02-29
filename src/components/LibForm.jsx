import React from "react";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers";

import { string, z } from "zod";

const schema = z.object({
  username: string(),
  email: string().email(),
  //   password: string().password(),
});
const LibForm = () => {
  const { register, control, formState, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  const { field } = useController({ name: "country", control });
  const { errors } = formState;
  const onSave = (e, formValues) => {
    e.preventDefault();
    console.log(formValues);
  };
  const handleSelectChange = (option) => {
    field.onChange(option.value);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ color: "white" }}>React library form</h1>
          <form onSubmit={handleSubmit((e) => onSave(e))}>
            <label>Username</label>
            <input {...register("username")}></input>
            {errors.username?.message && (
              <div style={{ color: "red" }}>{errors.username?.message}</div>
            )}
            {}
            <label>Email</label>
            <input {...register("email")}></input>
            <label>Password</label>
            <input {...register("password")}></input>
            <label>Confirm Password</label>
            <input {...register("confirmPassword")}></input>
            <select
              //   value={field.value}
              //   onChange={handleSelectChange}
              {...register("country")}
            >
              {" "}
              select country
              <option>Pakistan</option>
              <option>India</option>
              <option>Bangladesh</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LibForm;
