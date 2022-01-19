import React,{useState} from 'react';
import './ProductList.css';
import API_Brands from '../../TempAPI/Brands.json';
import API_Producs from '../../TempAPI/Products.json'
import search from '../../Images/search.png';
import defaultImage from '../../Images/default.png';

// filtreler
let GlobalBrand = "all";
let GlobalModal = "all";
let GlobalID = "all";

let basket = [];

function ProductList() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="ProductList">
      <Filters onSelect={()=>{setRefresh(true)}}/>
      <div className='ListFloor'>
        <div className='head'>
          <h1>Resim</h1>
          <h1>Parça No</h1>
          <h1>Parça Adı</h1>
          <h1>Tutar</h1>
        </div>
        <ListItem product={{ID:"1234",Name:"Balata",ImageURL:"",Price:0.0,Brand:"",Modal:""}} />
      </div>
    </div>
  );
}

function ListItem(props={product:{ID: "",Name: "",ImageURL: "",Price:0.0,Brand: "", Modal: ""}}) {
  if(!props.product || !props) return (<></>);
  
  let image = "";
  if(props.product.ImageURL && props.product.ImageURL != ""){
    image = props.product.ImageURL;
  }
  else{
    image = defaultImage;
  }


  return (
    <div className='ListItem'>
      <div className='itemCol'>
        <img src={image} alt='' />
      </div>
      <div className='itemCol'>
        <h5>{props.product.ID}</h5>
      </div>
      <div className='itemCol'>
        <h5>{props.product.Name}</h5>
      </div>
      <div className='itemCol'>
        <h5>{props.product.Price}</h5>
      </div>
    </div>
  );
}

function Filters( props={onSelect: ()=>{}}) {
  //class olarak çağırılmadığı için veren hatayı siler
  console.clear();

  const select = () =>{
    setTimeout(() => {
      props.onSelect();
    }, 10);
  };

  const [Brand, setBrand] = useState("");
  const [Modal, setModal] = useState("");
  const [ID, setID] = useState("");

  const selectBrand = (e) => {
    if(e.target.options.selectedIndex == 0){
      GlobalBrand = "all";
      GlobalModal = "all";
      select();
      setBrand("");
    }
    else if (e.target.value != GlobalBrand){
      GlobalBrand = e.target.value;
      select();
      setBrand(e.target.value);
    }
  }

  const selectModal = (e) =>{
    if(e.target.options.selectedIndex == 0){
      setModal("");
      select();
      GlobalModal = "all";
    }
    else if (e.target.value != GlobalModal){
      GlobalModal = e.target.value;
      select();
      setModal(e.target.value);
    }
  }


  const changeID = (e) =>{
    if(e.target.value == ""){
      GlobalID = "all";
      select();
      setID("");
    }
    else if (e.target.value != GlobalID){
      GlobalID = e.target.value;
      select();
      setID(e.target.value);
    }
  }

  const brand = API_Brands.Brands.find( item => item.Name == Brand);

  return  (
    <div className='ProductList-FilterFloor'>
      <select onChange={selectBrand} value={Brand}>
        <option> Marka </option>
        {API_Brands.Brands.map((item,index)=>{
          return (
            <option value={item.Name}>{item.Name}</option>
          );
        })}
      </select>
      <select onChange={selectModal} value={Modal}>
        <option> Model </option>
        { brand ? brand.Models.map((item,index)=>{
          return (
            <option value={item}>{item}</option>
          );
        }):<></> }
      </select>
      <div className='Search'>
        <input placeholder='Parça No' value={ID} onChange={changeID} />
        <img src={search} />
      </div>
    </div>
  );
}

export default ProductList;
