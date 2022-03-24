import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSeries } from "../../../../store/slices/series/services";

const Series = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch();
  const { list: series } = useSelector((state) => state.series);

  useEffect(() => {
    dispatch(fetchSeries(name))
  }, [name])

  const changeName = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <input onChange={(e) => changeName(e)}/>
      {series.map((serie, index) => (
        <div key={index}> 
          <img src={serie.show.image == null? '../../../../../public/logo192.png': serie.show.image.original} height={300} width={200}/>
          <h4>{serie.show.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Series;
