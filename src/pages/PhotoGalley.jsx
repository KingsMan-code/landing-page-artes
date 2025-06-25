import React, { useEffect, useRef, useState } from 'react';

const PhotoGallery = () => {
  const galleryRef = useRef(null);
  const [partsArray, setPartsArray] = useState([]);
  const [help, setHelp] = useState(true);
  
  const rows = 4;
  const cols = 6;
  const staggerTime = 150;

  // URLs de exemplo - podem ser substituídas por imagens reais da escola
  const urls = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  ];

  const [selectedImage, setSelectedImage] = useState(urls[0]);
  const [helpText, setHelpText] = useState("Escolha uma foto");

  useEffect(() => {
    // Initialize parts array
    const newPartsArray = [];
    for (let row = 0; row < rows; row++) {
      newPartsArray[row] = [];
      for (let col = 0; col < cols; col++) {
        newPartsArray[row][col] = { showing: "front" };
      }
    }
    setPartsArray(newPartsArray);
  }, []);

  const isShowingBack = () => {
    if (partsArray.length === 0) return false;
    return partsArray[0][0].showing === "back" && 
           partsArray[0][cols - 1].showing === "back" && 
           partsArray[rows - 1][0].showing === "back" && 
           partsArray[rows - 1][cols - 1].showing === "back";
  };

  const waveChange = (rowN, colN) => {
    if (rowN >= rows || colN >= cols || rowN < 0 || colN < 0) return;
    if (partsArray[rowN] && partsArray[rowN][colN] && partsArray[rowN][colN].showing === "back") return;

    // Update parts array
    const newPartsArray = [...partsArray];
    if (newPartsArray[rowN] && newPartsArray[rowN][colN]) {
      newPartsArray[rowN][colN].showing = "back";
      setPartsArray(newPartsArray);

      // Remove show-front class
      const element = document.querySelector(`.demo__part-${rowN + 1}-${colN + 1}`);
      if (element) {
        element.classList.remove("show-front");
      }

      setTimeout(() => {
        waveChange(rowN + 1, colN);
        waveChange(rowN - 1, colN);
        waveChange(rowN, colN + 1);
        waveChange(rowN, colN - 1);
      }, staggerTime);
    }
  };

  const handlePartClick = (row, col, imageUrl) => {
    setSelectedImage(imageUrl);
    if (help) {
      setHelpText("Clique em qualquer peça para voltar");
      setHelp(false);
    }
    waveChange(row, col);
  };

  const handleBackClick = () => {
    if (!isShowingBack()) return;

    setHelpText("Escolha uma foto");

    setTimeout(() => {
      const newPartsArray = [...partsArray];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (newPartsArray[row] && newPartsArray[row][col]) {
            newPartsArray[row][col].showing = "front";
          }
        }
      }
      setPartsArray(newPartsArray);
    }, staggerTime + (rows * cols * staggerTime) / 10);

    // Add show-front class to all parts
    for (let i = 0; i < rows * cols; i++) {
      setTimeout(() => {
        const row = Math.floor(i / cols) + 1;
        const col = (i % cols) + 1;
        const element = document.querySelector(`.demo__part-${row}-${col}`);
        if (element) {
          element.classList.add("show-front");
        }
      }, i * 10);
    }
  };

  const renderParts = () => {
    const parts = [];
    for (let row = 1; row <= rows; row++) {
      for (let col = 1; col <= cols; col++) {
        const index = (row - 1) * cols + (col - 1);
        const imageUrl = urls[index] || urls[0];
        
        parts.push(
          <div
            key={`${row}-${col}`}
            className={`demo__part demo__part-${row}-${col} show-front`}
            style={{
              position: 'relative',
              float: 'left',
              width: '110px',
              height: '110px',
              margin: '2px',
              transform: 'rotateY(180deg)',
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <div 
              className="demo__part-back"
              onClick={handleBackClick}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                backfaceVisibility: 'hidden',
                borderRadius: '5px',
                cursor: 'pointer',
                transform: 'rotateY(180deg) rotateX(0deg)'
              }}
            >
              <div 
                className="demo__part-back-inner"
                style={{
                  width: `${cols * 110 + (cols - 1) * 2 * 2}px`,
                  height: `${rows * 110 + (rows - 1) * 2 * 2}px`,
                  backgroundImage: `url(${selectedImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backfaceVisibility: 'hidden',
                  transform: `translate(${-(col - 1) * (110 + 2 * 2)}px, ${-(row - 1) * (110 + 2 * 2)}px)`
                }}
              />
            </div>
            <div 
              className="demo__part-front"
              onClick={() => handlePartClick(row - 1, col - 1, imageUrl)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                backfaceVisibility: 'hidden',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: '#708090',
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: 'rotateX(0deg)',
                transition: 'all 0.2s ease'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'black',
                  opacity: 0.5,
                  transition: 'all 0.2s ease'
                }}
              />
            </div>
          </div>
        );
      }
    }
    return parts;
  };

  return (
    <div className="demo flex flex-col items-center justify-center">
      <div className="demo__help mb-4 text-2xl font-light text-white">
        {helpText}
      </div>
      <div 
        ref={galleryRef}
        className="demo__gallery bg-gray-200 rounded-lg"
        style={{
          width: `${cols * 110 + 2 * cols * 2 + 2 * 2}px`,
          height: `${rows * 110 + 2 * rows * 2 + 2 * 2}px`,
          padding: '2px',
          perspective: '700px'
        }}
      >
        {renderParts()}
      </div>
      
      <style jsx>{`
        .demo__part.show-front {
          transform: none !important;
        }
        
        .demo__part-front:hover {
          box-shadow: 0 0 10px black;
          transform: scale(0.96) !important;
        }
        
        .demo__part-front:hover > div {
          opacity: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default PhotoGallery;

