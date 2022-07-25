const R = require("ramda");

type Props = {
  current: number;
  pageSize: number;
  total: number;
};
export enum PaginationCases {
  FIRST = "|<",
  NEXT = ">",
  RETURN = "<",
  LAST = ">|",
}
export default function CustomHook(props: Props) {
  const totalPages = props.total / props.pageSize;
  const rangeFromCurrent = 3;
  let pages = R.range(
    props.current - rangeFromCurrent,
    props.current + rangeFromCurrent + 1
  );

  if (props.current < 5) {
    pages = R.range(1, props.current + rangeFromCurrent + 1);
    return [
      PaginationCases.FIRST,
      PaginationCases.RETURN,
      ...pages,
      PaginationCases.NEXT,
      PaginationCases.LAST,
    ];
  }
  if (props.current === 5) {
    pages = R.range(1, props.current + rangeFromCurrent);
    return [
      PaginationCases.FIRST,
      PaginationCases.RETURN,
      ...pages,
      PaginationCases.NEXT,
      PaginationCases.LAST,
    ];
  }

  if (props.current > 35) {
    pages = R.range(props.current, totalPages - rangeFromCurrent + 4);
    return [
      PaginationCases.FIRST,
      PaginationCases.RETURN,
      ...pages,
      PaginationCases.NEXT,
      PaginationCases.LAST,
    ];
  }

  if (props.current === props.total) {
    pages = R.range(totalPages - rangeFromCurrent,totalPages + 1);
    return [
      PaginationCases.FIRST,
      PaginationCases.RETURN,
      ...pages
    ];
  
  }

  return [
    PaginationCases.FIRST,
    PaginationCases.RETURN,
    ...pages,
    PaginationCases.NEXT,
    PaginationCases.LAST,
  ];
}
