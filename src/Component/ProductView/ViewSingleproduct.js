import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./viewsingleproduct.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/action";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { DELET } from "../../redux/actions/action";

function View() {
   
  let quty=0;
  const dispatch = useDispatch()
  const [singleproduct, setSingleproduct] = useState([]);
  const { id } = useParams();
  //  console.log(id)
  const navigate = useNavigate()

  const send=(e)=>{
      dispatch(ADD(e))
  }

  const deleted=(item)=>{
    console.log(dispatch(DELET(item)))
    navigate('/')
  }

  async function showSingleProduct() {
    try {
      await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        console.log(res.data);
        setSingleproduct(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    showSingleProduct();
  }, [id]);

  return (
    <>
      <div className="container viewpage mb-5">
        <div className="col-lg-12 col-md-12 col-12 m-auto">
          <h3 className="details">Product Detailes</h3>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 imagecolumn">
              <img src={singleproduct.image} alt="mobile_pic" />
            </div>
            <div className="col-lg-8 col-md-8  col-12 contentdiv">
              <h4>Name : {singleproduct.title}</h4>
              <table ClassName="table">
                <tbody>
                  <tr>
                    <td>Price : {singleproduct.price}</td>
                    <td style={{paddingLeft:'10px'}}>Rating : {singleproduct.id}<StarRateIcon /></td>
                  </tr>
                </tbody>
              </table>
              <p><b>Description  :</b> {singleproduct.description}</p>
              <button className=" btn1" onClick={()=>send(singleproduct)}>Add to cart</button>
              <div className="IncreasQunt">
                {/* <AddIcon className="add" />
                  <p>{quty}</p>
                  <RemoveIcon className="add" /> */}
                <div>
                <DeleteForeverIcon onClick={()=>deleted(singleproduct)} style={{background:'rgb(160, 33, 160)',color:'#fff',width:'30px',height:'30px'}}/>
                </div>
               
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
