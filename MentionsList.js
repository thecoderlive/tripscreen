import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'



const mentionsListItem = ({ item }) => (
<View style={styles.mentions_list_item}>
<Text style={styles.mention_title}>{item.mention_title}</Text>
<Text style={styles.review_count}>{item.review_count}</Text>
</View>
  );

const MentionsList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.mentions_list}
    data={item}
    renderItem={mentionsListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default MentionsList;

const styles = StyleSheet.create({
mention_title: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
review_count: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  }
});