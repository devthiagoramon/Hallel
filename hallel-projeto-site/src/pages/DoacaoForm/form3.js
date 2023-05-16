import "./styles/styleForm3.css"
import Form from "react-bootstrap/Form"

const Form3 = ({setEstado2, estado2, setEstado3, estado3, setEstado3a, estado3a}) =>{

    function mudarSinais(e){

        if(e
         == 1){
            return(

            setEstado3(!estado3), setEstado3a(!estado3a)
            )
        } else{
            
            return(
            setEstado2(!estado2), setEstado3(!estado3)
        
            )
        }

        }

    return(

        <section className = "container-form3">
  
            <div className="breadNav">

                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>

            <label>Informe seus dados</label>
            
            <Form id = "formsDoar">


                <Form.Group className="mb-3 row">

                    <Form.Label className="labelforms" for = "cpfTitular">CPF:</Form.Label>

                    <input type="number" id ="cpfTitular"/>
                </Form.Group>

                <Form.Group className="mb-3 row">

                    <Form.Label  className="labelforms" for = "NomeTitular">Nome do titular:</Form.Label>
                    <input type="text"/>
                </Form.Group>

                <Form.Group className="mb-3 row">

                    <Form.Label  className="labelforms" for ="NumeroCartao">Número do cartão</Form.Label>
                    <input type = "NumeroCartao"/>
                </Form.Group>

                <Form.Group className= "mb-3 row">

                    <Form.Label  className="labelforms" for = "DateVenc">Data de vencimento:</Form.Label>
                    <input type="date"></input>
                </Form.Group>
            </Form>
            <div className= "button-area">

                <button onClick={()=> mudarSinais(0)}>Voltar</button>
                <button onClick={() =>mudarSinais(1)}>Confirmar</button>
            </div>
        </section>
    );
}     


export default Form3;