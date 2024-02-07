const ComponenteFrase = ({ personajeProps }) => {
  return (
    <>
      <h2>{personajeProps.character}</h2>
      <article className="d-flex flex-row p-5 mb-2 contenedorFrasePersonaje">
        <div>
          <img
            className="imagenPersonaje img-fluid"
            src= {personajeProps.image}
            alt={personajeProps.character}
          />
        </div>
        <div className="mt-5 ms-5">
          <p>{personajeProps.quote}</p>
        </div>
      </article>
    </>
  );
};

export default ComponenteFrase;
