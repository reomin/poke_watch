import './App.css'
import './index.css'
import { useState } from 'react'
import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';


//いくつか穴を残してplaywoghtでテストをするイメージ
//anyを修正する
function App() {

  //input内のid状態管理
  const [id, setId] = useState('');
  const [pic, setPic] = useState('');

  const queryClient = new QueryClient()
  
  //idを更新
  const createId =(e:any)=>{
    setId(e.target.value);
  }


  //ポケモン画像を取得するAPI
  const fetchData = async (id:any) =>{
    if(id !== ""){
      try{
        //poke APIを使用する。
        const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/"+ id +"/");

        if(data.sprites.other.home.front_default){
          setPic(data.sprites.other.home.front_default);
          return {pic: data.sprites.other.home.front_default};
        }else{
          alert("エラーが発生しました");
          return;
        }
      }catch(error:any){
        alert( error.message);
      }
    }
    alert("idを入力してください");
  }
    
  return(
    <>
    <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
      <h1 className="text-3xl font-bold underline">
        Hello PokeWatch!!
      </h1>
        <p className="m-0 text-gray-400">好きなポケモンを表示させよう！！</p>
        <input type="number" placeholder='idを入力' onChange={createId} />
        <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white" onClick={() =>fetchData(id)}>ボタン</button>
    </div>
    <div>
      {pic !== "" ?
      
      <img src={pic} className="App-logo" alt="logo" />
       
       : ""}
    </div>
    </>
  )
}

export default App
