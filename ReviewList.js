import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const reviewListItem = ({ item }) => (
<View style={styles.review_list_item}>
<Image
    style={styles.user_pic}
    source={{uri: item.user_pic}}
    />
<Text style={styles.date}>{item.date}</Text>
<Text style={styles.review_title}>{item.review_title}</Text>
<Text style={styles.review}>{item.review}</Text>
<Text style={styles.visited_dates}>{item.visited_dates}</Text>
</View>
  );

const ReviewList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.review_list}
    data={item}
    renderItem={reviewListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default ReviewList;

const styles = StyleSheet.create({
user_pic: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
date: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
review_title: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
review: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
visited_dates: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  }
});