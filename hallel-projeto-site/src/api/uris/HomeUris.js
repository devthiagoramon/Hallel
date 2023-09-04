import { uriDefaultPrefix } from "./utilsURI";

/*
Login e solicitar cadastro
*/
export function homeSolicitarCadastro() {
  return uriDefaultPrefix() + "/solicitarCadastro";
}

export function homeLogin() {
  return uriDefaultPrefix() + "/login";
}

/*
    Listar e matricular-se em todos os cursos do sistema
*/
export function homeListarCursos() {
  return uriDefaultPrefix() + "/listarCurso";
}

export function homeListarDesCursoByIdCurso(idCurso) {
  return uriDefaultPrefix() + "/descCurso/" + idCurso;
}

export function homeMatricularParticipanteInCursoByIdUserAndIdCurso(
  idUser,
  idCurso
) {
  return (
    uriDefaultPrefix() + "/matricularParticipante/" + idUser + "/" + idCurso
  );
}

/*
    Verificar token com a API
*/

export function homeVerificarToken(token) {
  return uriDefaultPrefix() + "/isTokenExpired/" + String(token);
}

/*
  Listar eventos
*/

export function listarEventosSemDestaqueHomeAPI(){
  return uriDefaultPrefix()+"/home/eventos/semDestaque";
}

export function listarEventosDestacadosHomeAPI(){
  return uriDefaultPrefix()+"/home/eventos/destacados"
}

