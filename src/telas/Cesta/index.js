import React from 'react';
import {StyleSheet, View, ScrollView, FlatList} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Texto from '../../componentes/Texto';
import Topo  from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';

export default function Cesta({topo, detalhes, itens}) {
    return <>
    
    <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => itens.nome}
        ListHeaderComponent={() => {
           return<>
                <Topo {...topo}/>

                <View style={estilos.cesta}>       
                    <Detalhes {...detalhes}/>
                    <Texto style>{itens.titulo}</Texto>
                </View>
            </>
        }}
    />
    </>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,
    },
    titulo:{
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        
    },

});