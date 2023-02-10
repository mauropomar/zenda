import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Image
  } from 'react-native';
  import BoxLastRequest from './BoxLastRequest';

const arr = [
    {date:'2020-12-10', status: 'Pendiente', title:'Permisos'},
    {date:'2022-01-11', status: 'En espera', title:'Vacaciones'},
    {date:'2023-01-11', status: 'Rechazado', title:'Anticipo'},
    {date:'2023-02-11', status: 'Aprobado', title:'Horas extras'},
]

export default function CardLastRequest() {
   return (
     <SafeAreaView>
         <FlatList
            numColumns={2}
            data={arr}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (<BoxLastRequest elements={item}/>)}
         >
         </FlatList>
     </SafeAreaView>
   )
}