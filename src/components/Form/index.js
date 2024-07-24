import { categories } from "../Category";
import styles from "./Form.module.css";

function Form() {
  return (
    <section className={styles.container}>
      <h2>Cadastro de vídeo</h2>
      <form>
        <div>
          <label>URL do vídeo</label>
          <input
            type="text"
            placeholder="Digite a URL do vídeo"
            required="required"
          ></input>
        </div>
        <div>
          <label>Categoria</label>
          <select>
            <option value="-">Selecione uma categoria</option>
            {categories.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
