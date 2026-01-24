export default function Home() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-slate-900">

      {/* Barra superior */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Home</h1>

        <button
          className="flex items-center gap-2 border border-slate-900 px-4 py-2 rounded hover:bg-slate-100 transition"
          onClick={() => console.log("Buscar clicado")}
        >
          Buscar Produtores ou produtos 🔍
        </button>
      </div>

      {/* Conteúdo: Meus pedidos */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-3">Meus pedidos</h2>

        {/* Barra de busca */}
        <div className="flex items-center border border-gray-400 rounded-md w-fit px-3 py-1 mb-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            onClick={() => console.log("Buscar tabela")}
          >
            Buscar Produtores ou produtos
          </button>
        </div>

        {/* Tabela */}
        <table className="w-full border border-gray-500 table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-500 px-4 py-2 text-left">
                Pedidos feitos
              </th>
              <th className="border border-gray-500 px-4 py-2 text-left">
                Produtores
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 px-4 py-2">&nbsp;</td>
              <td className="border border-gray-500 px-4 py-2">&nbsp;</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">&nbsp;</td>
              <td className="border border-gray-500 px-4 py-2">&nbsp;</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">&nbsp;</td>
              <td className="border border-gray-500 px-4 py-2">&nbsp;</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">&nbsp;</td>
              <td className="border border-gray-500 px-4 py-2">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
