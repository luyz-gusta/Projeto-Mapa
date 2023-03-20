'use strict'

export const getDadosEstados = async (siglaPesquisa) => {
    const url = `http://localhost:8080/estado/sigla/${siglaPesquisa}`
    const response = await fetch(url)
    const data = await response.json()

    return data 
}

export const getCidades = async (siglaPesquisa) => {
    const url = `http://localhost:8080/v1/cidades/estados/sigla/${siglaPesquisa}`
    const response = await fetch(url)
    const data = await response.json()

    return data 
}