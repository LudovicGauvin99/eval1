import { useState } from "react";

export const Form = () => {
  const [form, setForm] = useState({ titre: "", body: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {}

  return (
    <div className="col-4">
      <form onSubmit={handleSubmit}>
        <button type="button" className="btn btn-outline-dark " name="masque">
          Masquer le formulaire
        </button>
        <input
          type="text"
          className="form-control"
          name="titre"
          placeholder="body de l'article"
          value={form.titre}
          onChange={handleChange}
        />
        <textarea
          name="body"
          id=""
          cols="30"
          rows="10"
          className="form-control my-3"
          placeholder="body de l'article"
          onChange={handleChange}
          value={form.body}
        ></textarea>
        <input
          type="submit"
          className="btn btn-outline-dark"
          value="créer un nouvelle article"
        />
      </form>
    </div>
  );
};
