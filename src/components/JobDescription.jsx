// import React, { useEffect } from "react";
// // import { Badge } from "./ui/badge";
// import { Button } from "./ui/button";
// import Badge from "./ui/badge";
// import axios from 'axios';
// import { JOB_API_END_POINT } from "@/utils/constants";
// import { useDispatch } from "react-redux";
// // import useGetSingleJob from "@/hooks/useGetSingleJob";

// const JobDescription = () => {
//   const isApplied = true;
//   const params = useparams();
//   const jobId = params.id;
//   const {setSingleJob} = useSelector(store=>store.job);
//   const dispatch = useDispatch();
//   useEffect(() => {
//   const fetchSingleJob = async () => {
//     try {
//       const res = await axios.get(
//         `${JOB_API_END_POINT}/get/${jobId}`,
//         { withCredentials: true }
//       );

//       if (res.data.success) {
//         dispatch(setSingleJob(res.data.jobs));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchSingleJob();
// }, [jobId,dispatch, user?._id]);


//   return (
//     <div className="max-w-7xl mx-auto my-10">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="font-bold text-xl">{singleJob?.title}</h1>

//           <div className="flex items-center gap-2 mt-4">
//             <Badge
//               className="text-blue-700 font-bold"
//               variant="ghost"
//             >{singleJob?.position}
//               12 Positions
//             </Badge>

//             <Badge
//               className="text-[#F83002] font-bold"
//               variant="ghost"
//             >{singleJob?.jobType}
//               Part Time
//             </Badge>

//             <Badge
//               className="text-[#7209B7] font-bold"
//               variant="ghost"
//             >{singleJob?.salary}
//               24 LPA
//             </Badge>
//           </div>
//         </div>

