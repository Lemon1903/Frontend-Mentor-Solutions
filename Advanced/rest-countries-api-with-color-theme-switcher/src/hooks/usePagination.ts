import { useEffect, useState } from "react";
import { useFilter } from "../context/FilterContext";
import { SetValue } from "../types";
import usePageDimensions from "./usePageDimensions";

type PaginationReturn = [number, number, number, SetValue<number>];

export default function usePagination(totalLength: number): PaginationReturn {
  const [pageNumber, setPageNumber] = useState(0);
  const [pageWidth] = usePageDimensions();
  const filter = useFilter();

  const itemsPerPage = calculateItemsPerPage();
  const pagesLength = Math.ceil(totalLength / itemsPerPage);

  useEffect(() => setPageNumber(0), [filter]);

  function calculateItemsPerPage() {
    let rows = 32;
    let gap = 32;
    let newWidth = pageWidth - 32;

    if (pageWidth > 640) rows = 8;
    if (pageWidth > 768) gap = 64;
    if (pageWidth > 1024) newWidth -= 96;

    return Math.floor((newWidth + gap) / (280 + gap)) * rows;
  }

  return [itemsPerPage, pagesLength, pageNumber, setPageNumber];
}
