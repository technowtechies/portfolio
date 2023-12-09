import React from "react";
import { Box, TextField, Button } from "@mui/material";
import logo from "../Assests/logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import API from "../Utils/API";
import { toast } from "react-toastify";
import axios from "axios";
function AddCutomer() {
  const schema = yup
    .object({
      Name: yup.string("Letter Only!").required("Required!"),
      email: yup.string("Letter Only!").required("Required!"),
      city: yup.string("Letter Only!"),
      CarNumber: yup.string(""),
      Location: yup.string("Text Only!"),
      State: yup.string("Text Only!"),
      PhoneNumber: yup.string("Text").required("Required!"),
      model: yup.string("Number Only"),
      pincode: yup.string(""),
      message: yup.string(""),
    })
    .required();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      Name: "",
      email: "",
      city: "",
      CarNumber: "",
      State: "",
      Location: "",
      PhoneNumber: "",
      pincode: "",
      model: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    CreateCustome(data);
    reset();
  };
  const CreateCustome = async (value) => {
    try {
      const { data } = await axios.post(API.API_HOST + API.ADDCUSTOMER, {
        value,
      });
      console.log(data);
      toast.success(data?.messsage);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={700}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"auto"}
          marginTop={5}
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <img
            src={logo}
            alt=""
            className="w-[150px] h-[100px]  xl:w-[175px] xl:h-[300px]  object-cover xl:object-contain   "
          />
          <TextField
            label="Name"
            id="outlined-size-small"
            placeholder="Name"
            size="small"
            fullWidth
            margin="normal"
            sx={{
              boxShadow: {
                boxShadow: "5px 5px 10px #ccc",
              },
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
            {...register("Name", {
              required: {
                value: true,
                message: "Customer Name Required!",
              },
            })}
          />
          <p className="text-xs text-red-500 text-left font-semibold mt-2">
            {errors?.Name?.message}
          </p>
          <TextField
            label="Email"
            id="outlined-size-small"
            placeholder="email"
            size="small"
            fullWidth
            margin="normal"
            sx={{
              boxShadow: {
                boxShadow: "5px 5px 10px #ccc",
              },
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
            {...register("email", {
              required: {
                value: true,
                message: "Email Required!",
              },
            })}
          />
          <p className="text-xs text-red-500 font-semibold mt-2 text-left">
            {errors?.email?.message}
          </p>
          <TextField
            label="Contact"
            id="outlined-size-small"
            placeholder="+91XXXXXXXXXX"
            size="small"
            fullWidth
            margin="normal"
            sx={{
              boxShadow: {
                boxShadow: "5px 5px 10px #ccc",
              },
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
            {...register("PhoneNumber", {
              required: {
                value: true,
                message: "Phone Number Required!",
              },
            })}
          />
          <p className="text-xs text-red-500 font-semibold mt-2 text-left">
            {errors?.PhoneNumber?.message}
          </p>
          <TextField
            label="Vechile Reg No"
            id="outlined-size-small"
            placeholder="Vechile Reg No"
            size="small"
            fullWidth
            margin="normal"
            sx={{
              boxShadow: {
                boxShadow: "5px 5px 10px #ccc",
              },
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
            {...register("CarNumber", {
              required: {
                value: true,
                message: "Car Number Required!",
              },
            })}
          />
          <p className="text-xs text-red-500 font-semibold mt-2 text-left">
            {errors?.CarNumber?.message}
          </p>
          <TextField
            label="Vechile Model"
            id="outlined-size-small"
            placeholder="Vechile Model"
            size="small"
            fullWidth
            margin="normal"
            sx={{
              boxShadow: {
                boxShadow: "5px 5px 10px #ccc",
              },
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
            {...register("model", {
              required: {
                value: true,
                message: "Car Model Required!",
              },
            })}
          />
          <TextField
            label="City"
            id="outlined-size-small"
            placeholder="city"
            size="small"
            fullWidth
            margin="normal"
            sx={{
              boxShadow: {
                boxShadow: "5px 5px 10px #ccc",
              },
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
            {...register("city", {
              required: {
                value: true,
                message: "City Required!",
              },
            })}
          />{" "}
          <p className="text-xs text-red-500 font-semibold mt-2 text-left">
            {errors?.city?.message}
          </p>
          <TextField
            label="State"
            id="outlined-size-small"
            placeholder="state"
            size="small"
            fullWidth
            margin="normal"
            sx={{
              boxShadow: {
                boxShadow: "5px 5px 10px #ccc",
              },
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
            {...register("State", {
              required: {
                value: true,
                message: "City Required!",
              },
            })}
          />
          <p className="text-xs text-red-500 font-semibold mt-2 text-left">
            {errors?.city?.message}
          </p>
          <TextField
            label="Location"
            id="outlined-size-small"
            placeholder="location"
            size="small"
            fullWidth
            margin="normal"
            sx={{
              boxShadow: {
                boxShadow: "5px 5px 10px #ccc",
              },
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
            {...register("Location", {
              required: {
                value: true,
                message: "Location Required!",
              },
            })}
          />
          <p className="text-xs text-red-500 font-semibold mt-2 text-left">
            {errors?.Location?.message}
          </p>
          <TextField
            label="PinCode"
            id="outlined-size-small"
            placeholder="pincode"
            size="small"
            fullWidth
            margin="normal"
            sx={{
              boxShadow: {
                boxShadow: "5px 5px 10px #ccc",
              },
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
            {...register("pincode", {
              required: {
                value: true,
                message: "pincode Required!",
              },
            })}
          />
          <p className="text-xs text-red-500 font-semibold mt-2 text-left">
            {errors?.pincode?.message}
          </p>
          <TextField
            id="filled-multiline-static"
            label="Say About Us!"
            multiline
            rows={4}
            placeholder="Anything You Want to Say About Us ?"
            size="small"
            margin="normal"
            fullWidth
            sx={{
              boxShadow: {
                boxShadow: "5px 5px 10px #ccc",
              },
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
            {...register("message", {
              required: {
                value: true,
                message: "pincode Required!",
              },
            })}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              margin: {
                margin: "20px",
              },
            }}
          >
            Submit
          </Button>
          <p className="text-center mt-2">
            Powered by
            <a
              href="https://www.technowtechies.com"
              target="_blank"
              className="text-base font-bold"
            >
              TechNowTechies
            </a>
          </p>
        </Box>
      </form>
    </div>
  );
}

export default AddCutomer;
