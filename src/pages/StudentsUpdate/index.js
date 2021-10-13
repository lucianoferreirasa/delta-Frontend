import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'


export default function StudentUpdate(props) {
    const { id } = props.match.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState('');

  const history = useHistory();
  

  useEffect(() => {
    api.get(`/${id}`).then(response => {
        setName(response.data.name);
        setAddress(response.data.address);
        setEmail(response.data.email);
        setPhoto(response.data.photo);
    })

}, []);
  
  async function handleStudentUpdate(e) {
    e.preventDefault()
    const data = {
      name,
      address,
      email,
      photo
    }
    try {
      await api.put(`/${id}`, data)
      
      history.push('/students')
    } catch (err) {
      alert('Erro ao atualizar aluno, tente novamente.')
    }
  }

  return (
    <div className="update-container">
      <div className="content">
        <section>

          <h1> Atualizar aluno(a) {name} </h1>
          <Link className='back-link' to="/students">
            Voltar para alunos
          </Link>
        </section>
        <form onSubmit={handleStudentUpdate}>
          <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
          <input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="Endereço" value={address} onChange={e => setAddress(e.target.value)} />
          <input placeholder="Foto" value={photo} onChange={e => setPhoto(e.target.value)} />
          <button className="button" type="submit"> Atualizar </button>
        </form>
      </div>
    </div>
  )
}