import { toast } from "@/components/ui/Toast/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { DefaultValues, useForm } from "react-hook-form";
import { z } from "zod";

type Props<F extends Record<string, any>> = {
  schema: z.AnyZodObject;
  defaultValues?: DefaultValues<F>;
  action: (data: F) => Promise<any>;
  onSuccess?: (data?: any) => Promise<any> | any;
};

export const useFormWithAction = <T extends z.infer<z.AnyZodObject>>({
  schema,
  defaultValues,
  action,
  onSuccess,
}: Props<T>) => {
  const [isPending, startTransition] = useTransition();
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    reValidateMode: "onChange",
  });

  const submitFunc = async (values: T) => {
    startTransition(async () => {
      console.log("START______");
      const response = await action(values);
      const hasErrors = response?.isError && !response?.isSuccess;

      //
      if (hasErrors) {
        setIsError(true);
        setIsSuccess(false);

        toast({
          title: response?.message,
        });
      } else {
        setIsSuccess(true);
        setIsError(false);
        toast({
          title: response?.payload?.message,
        });
        onSuccess && (await onSuccess?.(response?.payload));
        // form.reset();
      }
    });
  };

  return {
    submitFunc,
    form,
    isPending,
    isError,
    isSuccess,
  };
};
