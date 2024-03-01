<h1>SGAgro - System's Back-end</h1>
<br />
<h5>This is an API designed to power the SGAgro system.</h5>
<br />
</br>
<span>How to use this API?</span>
<br />
<ul>
    <li>
        <span>
            The route "https://sistem-url/" is used to test the API, and it sends the message: 
            <i>Rota de teste</i>,
            in Portuguese language.
        </span>
    </li>
    </br>
    <li>
        <span>
            The route "https://sistem-url/animals", type <b>GET</b>, returns to the client an object of all animals registered in the database. 
        </span>
    </li>
    </br>
    <li>
        <span>
            The route "https://sistem-url/animals/:id", type <b>GET</b>, returns to the client an object with the information of the animal that matches the "id" param. 
        </span>
    </li>
    </br>
    <li>
        <span>
            The route "https://sistem-url/animals", type <b>POST</b>, is used to register a new animal in the database. Generally, the client sends an object in JSON format to the server, and it returns to the client a message.
            If the registration goes all right, the message is: <i>Cadastrado com sucesso!</i>, but if it catches an error in the process, the message is: <i>Você não pode criar um novo cadastro com um número de brinco repetido! Mude o número e então prossiga com o cadastro.</i>. It's important to say that all the messages returned by the server are in Portuguese.
        </span>
    </li>
    </br>
    <li>
        <span>
            The route "https://sistem-url/animals/group", type <b>PUT</b>, is used to modify a group of animals. The client sends to the server the earring numbers of each animal and the modifications. If everything goes all right, the server returns a message like that: <i>Cadastros modificados com sucesso!</i>, or: <i>Não foram encontrados cadastros correspondentes aos números fornecidos.</i>, if it goes wrong.
        </span>
    </li>
    </br>
    <li>
        <span>
            The route "https://sistem-url/animals/:id", type <b>PUT</b>, is used to modify a specific animal that matches the id. The client sends to the server the modifications in JSON format, and it returns the message: <i>Atualizado com sucesso</i>, if it goes right, or: <i>Houve algum erro interno do servidor ou as informações passadas são inválidas. Tente novamente.</i>, if it goes wrong.
        </span>
    </li>
    </br>
    <li>
        <span>
            The route "https://sistem-url/animals/:id", type <b>DELETE</b>, is used to remove permanently a registration from the database. This process is non-reversible and needs to be executed carefully. If the exclusion goes all right, the message returned by the server is: <i>Deletado com sucesso!</i>, or: <i>Houve um erro interno ao deletar o cadastro, tente novamente.</i>, if it goes wrong.
        </span>
    </li>
</ul>

<span>&copy; SGAgro - Sistema de Gerenciamento Agropecuário.</span>
</br>
<span>Brazil - 2024</span>
