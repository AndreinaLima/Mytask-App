import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function NovaTarefa() {
  const { register, handleSubmit, formState: {errors} } = useForm();

  function salvarTarefa(data) {
    console.log("Salvar tarefa")
    console.log(data);
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(salvarTarefa)}>
        <h1> Adicionar Tarefa</h1>
        <hr />
        <div>
          <label htmlFor="titulo">Título</label>
          <input type="text" id="titulo" className="form-control" {...register("titulo", {required: "O título é obrigatório", maxLength: {value: 200, message: "O limite máximo é 200 caracteres"}})} />
          {errors.titulo && <small className="invalid">{errors.titulo.message}</small> }
        </div>
        <div className="mt-2">
          <label htmlFor="descricao">Descrição</label>
          <textarea id="descricao" className="form-control" {...register("descricao", {required: "A descrição é obrigatória"})}></textarea>
          {errors.descricao && <small className="invalid">{errors.descricao.message}</small>}
        </div>
        <div className="mt-2">
          <label htmlFor="dataConclusao">Data</label>
          <input type="date" id="dataConclusao" className="form-control" {...register("dataConclusao")} />
        </div>
        <div className="form-check mt-3">
          <input type="checkbox" id="concluido" className="form-check-input" {...register("concluido")} />
          <label htmlFor="concluido" className="form-check-label">Concluído?</label>
        </div>
        <div className="mt-3">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" className="form-select" {...register("categoria")}>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
            <option value="Projetos">Projetos</option>
            <option value="Lazer">Lazer</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <Button className=" w-100 mt-3" variant="primary" type="submit">Salvar Tarefa</Button>
      </form>
    </main>
  )
}

export default NovaTarefa;