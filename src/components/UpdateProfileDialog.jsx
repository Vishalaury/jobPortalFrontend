// import { useState } from "react";
// import { Loader2 } from "lucide-react";

// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "./ui/dialog";

// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { useSelector } from "react-redux";

// const UpdateProfileDialog = ({ open, setOpen }) => {
//   const [loading, setLoading] = useState(false);
//   const {user} = useSelector(store=>store.auth);

//   const [input, setInput] = useState({
//   fullname: user?.fullname || "",
//   email: user?.email || "",
//   phonenumber: user?.phoneNumber || "",
//   bio: user?.profile?.bio || "",
//   skills: user?.profile?.skills?.join(", ") || "",
//   file: null,
// });


// const changeEventHandler = (e) =>{
//   setInput({...input,[e.target.name]:e.target.value});
// }

// const fileChangeHandler = (e) =>{
//   const file = e.target.files?.[0];
//   setInput({...input, file})
// }

// const submitHandler = (e) =>{
//   e.preventDefault();
//   const formData = new FormData();
//   formData.append("fullName", input.fullname);
//    formData.append("fullName", input.email);
//     formData.append("fullName", input.phonenumber);
//      formData.append("fullName", input.bio);
//       formData.append("fullName", input.skills);
//       if(input.file){
//         formData.append("file", input.file);
//       }try{
//         const res = await axios.post(`&{USER_API_END_POINT}/profile/update`, formData,{
//           headers:{
//             'Content-Type':'multipart/form-data'
//           }
//           withCredentials:true
//         });
//         if(res.data.success){
//           dispatch(setUser(res.data.user));
//           toast.error(error.response.data.message);
//         }
//         setOpen(false);
//         console.log(input);
//       }catch(error){

//       }
//       console.log(input);
// }

//   return (
//     <div>
//       <Dialog open={open}>
//         <DialogContent
//           className="sm:max-w-[425px]"
//           onInteractOutside={() => setOpen(false)}
//         >
//           <DialogHeader>
//             <DialogTitle>Update Profile</DialogTitle>
//           </DialogHeader>

//           <form  onSubmit={submitHandler}>
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="name" className="text-right">
//                   Name
//                 </Label>
//                 <Input id="name" name="name" type="text" value={input.fullname} onChange={changeEventHandler} className="col-span-3" />
//               </div>

//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="email" className="text-right">
//                   Email
//                 </Label>
//                 <Input id="email" name="email" type="email" value={input.email} onChange={changeEventHandler} className="col-span-3" />
//               </div>

//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="number" className="text-right">
//                   Number
//                 </Label>
//                 <Input id="number" name="number" value={input.phonenumber} onChange={changeEventHandler} className="col-span-3" />
//               </div>

//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="bio" className="text-right">
//                   Bio
//                 </Label>
//                 <Input id="bio" name="bio" value={input.bio}
//                 onChange={changeEventHandler} className="col-span-3" />
//               </div>

//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="skills" className="text-right">
//                   Skills
//                 </Label>
//                 <Input id="skills" name="skills" value={input.skills} onChange={changeEventHandler} className="col-span-3" />
//               </div>

//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="file" className="text-right">
//                   Resume
//                 </Label>
//                 <Input
//                   id="file"
//                   name="file"

//                   type="file"
//                   accept="application/pdf"
//                   onChange={fileChangeHandler}
//                   className="col-span-3"
//                 />
//               </div>
//             </div>

//          <DialogFooter>
//   {loading ? (
//     <Button className="w-full my-4 bg-slate-900 text-white hover:bg-slate-800">
//       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//       Please wait
//     </Button>
//   ) : (
//     <Button
//       type="submit"
//       className="w-full my-4 bg-slate-900 text-white hover:bg-slate-800"
//     >
//       Update
//     </Button>
//   )}
// </DialogFooter>


//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default UpdateProfileDialog;


// import { toast } from "sonner";

// import { useState } from "react";
// import { Loader2 } from "lucide-react";

// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "./ui/dialog";

// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { useSelector } from "react-redux";

// const UpdateProfileDialog = ({ open, setOpen }) => {
//   const [loading, setLoading] = useState(false);
//   const { user } = useSelector((store) => store.auth);

