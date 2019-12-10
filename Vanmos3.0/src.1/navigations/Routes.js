import LoginScreen from '../Telas/LoginScreen'
import CadastroPassageiro from '../Telas/CadastroPassageiro';
import Home from '../Telas/Home'
import CadastroVeiculo from '../Telas/CadastroVeiculo'
import CadastroMotorista from '../Telas/CadastroMotorista'
import CadastroTransportadora from '../Telas/CadastroTransportadora';
import PerfilPassageiro from '../Telas/PerfilPassageiro';
import TelaDono from '../Telas/TelaDono';
import TelaListarFrota from '../Telas/TelaListarFrotas';
import TelaListarVansPassageiros from '../Telas/TelaListarVansPassageiro';
import TelaMarcarViagemPassageiro from '../Telas/TelaMarcarViagemPassageiro';
import TelaListarMotorista from '../Telas/TelaListarMotoristas'
import TelaListaVans from '../Telas/listaVans'
import TelaAjuda from '../Telas/TelaAjuda'
import PerfilUser from '../Telas/PerfilUser'

import {createStackNavigator, createAppContainer} from 'react-navigation';

const Navigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Cadastro: {screen: CadastroPassageiro},
  Home: {screen: Home},
  CadastroVeiculo: {screen: CadastroVeiculo},
  CadastroTransportadora: {screen: CadastroTransportadora},
  CadastroMotorista: {screen: CadastroMotorista},
  PerfilPassageiro: {screen: PerfilPassageiro},
  TelaDono: {screen: TelaDono},
  TelaListarFrota: {screen: TelaListarFrota},
  TelaListarVansPassageiros: {screen: TelaListarVansPassageiros},
  TelaMarcarViagemPassageiro: {screen: TelaMarcarViagemPassageiro},
  TelaListarMotorista: {screen: TelaListarMotorista},
  TelaListaVans: {screen: TelaListaVans},
  TelaAjuda: {screen: TelaAjuda},
  PerfilUser: {screen: PerfilUser}
});

const Routes = createAppContainer(Navigator);

export default Routes;