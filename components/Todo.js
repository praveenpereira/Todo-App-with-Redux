import React,{useState} from 'react';
import {View,Text,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import {addtodo,deletetodo,deleteall} from '../actions/todoAction';
import {useSelector,useDispatch} from 'react-redux';


const Todo = () =>{
    const [items, setItems] = useState('');
    const todos = useSelector(state=>state.todoReducer);
    const dispatch = useDispatch();

  const handleAddTodo=()=>{
      let date = new Date();
      let time = date.getTime();
      let todoObj = {
        id : time,
        todo:items,
      }
      setItems('');
      dispatch(addtodo(todoObj));
  }  
  return(
    <View>
    <View style={{display:'flex',justifyContent:'space-between',marginTop:30}}>
    <View>
    <Text style={{color:'purple', marginLeft:30,fontFamily:'bold',marginTop:30}}>TODO</Text>
    <View>
    {
      todos.map((item)=>{
        return(
          <ScrollView>
          <View>
          <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'
        }}>
          <View style={{backgroundColor:'purple',margin:10,padding:5,borderRadius:10,paddingHorizontal:15,width:'80%'}}>
          <Text style={{color:'white'}}>{item.todo}</Text>
          </View>
          <View style={{marginRight:25,marginTop:10}}>
          <TouchableOpacity onPress={()=>dispatch(deletetodo(item.id))}>
          <Icon name='trash' size={28} color="red"/>
          </TouchableOpacity>
          </View>
          </View>
          </View>
         
          </ScrollView>
        )
      })
    }
    <View>
    {
      todos.length > 0 && (
    
     <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'pink',borderRadius:15,padding:5,marginHorizontal:105}}>
          <TouchableOpacity onPress={()=>dispatch(deleteall())}>
         <Text style={{color:'purple'}}>DELETE ALL</Text>
          </TouchableOpacity>
          </View>
      )}
    </View>
    </View>
    </View>
    <View>
    <View style={{width:'100%',flexDirection:'row'}}>
    <View style={{width:'80%',height:35,backgroundColor:'purple',borderRadius:20,
    marginLeft:10,marginVertical:10}}>
    <TextInput
    placeholder="write a task"
    placeholderTextColor="white"
    value={items}
    onChangeText={(text)=>setItems(text)}
    style={{padding:5,paddingHorizontal:15,color:'white'}}
    />
    </View>
    <View style={{marginRight:10}}>
    <TouchableOpacity onPress={()=>handleAddTodo()}>
    <Icon name='add' size={50} color='purple'/>
    </TouchableOpacity>
    </View>
    </View>

    </View>
    
    </View>
    </View>
  )
}
export default Todo;