export default function FeedbackItem(params) {
  const name = "juan";
  const coment =
    "es muy práctica y fácil de usar, ofreciendo una variedad de opciones de transporte y pagos seguros. Permite ver el tiempo estimado de llegada, seguir el viaje en tiempo real y calificar tanto al conductor como al pasajero, lo que mejora la seguridad y la calidad del servicio.";
  const date = "26/11/2024";
  return (
    <article className="w-3/4 px-5 py-3 mx-auto shadow-xl rounded-2xl bg-slate-200 mar">
      <div className="flex flex-col items-start">
        <h3 className="text-3xl font-medium">{name}</h3>
        <p className="text-xs text-gray-600">{date}</p>
      </div>
      <span>
        <p className="py-4 text-justify font-thin">{coment}</p>
      </span>
    </article>
  );
}
