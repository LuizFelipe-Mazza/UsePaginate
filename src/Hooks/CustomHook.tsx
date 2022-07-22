const R = require('ramda');

type Props = {
  current: number
  pageSize: number
  total: number
}
export default function usePaginate(props: Props) {
  const totalPages = props.total/props.pageSize
  let pages = R.range(1, totalPages)
  const rangeFromCurrent = 3
  if (totalPages <= 5){
    return ["|<", "<", ...pages, ">", ">|"]
  }

  return ["|<", "<", ...pages, ">", ">|"]
  if( props.current <= rangeFromCurrent ){
    return ["|<", "<", ...pages, ">", ">|"]
  

  }
}
