import UserInformation from 'ui/components/UserInformation/UserInformation';
import Title from 'ui/components/Title/Title';


export default function Home() {
  return (
    <>
      <Title title={'Eleições 2022'}
                 subtitle={'Venha Fazer Parte dessa Democracia!'}
      />
      
      <UserInformation
        button={'Votar!'} 
        name={'Eleiçao para Grẽmio Estudantil'}
        description={'escolha o novo Presidente'}
      />
      <UserInformation
        button={'Votar!'} 
        name={'Eleiçao para Conselho Tutelar '}
        description={'escolha o novo Conselheiro Tutelar'}
      />
      <UserInformation
        button={'Votar!'} 
        name={'Eleiçao para Diretoria Escolar'}
        description={'escolha o novo Direto Escolar'}
      />
      <UserInformation
        button={'Votar!'} 
        name={'Eleiçao para os Melhores do Ano'}
        description={'escolha os Melhores do Ano'}
      />
      <UserInformation
        button={'Votar!'} 
        name={'Eleiçao para Grẽmio Estudantil'}
        description={'escolha o novo Presidente'}
      />
      
    </>
    
  )
}
