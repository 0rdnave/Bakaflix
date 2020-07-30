/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    console.log('Baaaka');
    const URL_TOP = 'http://localhost:8080/categorias';

    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    //   setTimeout(() => {
    //     setCategorias([
    //       ...categorias,

    //       {
    //         id: 1,
    //         nome: 'Classicos',
    //         descricao: 'Teste cat',
    //         cor: '#cbd1ff',
    //       },
    //       {
    //         id: 2,
    //         nome: 'Ação',
    //         descricao: 'Teste cat 2',
    //         cor: '#cbd1ff',
    //       },
    //       {
    //         id: 3,
    //         nome: 'Comédia',
    //         descricao: 'Teste cat',
    //         cor: '#cbd1ff',
    //       },
    //       {
    //         id: 4,
    //         nome: 'Filmes',
    //         descricao: 'Teste cat',
    //         cor: '#cbd1ff',
    //       },
    //       {
    //         id: 5,
    //         nome: 'Drama',
    //         descricao: 'Teste cat',
    //         cor: '#cbd1ff',
    //       },
    //       {
    //         id: 6,
    //         nome: 'Romance',
    //         descricao: 'Teste cat',
    //         cor: '#cbd1ff',
    //       },

  //     ]);
  //   }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        つづく...
      </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
