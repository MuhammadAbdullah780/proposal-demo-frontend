// import Editor from "@/components/common/Editor";
// import {
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/Form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/Select";
// import dynamic from "next/dynamic";
// import React, { useEffect } from "react";
// import { Controller, useController, useFormContext } from "react-hook-form";

// type Props = {
//   name: string;
//   labelProps?: React.ComponentPropsWithRef<"label">;
//   label: string;
//   placeholder?: string;
//   helperText?: string | React.ReactNode;
// };

// const RichTextField = ({
//   name,
//   labelProps = {},
//   label,
//   placeholder = "",
//   helperText,
// }: Props) => {
//   const { control } = useFormContext();

//   return (
//     <Controller
//       control={control}
//       name={name}
//       render={({
//         field: { onChange, value, name },
//         fieldState: { error },
//         formState,
//       }) => (
//         <FormItem>
//           <FormLabel {...labelProps}>{label}</FormLabel>
//           <Editor
//             onChange={(description, delta, source, editor) => {
//               console.log(
//                 { description, delta, source, editor },
//                 "ON_CHANGE______ARGS___",
//               );
//               onChange(description);
//             }}
//             value={value || ""}
//             id={name}
//             placeholder={placeholder}
//           />
//           {helperText && !error && (
//             <FormDescription>{helperText}</FormDescription>
//           )}
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   );
// };

// export default RichTextField;
