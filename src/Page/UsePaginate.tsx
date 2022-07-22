import { Box, Button } from "@material-ui/core";
import usePaginate from "../Hooks/CustomHook";
import "./usePaginate.scss";

type Props = {
  useBordersButtons: boolean;
};
export default function UsePaginate(props: Props) {
  const pages = usePaginate({ current, total, pageSize });

  // O componente de paginação deverá ter a opção de aceitar ou não (próximo e anterior)

  return (
    <>
      <div className="container">
        <h1>
          Desafio <span>Paginação</span>
          <small> Custom Hooks</small>
        </h1>

        <div>
          {pages?.map((item) => {
            return <Button>{item}</Button>;
          })}
        </div>
      </div>
    </>
  );
}
