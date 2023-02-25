import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function WrapperComponent(item){
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    return <item.item navigate={navigate} location={location} params={params}/>
}