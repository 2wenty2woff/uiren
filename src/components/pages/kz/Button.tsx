export const Button = () => {
  return (
    <section className="button pb-8 px-3">
      <h1 className="text-center font-semibold pb-8 text-2xl md:text-3xl lg:text-4xl">Бізге қосылыңыз!</h1>
      <div className="sm:flex text-lg md:text-xl font-PublicSans mx-auto max-w-lg justify-between">
        <a target="_blank" href="https://docs.google.com/forms/d/1rTKsqyMBO2rAnY7D_20ZQas4v2OgPJN65KLyIxykVdk/edit" className="block button__tutor cursor-pointer text-slate-800 mb-4 sm:mb-0 px-6 py-4 rounded-3xl sm:mr-3 transition hover:bg-slate-600 hover:text-white">
        Мұғалім болу
        </a>
        <a target="_blank" href="https://docs.google.com/forms/d/1CEa5Yjwe7HICCjUIm2PTPwuC4eS79y9yPP9b1DvmHXo/edit" className="bg-blue-500 block text-white cursor-pointer button__student sm:ml-3 px-6 py-4 transition rounded-3xl hover:bg-slate-500">
        Оқушыны тіркеу
        </a>
      </div>
    </section>
  )
}
