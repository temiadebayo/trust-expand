/**
 * Image paths for the website
 * All images are stored in public/images/ and accessible via /images/
 */

export const images = {
  // Gallery images
  gallery: {
    image1: '/images/01.jpeg',
    image2: '/images/02.jpeg',
    image3: '/images/03.jpeg',
    image4: '/images/04.jpeg',
    image5: '/images/05.jpeg',
    image6: '/images/06.jpeg',
    image7: '/images/07.jpeg',
    image8: '/images/08.jpeg',
    image9: '/images/09.jpeg',
    image10: '/images/10.jpeg',
    image11: '/images/11.jpeg',
    image12: '/images/12.jpeg',
    whatsapp: '/images/WhatsApp Image 2025-11-26 at 23.36.08 (2).jpeg',
  },
  
  // Helper function to get image by number
  getImage: (num: number): string => {
    const paddedNum = num.toString().padStart(2, '0');
    return `/images/${paddedNum}.jpeg`;
  },
  
  // Get all gallery images as array
  getAllGalleryImages: (): string[] => {
    return Array.from({ length: 12 }, (_, i) => images.getImage(i + 1));
  },
};

