import "./style.css";
import { useEffect, useState } from "react";

function MembrosAdministrador() {
  const [membro, setMembro] = useState([]);

  useEffect(() => {
    let url = "http://localhost:8080/api/administrador/membros";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      localStorage.getItem("token")
    );

    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((r) => r.json())
      .then((object) => {
        setMembro(object);
      })
      .catch((r) => {
        console.log("Erro na hora de puxar os membros da API");
      });
  });

  return (
    <div>
      <div className="tools">
        <div className="find">
          <div>
            <input type="search" className="search" placeholder="Pesquisar" />
            <select id="selectOptions" className="hopper">
              <option value="all">Todos os membros</option>
              <option value="ativos">Ativos</option>
              <option value="inativos">Inativos</option>
              <option value="pendentes">Pendentes</option>
            </select>
          </div>
        </div>
        <div className="crud">
          <h1>Membros</h1>
          <div className="inputs">
            <input type="button" value="Alterar" />
            <input type="button" value="Excluir" />
          </div>
        </div>
      </div>
      <div id="cont-table">
        <table className="tabela">
          <thead>
            <tr>
              <td>Nome</td>
              <td>Email</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {membro.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.nome}</td>
                  <td>{item.email}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
            <tr>
              <td>Wesley Felipe Rodrigues</td>
              <td>wesleyfelipe1904@gmail.com</td>
              <td>asdasd</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default MembrosAdministrador;
