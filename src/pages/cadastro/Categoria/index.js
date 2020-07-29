import React from 'react';
import PageDafault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
      <PageDafault>

        <h1>Cadastro de Categoria</h1>

        <Link to="/">
            Ir para a home
        </Link>
      </PageDafault>
    )
  }

  export default CadastroCategoria;