'use strict'

import { getDadosEstados } from "./estados.js"

import { getCidades } from "./estados.js"

const mapa = document.querySelector('svg')

const getEstado = (event) => {
    const estado = event.target.id.replace('BR-', '')
    preencherCard(estado)
}

const preencherCard = async (sigla) => {
    const cardEstado = document.querySelector('#card__estado')
    const dadosEstados = await getDadosEstados(sigla)

    const cardSigla = document.createElement('div')
    cardSigla.textContent = dadosEstados.uf
    cardSigla.classList.add('card__sigla')

    const cardDescricao = document.querySelector('.card__descricao')
    const nomeEstado = document.createElement('h1')
    nomeEstado.classList.add('nome__estado')
    nomeEstado.textContent = dadosEstados.descricao

    const capitalEstado = document.querySelector('.capital__estado')
    const nomeCapital = document.createElement('p')
    nomeCapital.classList.add('nome__capital')
    nomeCapital.textContent = dadosEstados.capital

    const regiaoEstado = document.querySelector('.regiao__estado')
    const nomeRegiao = document.createElement('p')
    nomeRegiao.classList.add('nome__regiao')
    nomeRegiao.textContent = dadosEstados.regiao

    // getCidades.cidades.forEach((cidade) => {
        

    // });

    cardEstado.append(cardSigla)
    cardDescricao.append(nomeEstado)
    capitalEstado.append(nomeCapital)
    regiaoEstado.append(nomeRegiao)
    return cardEstado
}

mapa.addEventListener('click', getEstado)

console.log(mapa)