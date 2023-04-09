import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PreviewIcon from '@mui/icons-material/Preview';


const Home = () => {
  const [getdata, setGetData] = useState([]);
  const [page,setPage]=useState(1)
  const [loading, setLoading] = useState(true);
  const  [search,setSearch]= useState('')
  const dispatch= useDispatch()
  const  [sort,setSort]=useState('')

  const  sortProduct=(e)=>{
    console.log(e.target.value)
    setSort(e.target.value)
  }



  const DataAdd=(e)=>{
     console.log(e)
     toast.success("data Added into cart",{
      position:'top-center',
      autoClose:'100'
     });
     dispatch(ADD(e))
  }

  // useEffect(()=>{
  //   localStorage.setItem('cartItem',JSON.stringify(carts))
  // },[state.carts])

  // const getApiData=()=>{
  //     fetch('https://dummyjson.com/products').then(res=>{
  //        return res.json()
  //     }).then(response=>{
  //       console.log(response)
  //     }).catch((err)=>{
  //       console.log(err)
  //     })


  // }
const selectedPage=(selectpage)=>{
  if(selectpage >=1 && selectpage <= getdata.length/10 && selectpage!==page)
  setPage(selectpage)
}
 

  async function getApiData() {
    try {
      await axios.get("https://fakestoreapi.com/products").then((res) => {
        console.log(res.data);
        setGetData(res.data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <Slider />
      <h1 className="text-center"> Available Products</h1>
    
      <div >
      <div className="container ">
        <div className="row py-4">
          <div className="col-lg-5 col-md-5 col-6 ">
            <input type='text' onChange={(e)=>setSearch(e.target.value)} className="form-control" placeholder="Search by name..."/>
          </div>
          <div className="col-lg-5 col-md-5 col-6 m-auto" >
          <select className="sort "  value={sort} onChange={sortProduct} style={{width:'100%'}}>
            <option >Sort by:</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
          </div>
        </div>
      </div>
        <div className="container mb-5">
          <div className="row ">
            {loading ? (
              <p>Product loading...</p>
            ) : (
              getdata.slice(page *10-10,page*10).filter(ele=>{
               
                if(search ===''){
                  return getdata;
                }else if(ele.title.toLowerCase().includes(search.toLocaleLowerCase()) ){
                  return ele
              }
              }).map((product) => {
                return (
                  <div
                    className="col-lg-3 col-md-4 col-sm-12 col-12 my-4  card_column"
                    key={product.id}
                  >
                    <div className="card ">
                      <img
                        className="card-img-top"
                        src={product.image}
                        alt="Card  cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title my-2" style={{textOverfllow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap'}}>{product.title}</h5>
                        <p className="card-text py-2">
                          <b>Price:</b>  <span>$ {product.price}.</span>
                        </p>
                        
                        {/* <p>Rating : {product.rating}</p> */}
                        <div className="buttons">
                        <button className=" btn1" onClick={()=>DataAdd(product)}>
                          Add to  cart
                        </button>
                        <Link to={`/view/${product.id}`} className="btnview"><PreviewIcon/>  </Link>
                      </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
            {
              getdata.length > 0 && <div className="pagination">
                 <span onClick={()=>selectedPage(page-1)}>◀️</span>
                 {
                  [...Array(getdata.length/10)].map((_,i)=>{
                    return <span className={page===i+1?'pagination_selected':''}
                     onClick={()=>selectedPage(i+1)} key={i}>{i+1}</span>
                  })
                 }
                 
                 <span onClick={()=>selectedPage(page+1)}>▶️</span>
              </div>
            }
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
