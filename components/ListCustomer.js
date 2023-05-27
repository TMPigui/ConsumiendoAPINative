import { View, Text, FlatList, Button } from "react-native-web";
import { styles } from "../assets/styles/styles";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function ListCustomer() {
    const [data, setData] = useState([])

    const getCustomer = async () => {
        const response = await axios.get(`http://127.0.0.1:3000/api/clientes`)
        setData(response.data)
    }

    useEffect(() => {
        getCustomer();
        //console.log(data)
    })

    return (
        <view style={styles.container}>
            <Button
                style={{ backgroundColor: 'red', marginLeft: 10, marginBottom: 10 }}
                icon="view-list"
                mode="contained"
                onPress={getCustomer}
            >
                Listar Clientes
            </Button>
            <Text>Listado de clientes</Text>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <Text style={{backgroundColor:'gray', borderRadius:10, padding: 10, textAlign:'center', marginTop:5}} >
                    { item.nombre } {item.apellidos}
                    </Text>}
            />
        </view >
    )
}