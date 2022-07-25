import { Button } from "@material-ui/core";
import CustomHook from "../Hooks/CustomHook";
import { useState } from "react";
import { PaginationCases } from "../Hooks/CustomHook";
import "./usePaginate.scss";

type Props = {
  useBordersButtons: boolean;
  current: number;
  total: number;
  pageSize: number;
};

export default function UsePaginate(props: Props) {
  const [current, setCurrent] = useState<number>(props.current);

  let pages = CustomHook({
    current: current,
    total: props.total,
    pageSize: props.pageSize,
  });

  if (!props.useBordersButtons) {
    pages = pages!.filter((item) => !item.includes(PaginationCases.NEXT) && !item.includes(PaginationCases.RETURN));
  }

  // O componente de paginação deverá ter a opção de aceitar ou não (próximo e anterior)
  function handleSelection(item: string) {
    if (!Number.isInteger(item)) {
        console.log('teste')
      if(PaginationCases.FIRST === item){
        setCurrent(1)
      }
      if(PaginationCases.LAST === item){
        setCurrent(props.total/props.pageSize)
      }
      if(PaginationCases.NEXT === item){
        setCurrent(current + 1 )
      }
      if(PaginationCases.RETURN === item){
        setCurrent(current -1)
      }
      return
    }
setCurrent(Number(item))
  }
  console.log('current', current)
  return (
    <>
      <div className="container">
        <h1>
          Desafio <span>Paginação</span>
          <small> Custom Hooks</small>
        </h1>
        <div>
          {pages.map((item) => {
            return (
              <Button
                key={item}
                className={item === current ? 'btnPaginate': ''}
                onClick={() => handleSelection(item)}
              >
                {item}
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
}
