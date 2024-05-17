import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const removeQueryParam = (queryParam: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (current.has(queryParam)) {
      current.delete(queryParam);
    }
    pushQueryParam(current.toString());
  };

  const removeMultipleQueryParams = (keys: string[]) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    keys?.forEach((item) => {
      if (current.has(item)) {
        current.delete(item);
      }
    });

    pushQueryParam(current.toString());
  };

  const pushQueryParam = (searchQuery: string) => {
    const query = searchQuery ? `?${searchQuery}` : "";
    router.push(`${pathname}${query}`);
    // router?.refresh();
  };

  const addQueryParam = (key: string, val: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set(key, val);
    pushQueryParam(current.toString());
  };

  return {
    removeQueryParam,
    addQueryParam,
    pushQueryParam,
    removeMultipleQueryParams,
  };
};

export { useQueryParams };
