import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Carroussel() {
  return (
    <Box sx={{ marginLeft: 23, width: 1000, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: '/carrouselImages/photo.jpeg',
    title: 'Bed',
    author: 'Duda Santana',
  },
  {
    img: '/carrouselImages/photo2.jpeg',
    title: 'Books',
    author: 'Duda Santana',
  },
  {
    img: '/carrouselImages/photo3.jpeg',
    title: 'Sink',
    author: 'Duda Santana',
  },
  {
    img: '/carrouselImages/photo4.jpeg',
    title: 'Kitchen',
    author: 'Duda Santana',
  },
  {
    img: '/carrouselImages/photo5.jpeg',
    title: 'Blinds',
    author: 'Duda Santana',
  },
  {
    img: '/carrouselImages/photo6.jpeg',
    title: 'Chairs',
    author: 'Duda Santana',
  },
];
