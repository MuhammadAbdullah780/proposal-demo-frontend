"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { modalTypeOptions } from "@/constants/selectOptions";
import { useQueryParams } from "@/hooks/useQueryParams";
import { debounceHandler } from "@/utils/debounceHandler";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

type Props = {};

const SubmissionFilters: React.FC<Props> = ({}) => {
  const [filters, setFilters] = useState<Record<string, any> | null>(null);

  const searchParams = useSearchParams();

  console.log(filters, "FILTERS____");

  // States
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(
    !!Object.keys(searchParams).length,
  );

  console.log("IS__FILTER__APPLIED___", isFilterApplied);
  console.log(
    {
      params: searchParams,
      toString: searchParams.toString(),
      entries: searchParams.entries(),
      keys: searchParams?.keys(),
    },
    "SEARCH__PARAMS___",
  );

  // Hooks
  const { addQueryParam, removeQueryParam, removeMultipleQueryParams } =
    useQueryParams();

  const resetQueryParams = () => {
    const possibleParams = ["search_query", "generated_from"];
    removeMultipleQueryParams(possibleParams);
  };

  useEffect(() => {
    setIsFilterApplied(!!Object.keys(searchParams).length);
  }, [searchParams]);

  useEffect(() => {
    if (!!searchParams.toString().trim()) {
      setFilters({
        generated_from: searchParams?.get("generated_from"),
        search_query: searchParams?.get("search_query"),
      });
    } else {
      setFilters(null);
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 w-full justify-between items-end">
        <div className="flex gap-4 w-full">
          {/* Search Through Project Title */}
          {/* <div className="max-w-[300px] w-full flex flex-col gap-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Search
            </label>
            <div className="relative">
              <IoSearchSharp className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                defaultValue={searchParams?.get("search_query") || undefined}
                // value={searchParams?.get("search_query") || undefined}
                className="w-full rounded-lg bg-background pl-8"
                onChange={(e) => {
                  console.log(e, "E_____");
                  debounceHandler(async () => {
                    if (e.target?.value) {
                      addQueryParam("search_query", e.target.value);
                    } else {
                      removeQueryParam("search_query");
                    }
                    // applyPathRevalidation("/submissions");
                  }, 2000)();
                }}
              />
            </div>
          </div> */}
          {/* LLM TYPE */}
          <div className="max-w-[200px] w-full flex flex-col gap-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              LLM Type
            </label>
            <Select
              // defaultValue={searchParams?.get("generated_from") || undefined}
              value={searchParams?.get("generated_from") || undefined}
              onValueChange={(value) => {
                addQueryParam("generated_from", value);
                // applyPathRevalidation("/submissions");
              }}>
              <SelectTrigger className="bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {modalTypeOptions?.map((item, i) => {
                  return (
                    <SelectItem key={i} value={item?.value}>
                      {item?.label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Clear Filters Button */}
        {!!searchParams.toString().trim() && (
          <Button onClick={resetQueryParams} variant="text">
            Clear All Filters &nbsp; <RxCross2 className="font-semibold" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SubmissionFilters;
