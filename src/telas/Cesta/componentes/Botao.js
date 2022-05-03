import React from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';


import Texto from '';

export default function Botao( { botao } ){
    return <>

        <TouchableOpacity style={estilos.botao} onPress={() => {}}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    
    </>
}

const estilos = StyleSheet.create({
    botao:{
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 10,
    },

    textoBotao:{
        textAlign: 'center',
        color: 'white',
        fontSize:16,
        lineHeight: 26,
        fontWeight: "bold",
    },  
});