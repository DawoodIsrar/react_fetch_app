import React from "react";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const validationSchema = z
  .object({
    username: z.string().min(1, { message: "Name is required" }),
    email: z.string().email(),
    website: z.string().optional(),
    country: z.string(),
    password: z.string(),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });
const LibForm = () => {
  const { register, control, formState, handleSubmit, watch } = useForm({
    resolver: zodResolver(validationSchema),
  });
  watch((formData) => {
    console.log(formData);
  });
  const { field } = useController({ name: "country", control });
  const { errors } = formState;

  const onSave = (formData) => {
    console.log(formData); // Log form data
  };

  const handleSelectChange = (option) => {
    field.onChange(option.value);
  };

  return (
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
        <form
          onSubmit={handleSubmit((formData) => onSave(formData))}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>Username</label>
          <input {...register("username")} />
          <div style={{ color: "red" }}>{errors.username?.message}</div>

          <label>Email</label>
          <input {...register("email")} />
          <div style={{ color: "red" }}>{errors.email?.message}</div>

          <label>Password</label>
          <input {...register("password")} />
          <div style={{ color: "red" }}>{errors.password?.message}</div>

          <label>Confirm Password</label>
          <input {...register("confirm")} />
          <div style={{ color: "red" }}>{errors.confirm?.message}</div>

          <select {...register("country")} onChange={handleSelectChange}>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="Bangladesh">Bangladesh</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LibForm;