//         <Button
//           disabled={isApplied}
//           className={`rounded-lg ${
//             isApplied
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-[#7209B7] hover:bg-[#5f32ad]"
//           }`}
//         >
//           {isApplied ? "Already Applied" : "Apply Now"}
//         </Button>
//       </div>

//       <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
//         Job Description
//       </h1>

//       <div className="my-4">
//         <h1 className="font-bold my-1">
//           Role:
//           <span className="pl-4 font-normal text-gray-800">
//             {singleJob?.title}
//           </span>
//         </h1>

//         <h1 className="font-bold my-1">
//           Location:
//           <span className="pl-4 font-normal text-gray-800">
//             Hyderabad
//           </span>
//         </h1>

//         <h1 className="font-bold my-1">
//           Description:
//           <span className="pl-4 font-normal text-gray-800">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </span>
//         </h1>

//         <h1 className="font-bold my-1">
//           Experience:
//           <span className="pl-4 font-normal text-gray-800">
//             2 yrs
//           </span>
//         </h1>

//         <h1 className="font-bold my-1">
//           Salary:
//           <span className="pl-4 font-normal text-gray-800">
//             24 LPA
//           </span>
//         </h1>

//         <h1 className="font-bold my-1">
//           Total Applicants:
//           <span className="pl-4 font-normal text-gray-800">
//             4
//           </span>
//         </h1>

//         <h1 className="font-bold my-1">
//           Posted Date:
//           <span className="pl-4 font-normal text-gray-800">
//             17-07-2024
//           </span>
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default JobDescription;


// import React, { useEffect } from "react";
// import { Button } from "./ui/button";
// import Badge from "./ui/badge";
// import axios from "axios";
// import { JOB_API_END_POINT } from "@/utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { setSingleJob } from "@/redux/jobSlice";

// const JobDescription = () => {
//   const { id: jobId } = useParams();
//   const dispatch = useDispatch();

//   const { singleJob } = useSelector((store) => store.job);
//   const { user } = useSelector((store) => store.auth); // ✅ FIX

//   const isApplied =
//     singleJob?.applications?.some(
//       (application) => application.applicant === user?._id
//     ) || false;

//     const applyJobHandler = async () =>{
//       try{
//         const res = await axios.get(`&{APPLICATION_API_END_POINT}/apply/&{jobId}`);
//         if(res.data.success){
//           toast.success(res.data.message);
//         }
//       }catch(error){
//           console.log(error);
//           toast.error(error.response.data.message);
//       }
//     }



//   useEffect(() => {
//     const fetchSingleJob = async () => {
//       try {
//         const res = await axios.get(
//           `${JOB_API_END_POINT}/get/${jobId}`,
//           { withCredentials: true }
//         );

//         if (res.data.success) {
//           dispatch(setSingleJob(res.data.job));
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchSingleJob();
//   }, [jobId, dispatch]);

//   return (
//     <div className="max-w-7xl mx-auto my-10">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="font-bold text-xl">{singleJob?.title}</h1>

//           <div className="flex items-center gap-2 mt-4">
//             <Badge className="text-blue-700 font-bold" variant="ghost">
//               {singleJob?.position}
//             </Badge>

//             <Badge className="text-[#F83002] font-bold" variant="ghost">
//               {singleJob?.jobType}
//             </Badge>

//             <Badge className="text-[#7209B7] font-bold" variant="ghost">
//               {singleJob?.salary} LPA
//             </Badge>
//           </div>
//         </div>

//         <Button
//           disabled={isApplied}
//           className={`rounded-lg ${
//             isApplied
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-[#7209B7] hover:bg-[#5f32ad]"
//           }`}
//         >
//           {isApplied ? "Already Applied" : "Apply Now"}
//         </Button>
//       </div>

//       <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
//         Job Description
//       </h1>

//       <div className="my-4 space-y-2">
//         <p><b>Role:</b> {singleJob?.title}</p>
//         <p><b>Location:</b> {singleJob?.location}</p>
//         <p><b>Description:</b> {singleJob?.description}</p>
//         <p><b>Experience:</b> {singleJob?.experienceLevel} yrs</p>
//         <p><b>Salary:</b> {singleJob?.salary} LPA</p>
//         <p><b>Total Applicants:</b> {singleJob?.applications?.length}</p>
//         <p><b>Posted Date:</b> {singleJob?.createdAt?.split("T")[0]}</p>
//       </div>
//     </div>
//   );
// };

// export default JobDescription;




// import React, { useEffect } from "react";
// import { Button } from "./ui/button";
// import Badge from "./ui/badge";
// import axios from "axios";
// import { JOB_API_END_POINT, APPLICATION_API_END_POINT } from "@/utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { setSingleJob } from "@/redux/jobSlice";
// import { toast } from "sonner";

// const JobDescription = () => {
//   const { id: jobId } = useParams();
//   const dispatch = useDispatch();

//   const { singleJob } = useSelector((store) => store.job);
//   const { user } = useSelector((store) => store.auth);

//   const isIntiallyApplied =
//     singleJob?.applications?.some(
//       (application) => application.applicant === user?._id
//     ) || false;

//    const [isApplied, setIsApplied] = useState(isIntiallyApplied);

//   const applyJobHandler = async () => {
//     try {
//       const res = await axios.get(
//         `${APPLICATION_API_END_POINT}/apply/${jobId}`,
//         { withCredentials: true }
//       );

//       if (res.data.success) {
//         setIsApplied(true);
//         const updateSingleJob = {...singleJob, applications,{applicant:user?._id}}}
//         dispatch(setSingleJob(updateSingleJob));
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message);
//     }
//   };

//   useEffect(() => {
//     const fetchSingleJob = async () => {
//       try {
//         const res = await axios.get(
//           `${JOB_API_END_POINT}/get/${jobId}`,
//           { withCredentials: true }
//         );

//         if (res.data.success) {
//           dispatch(setSingleJob(res.data.job));
//           setIsApplied(res.data.applications.some(application=>application.===user?._id))
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchSingleJob();
//   }, [jobId, dispatch]);

//   return (
//     <div className="max-w-7xl mx-auto my-10">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="font-bold text-xl">{singleJob?.title}</h1>

//           <div className="flex items-center gap-2 mt-4">
//             <Badge className="text-blue-700 font-bold" variant="ghost">
//               {singleJob?.position}
//             </Badge>

//             <Badge className="text-[#F83002] font-bold" variant="ghost">
//               {singleJob?.jobType}
//             </Badge>

//             <Badge className="text-[#7209B7] font-bold" variant="ghost">
//               {singleJob?.salary} LPA
//             </Badge>
//           </div>
//         </div>

//         <Button
//           disabled={isApplied}
//           onClick={applyJobHandler}
//           className={`rounded-lg ${
//             isApplied
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-[#7209B7] hover:bg-[#5f32ad]"
//           }`}
//         >
//           {isApplied ? "Already Applied" : "Apply Now"}
//         </Button>
//       </div>

//       <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
//         Job Description
//       </h1>

//       <div className="my-4 space-y-2">
//         <p><b>Role:</b> {singleJob?.title}</p>
//         <p><b>Location:</b> {singleJob?.location}</p>
//         <p><b>Description:</b> {singleJob?.description}</p>
//         <p><b>Experience:</b> {singleJob?.experienceLevel} yrs</p>
//         <p><b>Salary:</b> {singleJob?.salary} LPA</p>
//         <p><b>Total Applicants:</b> {singleJob?.applications?.length}</p>
//         <p><b>Posted Date:</b> {singleJob?.createdAt?.split("T")[0]}</p>
//       </div>
//     </div>
//   );
// };

// export default JobDescription;



// import React, { useEffect, useState } from "react";
// import { Button } from "./ui/button";
// import Badge from "./ui/badge";
// import axios from "axios";
// import { JOB_API_END_POINT, APPLICATION_API_END_POINT } from "@/utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { setSingleJob } from "@/redux/jobSlice";
// import { toast } from "sonner";

// const JobDescription = () => {
//   const { id: jobId } = useParams();
//   const dispatch = useDispatch();

//   const { singleJob } = useSelector((store) => store.job);
//   const { user } = useSelector((store) => store.auth);

//   const isInitiallyApplied =
//     singleJob?.applications?.some(
//       (application) => application.applicant === user?._id
//     ) || false;

//   const [isApplied, setIsApplied] = useState(isInitiallyApplied);

//   const applyJobHandler = async () => {
//     try {
//       const res = await axios.get(
//         `${APPLICATION_API_END_POINT}/apply/${jobId}`,
//         { withCredentials: true }
//       );

//       if (res.data.success) {
//         setIsApplied(true);

//         const updateSingleJob = {
//           ...singleJob,
//           applications: [
//             ...singleJob.applications,
//             { applicant: user?._id },
//           ],
//         };

//         dispatch(setSingleJob(updateSingleJob));
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message);
//     }
//   };

//   useEffect(() => {
//     const fetchSingleJob = async () => {
//       try {
//         const res = await axios.get(
//           `${JOB_API_END_POINT}/get/${jobId}`,
//           { withCredentials: true }
//         );

//         if (res.data.success) {
//           dispatch(setSingleJob(res.data.job));

//           setIsApplied(
//             res.data.job.applications.some(
//               (application) => application.applicant === user?._id
//             )
//           );
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchSingleJob();
//   }, [jobId, dispatch, user?._id]);

//   return (
//     <div className="max-w-7xl mx-auto my-10">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="font-bold text-xl">{singleJob?.title}</h1>

//           <div className="flex items-center gap-2 mt-4">
//             <Badge className="text-blue-700 font-bold" variant="ghost">
//               {singleJob?.position}
//             </Badge>

//             <Badge className="text-[#F83002] font-bold" variant="ghost">
//               {singleJob?.jobType}
//             </Badge>

//             <Badge className="text-[#7209B7] font-bold" variant="ghost">
//               {singleJob?.salary} LPA
//             </Badge>
//           </div>
//         </div>

//         <Button
//           disabled={isApplied}
//           onClick={applyJobHandler}
//           className={`rounded-lg ${
//             isApplied
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-[#7209B7] hover:bg-[#5f32ad]"
//           }`}
//         >
//           {isApplied ? "Already Applied" : "Apply Now"}
//         </Button>
//       </div>

//       <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
//         Job Description
//       </h1>

//       <div className="my-4 space-y-2">
//         <p><b>Role:</b> {singleJob?.title}</p>
//         <p><b>Location:</b> {singleJob?.location}</p>
//         <p><b>Description:</b> {singleJob?.description}</p>
//         <p><b>Experience:</b> {singleJob?.experienceLevel} yrs</p>
//         <p><b>Salary:</b> {singleJob?.salary} LPA</p>
//         <p><b>Total Applicants:</b> {singleJob?.applications?.length}</p>
//         <p><b>Posted Date:</b> {singleJob?.createdAt?.split("T")[0]}</p>
//       </div>
//     </div>
//   );
// };

// export default JobDescription;




// import React, { useEffect, useState } from "react";
// import { Button } from "./ui/button";
// import Badge from "./ui/badge";
// import axios from "axios";
// import { JOB_API_END_POINT, APPLICATION_API_END_POINT } from "@/utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { setSingleJob } from "@/redux/jobSlice";
// import { toast } from "sonner";

// const JobDescription = () => {
//   const { id: jobId } = useParams();
//   const dispatch = useDispatch();

//   const { singleJob } = useSelector((store) => store.job);
//   const { user } = useSelector((store) => store.auth);

//   const isInitiallyApplied =
//     singleJob?.applications?.some(
//       (application) => application.applicant?._id === user?._id
//     ) || false;

//   const [isApplied, setIsApplied] = useState(isInitiallyApplied);

//   const applyJobHandler = async () => {
//     try {
//       const res = await axios.get(
//         `${APPLICATION_API_END_POINT}/apply/${jobId}`,
//         { withCredentials: true }
//       );

//       if (res.data.success) {
//         setIsApplied(true);

//         const updateSingleJob = {
//           ...singleJob,
//           applications: [
//             ...singleJob.applications,
//             { applicant: { _id: user?._id } },
//           ],
//         };

//         dispatch(setSingleJob(updateSingleJob));
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message);
//     }
//   };

//   useEffect(() => {
//     const fetchSingleJob = async () => {
//       try {
//         const res = await axios.get(
//           `${JOB_API_END_POINT}/get/${jobId}`,
//           { withCredentials: true }
//         );

//         if (res.data.success) {
//           dispatch(setSingleJob(res.data.job));

//           setIsApplied(
//             res.data.job.applications.some(
//               (application) => application.applicant?._id === user?._id
//             )
//           );
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchSingleJob();
//   }, [jobId, dispatch, user?._id]);

//   return (
//     <div className="max-w-7xl mx-auto my-10">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="font-bold text-xl">{singleJob?.title}</h1>

//           <div className="flex items-center gap-2 mt-4">
//             <Badge className="text-blue-700 font-bold" variant="ghost">
//               {singleJob?.position}
//             </Badge>

//             <Badge className="text-[#F83002] font-bold" variant="ghost">
//               {singleJob?.jobType}
//             </Badge>

//             <Badge className="text-[#7209B7] font-bold" variant="ghost">
//               {singleJob?.salary} LPA
//             </Badge>
//           </div>
//         </div>

//         <Button
//           disabled={isApplied}
//           onClick={applyJobHandler}
//           className={`rounded-lg ${
//             isApplied
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-[#7209B7] hover:bg-[#5f32ad]"
//           }`}
//         >
//           {isApplied ? "Already Applied" : "Apply Now"}
//         </Button>
//       </div>

//       <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
//         Job Description
//       </h1>

//       <div className="my-4 space-y-2">
//         <p><b>Role:</b> {singleJob?.title}</p>
//         <p><b>Location:</b> {singleJob?.location}</p>
//         <p><b>Description:</b> {singleJob?.description}</p>
//         <p><b>Experience:</b> {singleJob?.experienceLevel} yrs</p>
//         <p><b>Salary:</b> {singleJob?.salary} LPA</p>
//         <p><b>Total Applicants:</b> {singleJob?.applications?.length}</p>
//         <p><b>Posted Date:</b> {singleJob?.createdAt?.split("T")[0]}</p>
//       </div>
//     </div>
//   );
// };

// export default JobDescription;





import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {Badge} from "./ui/badge";
import axios from "axios";
import { JOB_API_END_POINT, APPLICATION_API_END_POINT } from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";

const JobDescription = () => {
  const { id: jobId } = useParams();
  const dispatch = useDispatch();

  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);

  // ✅ FIX: applicant can be STRING or OBJECT
  const isInitiallyApplied =
    singleJob?.applications?.some(
      (application) =>
        application.applicant === user?._id ||
        application.applicant?._id === user?._id
    ) || false;

  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setIsApplied(true);

        // ✅ Redux state update for instant UI change
        const updateSingleJob = {
          ...singleJob,
          applications: [
            ...singleJob.applications,
            { applicant: user?._id },
          ],
        };

        dispatch(setSingleJob(updateSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(
          `${JOB_API_END_POINT}/get/${jobId}`,
          { withCredentials: true }
        );

        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));

          // ✅ FIX: handle both populated & non-populated applicant
          setIsApplied(
            res.data.job.applications.some(
              (application) =>
                application.applicant === user?._id ||
                application.applicant?._id === user?._id
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>

          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              {singleJob?.position} Positions
            </Badge>

            <Badge className="text-[#F83002] font-bold" variant="ghost">
              {singleJob?.jobType}
            </Badge>

            <Badge className="text-[#7209B7] font-bold" variant="ghost">
              {singleJob?.salary} LPA
            </Badge>
          </div>
        </div>

        <Button
          disabled={isApplied}
          onClick={applyJobHandler}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209B7] hover:bg-[#5f32ad]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
        Job Description
      </h1>

      <div className="my-4 space-y-2">
        <p><b>Role:</b> {singleJob?.title}</p>
        <p><b>Location:</b> {singleJob?.location}</p>
        <p><b>Description:</b> {singleJob?.description}</p>
        <p><b>Experience:</b> {singleJob?.experienceLevel} yrs</p>
        <p><b>Salary:</b> {singleJob?.salary} LPA</p>
        <p><b>Total Applicants:</b> {singleJob?.applications?.length}</p>
        <p><b>Posted Date:</b> {singleJob?.createdAt?.split("T")[0]}</p>
      </div>
    </div>
  );
};

export default JobDescription;
