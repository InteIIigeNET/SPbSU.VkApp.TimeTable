import * as React from 'react';
import { View, Panel, Group, List, ListItem, CellButton } from '@vkontakte/vkui';
import { PanelHeader, HeaderButton, platform, IOS } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import './MainPanel.css';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

const osname = platform();

import '@vkontakte/vkui/dist/vkui.css';
import TimeTableNativeApi from './services/TimeTableNativeApi';


const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  };

class MainView extends React.Component {

        constructor(props) {
          super(props);
      

          const minDate = new Date();
          const maxDate = new Date();
          minDate.setFullYear(minDate.getFullYear() - 1);
          minDate.setHours(0, 0, 0, 0);
          maxDate.setFullYear(maxDate.getFullYear() + 1);
          maxDate.setHours(0, 0, 0, 0);

          this.state = {
            activePanel: 'panel1',
            minDate: minDate,
            maxDate: maxDate,
            autoOk: false,
            disableYearSelection: false
          }
        }
      
        handleChange = (event, date) => {
          this.setState({
            minDate: date,
          });
        };
    

        render() {
          return (

            <View activePanel={this.state.activePanel}>
                <Panel id='panel1'>
                <PanelHeader>
            Настройки
            </PanelHeader>
            
      <DatePicker
        style={style}
        hintText="Controlled Date Input"
        value={this.state.controlledDate}
        onChange={this.handleChange}
      />
              </Panel>
            </View>
          )
        }
    }
  
  export default MainView;
  