import React from 'react'
import { TextInput, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import MentionsList from './MentionsList'
import ReviewList from './ReviewList'

const Trip = () => (
<ScrollView style={styles.trip} showsVerticalScrollIndicator={false}>
<Text style={styles.rating_type}>{item.rating_type}</Text>
<Text style={styles.rating_count}>{item.rating_count}</Text>
<Text style={styles.rating_type2}>{item.rating_type2}</Text>
<Text style={styles.rating_count2}>{item.rating_count2}</Text>
<Text style={styles.rating_type3}>{item.rating_type3}</Text>
<Text style={styles.rating_count3}>{item.rating_count3}</Text>
<Text style={styles.rating_type4}>{item.rating_type4}</Text>
<Text style={styles.rating_count4}>{item.rating_count4}</Text>
<Text style={styles.mentions_heading}>{item.mentions_heading}</Text>
<MentionsList item={item.mentions_list}/>
<TextInput style={styles.search_reviews} placeholder={'Search Reviews'} />
<ReviewList item={item.review_list}/>
</ScrollView>
)

export default Trip;

const styles = StyleSheet.create({
rating_type: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_count: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_type2: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_count2: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_type3: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_count3: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_type4: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_count4: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
mentions_heading: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
search_reviews: {
    fontSize: 15,
    fontWeight: '400',
    padding: 10,
    margin: 5,
    backgroundColor:'whitesmoke',
    borderWidth: 1
  }
});