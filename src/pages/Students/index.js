import React, {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import './styles.css';

export default function Students(){

    const [students, setStudents] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get("/").then(response => {
            setStudents(response.data);
        })

    }, []);


    async function handleDelete(id){
        try{
            await api.delete(`/${id}`);
            setStudents(students.filter(student =>student.id !== id));
        }catch(error){
            alert("Erro ao deletar aluno.");
        }
    }

    return (
            <div className="profile-container">
                <div className="content">
                    <header>
                    
                    <h1> Listagem de Alunos </h1>
                    
            
                    <a href="/student/new" class="btn btn-new-student btn-primary btn-lg active" role="button" aria-pressed="true">Cadastrar novo(a) aluno(a)</a>
                    </header>

                    <Link className='back-link' to="/">
                    Voltar para o menu
                    </Link>


                    <table className="table table-hover table-bordered mt-4">
                        <thead>
                            <tr>
                                <th>Foto</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Endereço</th>
                                <th>Ações</th>

                            </tr>
                        </thead>
                        <tbody>
                            {students.map(student => {
                                return (
                                    <tr key={student.id}>
                                        <td>{student.photo}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.address}</td>
                                        <td>
                                            <div className="btns">
                                                <button className="btn btn-warning" id="btn-editar" title='Editar' onClick={() => { history.push("/student/updatestudent/" + student.id); }} >
                                                    <i className="fa fa-pencil"></i>
                                                </button>
                                                <button className="btn btn-danger ml-2" id='btn-excluir' title='Excluir' onClick={() => handleDelete(student.id)} type="button">
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
    )


    
}
