'use strict'

import { getDadosEstados } from "./estados.js"

import { getCidades } from "./estados.js"

const mapa = document.querySelector('svg')

const getEstado = (event) => {
    const estado = event.target.id.replace('BR-', '')
    // const cardContainer = document.querySelector('#card__container')
    preencherCard(estado)
}

const preencherCard = async (sigla) => {
    const dadosEstados = await getDadosEstados(sigla)
   

    const regiao = document.createElement('p')
    regiao.classList.add('regiao')
    regiao.textContent = 'Região:'

    const nomeRegiao = document.createElement('p')
    nomeRegiao.classList.add('nome__regiao')
    nomeRegiao.textContent = dadosEstados.regiao

    const cardRegiao = document.createElement('div')
    cardRegiao.classList.add('card__regiao')
    cardRegiao.append(regiao, nomeRegiao)
    
    const capital = document.createElement('p')
    capital.classList.add('capital')
    capital.textContent = 'Capital:'

    const nomeCapital = document.createElement('p')
    nomeCapital.classList.add('nome__capital')
    nomeCapital.textContent = dadosEstados.capital

    const cardCapital= document.createElement('div')
    cardCapital.classList.add('card__capital')
    cardCapital.append(capital, nomeCapital)

    const nomeEstado = document.createElement('h1')
    nomeEstado.classList.add('nome__estado')
    nomeEstado.textContent = dadosEstados.descricao

    const cardDescricao = document.createElement('div')
    cardDescricao.classList.add('card__descricao')
    cardDescricao.append(nomeEstado, cardCapital, cardRegiao)

    const cardSigla = document.createElement('div')
    cardSigla.classList.add('card__sigla')
    cardSigla.textContent = dadosEstados.uf

    const cardEstado = document.getElementById('card__estado')
    cardEstado.replaceChildren(cardSigla, cardDescricao)

    const pegarCidades = await getCidades(sigla)
    const cardCidades = document.querySelector('.card__cidades')
    const listaCidades = document.querySelector('.lista__cidades')
    listaCidades.textContent = ''

    pegarCidades.cidades.map((cidade) => {
        console.log(cidade)
        const cidadeLi = document.createElement('li')
        cidadeLi.classList.add('cidade')
        cidadeLi.textContent = cidade
        listaCidades.appendChild(cidadeLi)
    });
    cardCidades.append(listaCidades)

    const cardContainer = document.getElementById('card__container')
    cardContainer.replaceChildren(cardEstado, cardCidades)

    console.log(cardEstado + '\n' + listaCidades)

    return cardDescricao
}

mapa.addEventListener('click', getEstado)



console.log(mapa)