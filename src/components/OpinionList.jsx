export default function OpinionList(){
    const tittle = "Uber"
    const date = "26/11/2024"
    const comment = "es muy práctica y fácil de usar, ofreciendo una variedad de opciones de transporte y pagos seguros. Permite ver el tiempo estimado de llegada, seguir el viaje en tiempo real y calificar tanto al conductor como al pasajero, lo que mejora la seguridad y la calidad del servicio."
    return(
        <article className="px-5 py-3 mx-auto shadow-xl rounded-2xl text-black bg-slate-300">
      <div className="flex flex-col items-start">
        <h3 className="text-3xl font-medium">{tittle}</h3>
        <p className="text-xs text-gray-600">{date}</p>
      </div>
      <span>
        <p className="py-4 text-justify font-thin">{comment}</p>
      </span>
    </article>
    )
}