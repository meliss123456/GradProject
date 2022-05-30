import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { Container, Content, Icon, Thumbnail } from 'native-base';
import Carousel from 'react-native-anchor-carousel';
import Groupicon from '../components/Groupicon';

const { width: windowWidth } = Dimensions.get('window');

const data = [
  {
    title: '정유경 뽀개기',
    content: `2022/04/02 ~ 022/04/18`,
  },
  {
    title: '추리독서클럽',
    content:
      '2022/04/02 ~ 022/04/18',
  },
  {
    title: '책들의 부엌',
    content:
      '2022/04/02 ~ 022/04/18',
  },
  {
    title: '우리는 조구만 존재야 ',
    content: '2022/04/02 ~ 022/04/18',
  },
];

const INITIAL_INDEX = 0;
export default function ImageCarousel(props) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({ item, index }) {
    const { title, content } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
      >
       
          <View style={styles.contentText}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.detailText}>{content}</Text>
            <Groupicon/>

            
         </View>

          
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={renderItem}
        itemWidth={0.8* windowWidth}
        containerWidth={windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 0 },
  carousel: {
    aspectRatio: 1.8,
    flexGrow: 0,
    marginBottom: 0,
  },
  item: {
    flex: 1,
    borderRadius: 5,
    elevation: 3,
  },
//   imageBackground: {
//     justifyContent: 'flex-end',
//     flex: 2,
//   },
  contentText: {
    margin: 20,
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30,
    marginLeft: 15,
  },
  detailText: {
    marginBottom: 40,
    marginLeft: 15,
    marginRight:15,
    fontSize: 12,
  },
});
