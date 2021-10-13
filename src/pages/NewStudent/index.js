import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'


export default function NewStudent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [photo, setPhoto] = useState('')

  const history = useHistory()
  
  
  async function handleNewStudent(e) {
    e.preventDefault()
    const data = {
      name,
      address,
      email,
      photo
    }
    try {
      await api.post('/', data)
      
      history.push('/students')
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>

          <h1> Cadastrar Novo Aluno </h1>
          <Link className='back-link' to="/students">
            Voltar para alunos
          </Link>
        </section>

        <form onSubmit={handleNewStudent}>
          <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
          <input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="Endereço" value={address} onChange={e => setAddress(e.target.value)} />
          <input placeholder="Foto" value={photo} onChange={e => setPhoto(e.target.value)} />
          <button className="button" type="submit"> Cadastrar </button>
        </form>
      </div>
    </div>
  )
}