import "./style.css";

export function Confirmation({ handleSubmit, getFormData }: any) {
  return (
    <div>
      <h3>Confirmação</h3>

      <button onClick={handleSubmit(getFormData)} type="submit">
        CONFIRMAR
      </button>
    </div>
  );
}
