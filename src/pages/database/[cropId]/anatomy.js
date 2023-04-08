import ImageWithLabel from "@/components/CropDetails/ImageWithLabel";
import { storeTitle } from "@/redux/slices";
import { store } from "@/redux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Anatomy = () => {
  const { cropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Anatomy"));
  }, []);

  const anatomyObj = cropDetails.anatomy ? cropDetails?.anatomy : {};
  const anatomyArr = Object.entries(anatomyObj);

  let listArr = anatomyArr?.filter(
    (each) => each[0] !== "id" && each[0] !== "structure"
  );

  const list = listArr.map((list) => ({ property: [list[0]], value: list[1] }));

  const image = anatomyObj?.structure;
  return (
    <ImageWithLabel
      image={image}
      list={list}
      imgStyle={{ maxHeight: "100%" }}
    />
  );
};

export default Anatomy;
