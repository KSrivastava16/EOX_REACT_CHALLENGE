import React,{useState} from 'react'
import './Search.css';

interface ISearchProps{
    onSearch:(value:string)=>void;
    onSearchClear:()=>void;
}

const Search = (props:ISearchProps) => {

    const [search,setSearch] =useState("")

    const onSearchChange = (e:any)=>{
     const value  = e.target.value;
     if(value){
         setSearch(value)
         props.onSearch(value.toLowerCase());
     }
     else{
         setSearch("")
         props.onSearchClear()
     }


    }

    const onClear=()=>{
        setSearch("")
        props.onSearchClear();
    }

    return (
        <div>
            <div className="search-bar">
                <input type="text" value ={search} className='search-text' placeholder='Enter Value To Search' onChange={onSearchChange}/>            
                <button  onClick={onClear}>Clear Selection</button>
            </div>
        </div>
    )
}

export default Search
