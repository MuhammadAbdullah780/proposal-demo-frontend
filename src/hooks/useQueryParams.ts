import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const removeQueryParam = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (current.has("id")) {
      current.delete("id");
    }
    pushQueryParam(current.toString());
  };

  const pushQueryParam = (searchQuery: string) => {
    const query = searchQuery ? `?${searchQuery}` : "";
    router.push(`${pathname}${query}`);
  };

  const addQueryParam = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("id", "1");
    pushQueryParam(current.toString());
  };

  return {
    removeQueryParam,
    addQueryParam,
  };
};

export { useQueryParams };
