import { Modal } from "components/Modal/Modal";
import { Container, Image } from "./ImageGalletyItem.styled";
import { useState } from "react";

export const ImageGalleryItem = ({webformatURL, tags, largeImageURL}) => {
const [isModalOpen, setIsModalOpen] = useState(false);
const openModal = () => {
    setIsModalOpen(true);
}; 
const closeModal = (e) => {
if(e.currentTarget !== e.target && e.code !=='Escape') {
    return
}
setIsModalOpen(false);
};
return (
        <Container>
            <Image 
            src={webformatURL} 
            alt={tags}
            width='200'
            height='100'
            onClick={openModal} 
            />
            {isModalOpen && (
                <Modal
                modalImg={largeImageURL}
                tags={tags}
                closeModal={closeModal}
                />
            )}
        </Container>
)
};