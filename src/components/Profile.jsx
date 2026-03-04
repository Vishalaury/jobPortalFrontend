// import { useState } from "react";
// import { useSelector } from "react-redux";

// import Navbar from "./shared/Navbar";
// import { Avatar, AvatarImage } from "./ui/avatar";
// import { Button } from "./ui/button";
// import Badge from "./ui/badge";
// import { Pen, Mail, Contact } from "lucide-react";
// import { Label } from "@radix-ui/react-label";
// import AppliedJobTable from "./AppliedJobTable";
// import UpdateProfileDialog from "./UpdateProfileDialog";

// const isResume = true;

// const Profile = () => {
//   const [open, setOpen] = useState(false);
//   const user = useSelector((store) => store.auth?.user);

//   return (
//     <div>
//       <Navbar />

//       <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
//         <div className="flex justify-between">
//           <div className="flex items-center gap-4">
//             <Avatar className="h-24 w-24">
//               <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
//             </Avatar>

//             <div>
//               <h1 className="font-medium text-xl">{user?.fullname}</h1>
//               <p>{user?.profile?.bio}</p>
//             </div>
//           </div>

//           <Button onClick={() => setOpen(true)} variant="outline">
//             <Pen />
//           </Button>
//         </div>

//         <div className="flex items-center gap-3 my-2">
//           <Mail />
//           <span>{user?.email}</span>
//         </div>

//         <div className="flex items-center gap-3 my-2">
//           <Contact />
//           <span>{user?.phoneNumber}</span>
//         </div>

//         <div className="max-w-7xl mx-auto">
//           <h1 className="font-semibold mb-2">Skills</h1>
//           {
//             user?.profile?.skills?.length > 0
//               ? user.profile.skills.map((item, index) => (
//                   <Badge key={index}>{item}</Badge>
//                 ))
//               : <span>NA</span>
//           }
//         </div>

//         <div className="grid w-full max-w-sm items-center gap-1">
//           <Label className="text-md font-bold">Resume</Label>
//           {
//             isResume ? (
//               <a
//                 href="https://linkedin.com/in/vishal-maurya-a95882278"
//                 className="text-blue-500 hover:underline"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 {user?.profile?.resumeoriginalname}
//               </a>
//             ) : (
//               <span>NA</span>
//             )
//           }
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto bg-white rounded-2xl">
//         <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
//         <AppliedJobTable />
//       </div>

//       <UpdateProfileDialog open={open} setOpen={setOpen} />
//     </div>
//   );
// };

// export default Profile;



// import { useState } from "react";
// import { useSelector } from "react-redux";

// import Navbar from "./shared/Navbar";
// import { Avatar, AvatarImage } from "./ui/avatar";
// import { Button } from "./ui/button";
// import {Badge} from "./ui/badge";
// import { Pen, Mail, Contact } from "lucide-react";
// import { Label } from "@radix-ui/react-label";
// import AppliedJobTable from "./AppliedJobTable";
// import UpdateProfileDialog from "./UpdateProfileDialog";
// import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

// const Profile = () => {
//   useGetAppliedJobs();
//   const [open, setOpen] = useState(false);
//   const user = useSelector((store) => store.auth?.user);

//   const isResume = user?.profile?.resume; //  FIX (dynamic)

//   return (
//     <div>
//       <Navbar />

//       <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
//         <div className="flex justify-between">
//           <div className="flex items-center gap-4">
//             <Avatar className="h-24 w-24">
//               <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
//             </Avatar>

//             <div>
//               <h1 className="font-medium text-xl">{user?.fullname}</h1>
//               <p>{user?.profile?.bio}</p>
//             </div>
//           </div>

//           <Button onClick={() => setOpen(true)} variant="outline">
//             <Pen />
//           </Button>
//         </div>

//         <div className="flex items-center gap-3 my-2">
//           <Mail />
//           <span>{user?.email}</span>
//         </div>

//         <div className="flex items-center gap-3 my-2">
//           <Contact />
//           <span>{user?.phoneNumber}</span>
//         </div>

//         <div className="max-w-7xl mx-auto">
//           <h1 className="font-semibold mb-2">Skills</h1>
//           {user?.profile?.skills?.length > 0
//             ? user.profile.skills.map((item, index) => (
//                 <Badge key={index}>{item}</Badge>
//               ))
//             : <span>NA</span>
//           }
//         </div>

//         <div className="grid w-full max-w-sm items-center gap-1">
//           <Label className="text-md font-bold">Resume</Label>

//           {isResume ? (
//             <a
//               href={user.profile.resume}              // FIX
//               className="text-blue-500 hover:underline"
//               target="_blank"
//               rel="noreferrer"
//             >
//               {user.profile.resumeOriginalName}       
//             </a>
//           ) : (
//             <span>NA</span>
//           )}
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto bg-white rounded-2xl">
//         <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
//         <AppliedJobTable />
//       </div>

//       <UpdateProfileDialog open={open} setOpen={setOpen} />
//     </div>
//   );
// };

// export default Profile;







import { useState } from "react";
import { useSelector } from "react-redux";

import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Pen, Mail, Contact } from "lucide-react";
import { Label } from "@radix-ui/react-label";

import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const Profile = () => {
  useGetAppliedJobs();

  const [open, setOpen] = useState(false);
  const user = useSelector((store) => store.auth?.user);

  const isResume = user?.profile?.resume;

  return (
    <div>
      <Navbar />

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">

        <div className="flex justify-between">
          <div className="flex items-center gap-4">

            <Avatar className="h-24 w-24">
              <AvatarImage
                src={
                  user?.profile?.profilePhoto ||
                  "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                }
              />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio || "No bio available"}</p>
            </div>
          </div>

          <Button onClick={() => setOpen(true)} variant="outline">
            <Pen />
          </Button>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 my-2">
          <Mail />
          <span>{user?.email}</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 my-2">
          <Contact />
          <span>{user?.phoneNumber}</span>
        </div>

        {/* Skills */}
        <div className="max-w-7xl mx-auto">
          <h1 className="font-semibold mb-2">Skills</h1>

          {user?.profile?.skills?.length > 0 ? (
            user.profile.skills.map((skill, index) => (
              <Badge key={index} className="mr-2">
                {skill}
              </Badge>
            ))
          ) : (
            <span>NA</span>
          )}
        </div>

        {/* Resume */}
        <div className="grid w-full max-w-sm items-center gap-1 mt-3">
          <Label className="text-md font-bold">Resume</Label>

          {isResume ? (
            <a
              href={`https://docs.google.com/viewer?url=${user.profile.resume}&embedded=true`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {user.profile.resumeOriginalName || "View Resume"}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>

      </div>

      {/* Applied Jobs */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-4">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobTable />
      </div>

      {/* Update Profile Dialog */}
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;