import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import api from '../../services/api';
import moment from 'moment';

interface IStudent {
    id: number;
    ra: string;
    name: string;
    birthdate: Date;
    enrolled: boolean;
    created_at: Date;
    updated_at: Date;
}

const Students: React.FC = () => {

    const [students, setStudents] = useState<IStudent[]>([])

    useEffect(() => {
        loadStudents()
    }, [])

    async function loadStudents() {
        const response = await api.get('/students')
        console.log(response);
        setStudents(response.data)
    }

    function formatDate(date: Date) {
        return moment(date).format('DD/MM/YYYY')
    }

    return (

        <div className="container">
            <br />
            <h1>Página de Alunos</h1>
            <br />
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Nome</th>
                        <th>Data de Nascimento</th>
                        <th>Data de Atualização</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(student => (
                            <tr key={student.id}>
                                <td>{student.ra}</td>
                                <td>{student.name}</td>
                                <td>{formatDate(student.birthdate)}</td>
                                <td>{formatDate(student.updated_at)}</td>
                                <td>{student.enrolled ? "Matriculado" : "Não matriculado"}</td>
                                <td>
                                    <Button size="sm" variant="primary">Editar</Button>{' '}
                                    <Button size="sm" variant="warning">Visualizar</Button>{' '}
                                    <Button size="sm" variant="danger">Remover</Button>{' '}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Students;