import React, { useState } from "react";
import Container from "../../common/Container";
import ComponentTitle from "../../common/ComponentTitle";
import PhotoGallery from "../../common/PhotoGallery";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const imageGallery = [
  "/Bella-italia-img-1.png",
  "/Bella-italia-img-2.png",
  "/Bella-italia-img-3.png",
  "/Bella-italia-img-4.png",
  "/Bella-italia-img-5.png",
  "/Bella-italia-img-1.2.png",
  "/Bella-italia-img-2.png",
];

const BIGallery = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentImage, setCurrentImage] = useState(imageGallery[0]);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <Container>
      <div>
        <ComponentTitle
          children="Discover our magnificent place in photos"
          className="md:font-semibold"
        />
        <p className="max-w-[601px]">
          The lorem ipsum is, in printing, a series of meaningless words used
          temporarily to calibrate a layout. The lorem ipsum is, in printing.
        </p>

        {/* Thumbnail Gallery Component */}
        <PhotoGallery photos={imageGallery} onPress={onOpen} />

        {/* Modal */}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Gallery Preview
                </ModalHeader>
                <ModalBody>
                  {/* Main Image */}
                  <div className="relative mb-4">
                    <img
                      src={currentImage}
                      alt="Main Photo"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>

                  {/* Thumbnail Carousel */}
                  <div className="overflow-x-auto flex gap-1">
                    {imageGallery.map((image, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer border ${
                          currentImage === image
                            ? "border-blue-500"
                            : "border-transparent"
                        } rounded-lg`}
                        onClick={() => handleThumbnailClick(image)}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-24 h-24 object-cover rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </Container>
  );
};

export default BIGallery;
