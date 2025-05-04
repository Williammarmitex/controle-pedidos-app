import { useState } from "react";

function App() {
  const [cliente, setCliente] = useState("");
  const [pedido, setPedido] = useState("");
  const [valor, setValor] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [entregador, setEntregador] = useState("");
  const [registros, setRegistros] = useState([]);

  const salvarPedido = () => {
    if (!cliente || !pedido || !valor) return;

    const novo = {
      cliente,
      pedido,
      valor,
      pagamento,
      entregador,
      horario: new Date().toLocaleTimeString(),
    };
    setRegistros([novo, ...registros]);
    setCliente("");
    setPedido("");
    setValor("");
    setPagamento("");
    setEntregador("");
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h1>Registrar Pedido</h1>
      <input placeholder="Cliente / Endereço" value={cliente} onChange={(e) => setCliente(e.target.value)} /><br />
      <textarea placeholder="Pedido" value={pedido} onChange={(e) => setPedido(e.target.value)} /><br />
      <input placeholder="Valor (R$)" value={valor} onChange={(e) => setValor(e.target.value)} /><br />
      <input placeholder="Forma de Pagamento" value={pagamento} onChange={(e) => setPagamento(e.target.value)} /><br />
      <input placeholder="Entregador" value={entregador} onChange={(e) => setEntregador(e.target.value)} /><br />
      <button onClick={salvarPedido}>Salvar Pedido</button>

      <h2>Pedidos do Dia</h2>
      {registros.length === 0 && <p>Nenhum pedido registrado ainda.</p>}
      {registros.map((r, i) => (
        <div key={i} style={{ border: '1px solid #ccc', padding: 10, marginTop: 10 }}>
          <p><strong>Cliente:</strong> {r.cliente}</p>
          <p><strong>Pedido:</strong> {r.pedido}</p>
          <p><strong>Valor:</strong> R$ {r.valor}</p>
          <p><strong>Pagamento:</strong> {r.pagamento}</p>
          <p><strong>Entregador:</strong> {r.entregador}</p>
          <p style={{ fontSize: 12, color: '#666' }}>{r.horario}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
