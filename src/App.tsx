import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Confirmation } from "./components/Confirmation";

interface FormData {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  uf: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>();

  const formDataValidation = z.object({
    cep: z.string().length(8),
    rua: z.string().min(3),
    numero: z.string().min(1),
    bairro: z.string().min(3),
    uf: z.string().length(2),
  });

  const { register, handleSubmit, reset, formState } = useForm<FormData>({
    resolver: zodResolver(formDataValidation),
  });

  const getFormData = (data: FormData) => {
    setFormData(data);
    reset();
  };

  return (
    <main>
      <div className="container">
        <form>
          <div>
            <input type="text" placeholder="Cep" {...register("cep")} />
            <small>{formState.errors.cep?.message}</small>
          </div>
          <div>
            <input type="text" placeholder="Rua" {...register("rua")} />
            <small>{formState.errors.rua?.message}</small>
          </div>
          <div>
            <input type="text" placeholder="Número" {...register("numero")} />
            <small>{formState.errors.numero?.message}</small>
          </div>
          <div>
            <input type="text" placeholder="Bairro" {...register("bairro")} />
            <small>{formState.errors.bairro?.message}</small>
          </div>
          <div>
            <input type="text" placeholder="UF" {...register("uf")} />
            <small>{formState.errors.uf?.message}</small>
          </div>
        </form>

        <section>
          <p>{formData?.cep}</p>
          <p>{formData?.rua}</p>
          <p>{formData?.numero}</p>
          <p>{formData?.bairro}</p>
          <p>{formData?.uf}</p>
        </section>
      </div>

      <aside>
        <Confirmation handleSubmit={handleSubmit} getFormData={getFormData} />
      </aside>
    </main>
  );
}

export default App;
