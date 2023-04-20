import { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getImagesAPI } from "Services/Api";
import { Container } from "./App.styled";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";

export const App = () => {

const [query, setQuery] = useState('');
const [page, setPage] = useState(1);
const [images, setImages] = useState([]);
const [totalHits, setTotalHits] = useState(0);
const [isLoading, setIsLoading] = useState(false);


const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
  };

const handleLOadMore = () => {
    setPage(state => state + 1);
  };

useEffect(() => {
  if(!query) {
    return;
  }
const fetchData = async () => {
    try {
    setIsLoading(true);
    const { hits, totalHits } = await getImagesAPI(query, page);
    if (totalHits === 0) {
      alert('ничего не нашли')
      setIsLoading(false );
      return;
    }
    setImages(state => (page === 1 ? hits : [...state, ...hits]))
    setTotalHits(state =>
      (page === 1 ? totalHits - hits.length :
      state - hits.length)
      ); 
    setIsLoading(false);
  } catch (error) {
    console.log(error)
  };
  };
  fetchData();
}, [page, query])

    return (
      <Container>
      <Searchbar onSubmit={handleFormSubmit}/>
      <ImageGallery images={images}/>  
      {!!totalHits && <Button onLoadMore={handleLOadMore}/> }
      {isLoading && < Loader />}
      </Container>
    )
};
