import "./login.css";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmitt = (event) => {
  //   event.preventDefault();
  //   // Perform form submission logic or API call here
  //   console.log(formData);
  // };
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log("getValues()", getValues());

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [id, setId] = useState();

  console.log("email", email);
  const handleformsubmit = async () => {
    const datas = {
      Firstname: getValues().Firstname,
      Lastname: getValues().Lastname,
      Email: getValues().Email,
      Password: getValues().Password,
    };
    await axios.post("http://localhost:8080/signup/create", datas).then((e) => {
      console.log("e", e.data.data);
      alert(e.data.message);
      handleValue();
      setEmail(e.data.data.Email);
      setId(e.data.data._id);
    });
  };
  const handleValue = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("id", id);
    localStorage.setItem("isLoggedin", true);
    navigate("/");
  };
  
  return (
    <>
      <section className="loginbg">
        <div className="login-container">
          <h1>Form</h1>
          {/* <form>
          <Box
            className="box"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
          <input {...register("firstName", { required: true })} />
          {errors?.firstName && <span>This field is required</span>}
          <TextField id="outlined-basic" label="Lastname" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button className="btn" onClick={() => handleSubmit()}>
            Submit
          </Button>
          </Box>
        </form> */}
          <form onSubmit={handleSubmit(handleformsubmit, onSubmit)}>
            <div className="form-group">
              <label htmlFor="Firstname">Firstname</label>
              <input
                type="text"
                {...register("Firstname", { required: true })}
              />
              {errors.Firstname && (
                <span className="error-message">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="Lastname">Lastname</label>
              <input
                type="text"
                {...register("Lastname", { required: true })}
              />
              {errors.Lastname && (
                <span className="error-message">This field is required</span>
              )}
            </div>{" "}
            <div className="form-group">
              <label htmlFor="email">Email</label>{" "}
              <input type="email" {...register("Email", { required: true })} />
              {errors.Email && (
                <span className="error-message">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>{" "}
              <input
                type="password"
                {...register("Password", { required: true })}
              />
              {errors.Password && (
                <span className="error-message">This field is required</span>
              )}
            </div>
            <input className="button1" type="submit" />
          </form>{" "}
        </div>
      </section>
    </>
  );
};

export default Login;
