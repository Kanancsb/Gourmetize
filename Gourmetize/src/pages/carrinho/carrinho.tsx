export default function Carrinho() {
  return (
    <div className="min-h-screen p-6 text-slate-900">
      {/* Título */}
      <h1 className="text-3xl font-bold text-center mb-10">Carrinho</h1>

      {/* Endereço (BOTÃO) */}
      <div className="max-w-5xl mx-auto mb-6">
        <button
          className="text-lg font-medium flex items-center gap-2 hover:text-blue-600 transition"
          onClick={() => alert("Selecionar endereço")}
        >
          Selecione o endereço
          <span>📍</span>
        </button>

        <div className="border-b-2 border-black mt-2 w-1/2"></div>
      </div>

      <hr className="border-black mb-6" />

      {/* Produto e frete */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          Produto e frete 🛒
        </h2>

        <button className="flex items-center gap-2 border border-red-500 text-red-500 px-4 py-1 rounded-full hover:bg-red-50">
          🗑️ Remover todos os produtos
        </button>
      </div>

      <hr className="border-black mb-6" />

      {/* Tabela do produto */}
      <div className="max-w-5xl mx-auto border border-black">
        <div className="grid grid-cols-4 text-center font-medium border-b border-black">
          <div className="p-4 border-r border-black">Produto</div>
          <div className="p-4 border-r border-black">Descrição do produto</div>
          <div className="p-4 border-r border-black">
            Quantidade
            <div className="flex justify-center gap-3 mt-2">
              <button className="border px-2">{"<"}</button>
              <span>1</span>
              <button className="border px-2">{">"}</button>
            </div>
          </div>
          <div className="p-4">
            <button className="flex items-center gap-2 border border-red-500 text-red-500 px-3 py-1 rounded-full mx-auto">
              🗑️ Remover produto
            </button>
            <p className="mt-4 font-semibold">Preço:</p>
          </div>
        </div>

        <div className="grid grid-cols-4 text-center">
          <div className="p-6 border-r border-black">Imagem</div>
          <div className="p-6 border-r border-black">
            Descrição do produto aqui
          </div>
          <div className="p-6 border-r border-black">1</div>
          <div className="p-6">R$ 0,00</div>
        </div>
      </div>

      {/* Cupom (BOTÃO) */}
      <div className="max-w-5xl mx-auto mt-8">
        <div className="flex items-center gap-4">
          <button
            className="text-xl font-semibold flex items-center gap-2 hover:text-blue-600 transition"
            onClick={() => alert("Abrir campo de cupom")}
          >
            Cupom 🎟️
          </button>

          <div className="flex-1 border-b-2 border-black"></div>

          <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
            Aplicar cupom
          </button>
        </div>
      </div>

      {/* Resumo */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Resumo</h3>
          <p>Valor dos produtos:</p>
          <p>Frete:</p>
        </div>

        <div className="flex flex-col gap-4 items-end">
          <button className="border border-black px-6 py-3 rounded-full hover:bg-gray-100">
            Ir para o pagamento
          </button>
          <button className="border border-black px-6 py-3 rounded-full hover:bg-gray-100">
            Continuar comprando
          </button>
        </div>
      </div>
    </div>
  );
}