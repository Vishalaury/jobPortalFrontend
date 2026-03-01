import React, { useState, useEffect } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: null,
  });

  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ page load pe spinner reset
  useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch]);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // basic validation
    if (
      !input.fullname ||
      !input.email ||
      !input.password ||
      !input.role
    ) {
      toast.error("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    // ✅ PROFILE PHOTO (IMPORTANT)
    if (input.file) {
      // formData.append("profilePhoto", input.file);
      formData.append("file", input.file);

    }

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `${USER_API_END_POINT}/register`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Signup failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

   useEffect(()=>{
      if(user){
        navigate("/");
      }
     },[])

  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md border border-gray-200 rounded-lg p-6"
        >
          <h1 className="font-bold text-2xl mb-6">Sign Up</h1>

          <Input
            name="fullname"
            placeholder="Full Name"
            value={input.fullname}
            onChange={changeEventHandler}
          />

          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={input.email}
            onChange={changeEventHandler}
            className="mt-3"
          />

          <Input
            name="phoneNumber"
            placeholder="Phone Number"
            value={input.phoneNumber}
            onChange={changeEventHandler}
            className="mt-3"
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={changeEventHandler}
            className="mt-3"
          />

          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Select Role</p>
            <RadioGroup className="flex gap-6">
              <Label className="flex items-center gap-2 cursor-pointer">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                />
                Student
              </Label>

              <Label className="flex items-center gap-2 cursor-pointer">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                />
                Recruiter
              </Label>
            </RadioGroup>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Profile Photo</p>
            <Input
              type="file"
              accept="image/*"
              onChange={changeFileHandler}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-5 bg-blue-600 text-white"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Please wait" : "Signup"}
          </Button>

          <p className="text-sm text-center mt-4">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-600 ml-1 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