//   const [input, setInput] = useState({
//     fullname: user?.fullname || "",
//     email: user?.email || "",
//     phonenumber: user?.phoneNumber || "",
//     bio: user?.profile?.bio || "",
//     skills: user?.profile?.skills?.join(", ") || "",
//     file: null,
//   });

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const fileChangeHandler = (e) => {
//     const file = e.target.files?.[0];
//     setInput({ ...input, file });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("fullname", input.fullname);
//     formData.append("email", input.email);
//     formData.append("phonenumber", input.phonenumber);
//     formData.append("bio", input.bio);
//     formData.append("skills", input.skills);

//     if (input.file) {
//       formData.append("file", input.file);
//     }

//     try {
//       const res = await axios.post(
//         `${USER_API_END_POINT}/profile/update`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           withCredentials: true,
//         }
//       );

//       if (res.data.success) {
//         dispatch(setUser(res.data.user));
//         toast.success(res.data.message);
//         setOpen(false);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message);
//     } finally {
//       setLoading(false);
//     }

//     console.log(input);
//   };

//   return (
//     <div>
//       <Dialog open={open}>
//         <DialogContent
//           className="sm:max-w-[425px]"
//           onInteractOutside={() => setOpen(false)}
//         >
//           <DialogHeader>
//             <DialogTitle>Update Profile</DialogTitle>
//           </DialogHeader>

//           <form onSubmit={submitHandler}>
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label className="text-right">Name</Label>
//                 <Input
//                   name="fullname"
//                   value={input.fullname}
//                   onChange={changeEventHandler}
//                   className="col-span-3"
//                 />
//               </div>

//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label className="text-right">Email</Label>
//                 <Input
//                   name="email"
//                   type="email"
//                   value={input.email}
//                   onChange={changeEventHandler}
//                   className="col-span-3"
//                 />
//               </div>

//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label className="text-right">Number</Label>
//                 <Input
//                   name="phonenumber"
//                   value={input.phonenumber}
//                   onChange={changeEventHandler}
//                   className="col-span-3"
//                 />
//               </div>

//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label className="text-right">Bio</Label>
//                 <Input
//                   name="bio"
//                   value={input.bio}
//                   onChange={changeEventHandler}
//                   className="col-span-3"
//                 />
//               </div>

//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label className="text-right">Skills</Label>
//                 <Input
//                   name="skills"
//                   value={input.skills}
//                   onChange={changeEventHandler}
//                   className="col-span-3"
//                 />
//               </div>

//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label className="text-right">Resume</Label>
//                 <Input
//                   type="file"
//                   accept="application/pdf"
//                   onChange={fileChangeHandler}
//                   className="col-span-3"
//                 />
//               </div>
//             </div>

//             <DialogFooter>
//               {loading ? (
//                 <Button className="w-full my-4 bg-slate-900 text-white">
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Please wait
//                 </Button>
//               ) : (
//                 <Button
//                   type="submit"
//                   className="w-full my-4 bg-slate-900 text-white"
//                 >
//                   Update
//                 </Button>
//               )}
//             </DialogFooter>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default UpdateProfileDialog;


import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/utils/constants";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phonenumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "",
    file: null,
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phonenumber);

    formData.append("bio", input.bio);
    formData.append("skills", input.skills);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        setOpen(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:max-w-[425px]"
        aria-describedby={undefined}
        onInteractOutside={() => setOpen(false)}
      >
        <DialogHeader>
          <DialogTitle>Update Profile</DialogTitle>
        </DialogHeader>

        <form onSubmit={submitHandler}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Name</Label>
              <Input
                name="fullname"
                value={input.fullname}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Email</Label>
              <Input
                name="email"
                type="email"
                value={input.email}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Number</Label>
              <Input
                name="phonenumber"
                value={input.phonenumber}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Bio</Label>
              <Input
                name="bio"
                value={input.bio}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Skills</Label>
              <Input
                name="skills"
                value={input.skills}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Resume</Label>
              <Input
                type="file"
                accept="application/pdf"
                onChange={fileChangeHandler}
                className="col-span-3"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={loading}
              className="w-full my-4 bg-slate-900 text-white"
            >
              {loading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Update
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;
