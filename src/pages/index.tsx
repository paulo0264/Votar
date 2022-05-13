import SectionList from 'ui/components/home/SectionList/SectionList';
import UserInformation from 'ui/components/home/UserInformation/UserInformation';
import MenuTitle from 'ui/components/menu/MenuTitle/MenuTitle';


export default function Home() {
  return (
    <>
   
      <SectionList />
      <MenuTitle title={'Eleições 2022'}
                 subtitle={'Venha Fazer Parte dessa Democracia!'}
      />
      <UserInformation
        button={'Votar!'} 
        name={'Eleiçao Grẽmio Estudantil'}
        description={'Vote e escolha o Presidente do Grẽmio Estudantil'}
      />
      <UserInformation
        button={'Votar!'} 
        name={'Eleiçao Conselho Tutela '}
        description={'Vote e escolha o Presidente do Grẽmio Estudantil'}
      />
      <UserInformation
        button={'Votar!'} 
        name={'Eleiçao Grẽmio Estudantil'}
        description={'Vote e escolha o Presidente do Grẽmio Estudantil'}
      />
      <UserInformation
        button={'Votar!'} 
        name={'Eleiçao Grẽmio Estudantil'}
        description={'Vote e escolha o Presidente do Grẽmio Estudantil'}
      />
      <UserInformation
        button={'Votar!'} 
        name={'Eleiçao Grẽmio Estudantil'}
        description={'Vote e escolha o Presidente do Grẽmio Estudantil'}
      />
      
    </>
    
  )
}
