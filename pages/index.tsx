import { Box } from '@mui/material'
import type { NextPage } from 'next'  
import Lista from '../src/components/lista/lista'



const Home: NextPage = () => {
  const professores: Professor[] = [
    {
    id: 1,
    nome: 'Gabriel',
    foto: 'https://github.com/GMN-dev.png',
    descricao: 'Descrição do Prof 1',
    valor_hora: 200
    },

    {
      id: 2,
      nome: 'Marcos',
      foto: 'https://github.com/mathewcst.png',
      descricao: 'Descrição do Prof 2',
      valor_hora: 300
    },

    {
      id: 3,
      nome: 'Genevy',
      foto: 'https://github.com/felquis.png',
      descricao: 'Descrição do Prof 3',
      valor_hora: 500
      },

      {
        id: 4,
        nome: 'Lucas',
        foto: 'https://github.com/rodrigoaml.png',
        descricao: 'Descrição do Prof 4',
        valor_hora: 800
        },
  ]
  
  return (
    <Box sx={{backgroundColor: "secondary.main"}}>
      <Lista professores={professores}>
      
      </Lista>
    </Box>
    )
}


export default Home
