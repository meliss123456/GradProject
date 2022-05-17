import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';

const { width: windowWidth } = Dimensions.get('window');

const data = [
  {
    uri: 'http://image.kyobobook.co.kr/images/book/large/348/l9788960907348.jpg',
    title: '애쓰지 않아도',
    content: `사람의 마음은 좀처럼 지치지를 않나봐요. 자꾸만 노력하려 하고, 다가가려 해요. 나에게도 그 마음이 살아 있어요`,
  },
  {
    uri: 'http://image.kyobobook.co.kr/images/book/large/994/l9791188469994.jpg',
    title: '당신은 결국 무엇이든 해내는 사람',
    content:
      '흔들리고 떠밀리고 넘어져도 나는, 당신은, 우리는 결국 해낼 것이라는 믿음의 문장들',
  },
  {
    uri: 'http://image.kyobobook.co.kr/images/book/large/204/l9791165345204.jpg',
    title: '책들의 부엌',
    content:
      '갓 지은 맛있는 책 냄새가 폴폴 풍기는 여기는 ‘소양리 북스 키친’입니다',
  },
  {
    uri: 'http://image.kyobobook.co.kr/images/book/large/096/l9791191891096.jpg',
    title: '나로서 충분히 괜찮은 사람',
    content: '애써 노력하지 않아도 돼. 나는 나로서 충분히 괜찮은 사람이니까',
  },
  {
    uri: 'http://image.kyobobook.co.kr/images/book/large/497/l9791165213497.jpg',
    title: '우리는 조구만 존재야 ',
    content: '우리는 조구만 존재야. 조구맣지만 안 중요하단 건 아냐 ',
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
    const { uri, title, content } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
      >
        <ImageBackground source={{ uri: uri }} style={styles.imageBackground}>
          <View style={styles.contentText}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.detailText}>{content}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={renderItem}
        itemWidth={0.6 * windowWidth}
        containerWidth={windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 20 },
  carousel: {
    aspectRatio: 1.3,
    flexGrow: 0,
    marginBottom: 0,
  },
  item: {
    flex: 1,
    borderRadius: 5,
    elevation: 3,
  },
  imageBackground: {
    justifyContent: 'flex-end',
    flex: 2,
  },
  contentText: {
    height: 120,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },
  detailText: {
    marginBottom: 5,
    fontSize: 12,
  },
});
