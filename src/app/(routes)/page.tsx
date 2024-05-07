// "use client";
// import RhfWrapper from "@/components/common/RhfWrapper";
// import RichTextField from "@/components/form-fields/RichText";
// import { useFormWithAction } from "@/hooks/useFormWithAction";
// import dynamic from "next/dynamic";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import "react-quill/dist/quill.snow.css";
// import { z } from "zod";

// type Props = {};

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const HomePage = (props: Props) => {
//   const [value, setValue] = useState("");

//   const form = useFormWithAction<{}>({
//     async action(data) {
//       return;
//     },
//     schema: z.object({}),
//   });

//   return (
//     <RhfWrapper {...form}>
//       <RichTextField label="Sample" name="sample" />
//     </RhfWrapper>
//   );
// };

// export default HomePage;

import React from "react";

type Props = {};

const page = (props: Props) => {
  return <div>page</div>;
};

export default page;
