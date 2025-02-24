import { useEffect, useState } from 'react';
import { consultar } from '../../../services/Service';

interface Usuario {
  id: number;
  name: string;
}

function ListarUsuarios() {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  async function consultarUsuarios() {

    try {
      await consultar('/users', setUsuarios);
    } catch (error: any) {
      alert('Erro!')
    }
    
  }

  useEffect(() => {
    consultarUsuarios();
  }, []);

  return (
    <div className='lista'>
      <h1>Lista de usuários - Gerada pelo Axios</h1>
      <ul>
        {usuarios.map( (usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListarUsuarios;