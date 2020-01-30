import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import NavigationRouts from '../../navigation/navigation-routs';
import {collectionActions, CollectionActions} from '../../actions/collections';
import {connect} from 'react-redux';
import {IAppState} from '../../state/app-state';
import {ICollection} from '../../models/collection';

interface CollectionListProps extends NavigationStackProp, CollectionActions {
  collections: ICollection[];
}

const songs = [
  {
    number: 1,
    name: 'Случайный поворот',
    verses: [
      '1. Слушайте повесть любви в простоте, Слушайте дивный рассказ: Бог нас навеки простил во Христе, Бог нас от гибели спас.',
      'Припев: Бог нас от гибели спас! Бог нас от гибели спас! Да, Бог нас навеки простил во Христе, Бог нас от гибели спас!',
      '2. Если неправда потерянных дней Мучит вас в тягостный час, Верьте всем сердцем и верою всей: Бог нас от гибели спас.',
      '3. Если под мраком житейских скорбей Пламень надежды погас, Вспомните только хоть мыслью своей: Бог нас от гибели спас.',
      '4. Если при виде соблазнов земных Слабый смущается глаз, – Слово да слышится в чувствах простых: Бог нас от гибели спас.',
    ],
  },
  {
    number: 2,
    name: 'Вот, настал',
    verses: [
      '1. Вот, настал молитвы час; С верой мы принесем Грех и страх, что мучат нас, Сложим их пред Христом. Нам дано давно познать: Хочет Он нас принять И Свое благословенье В полноте всем нам дать.',
      'Припев: Чудный час мольбы! Дивный час мольбы! Час священного общенья! Здесь так сладостно быть.',
      '2. Вот, настал молитвы час; Молим: «Вечный наш Бог! Духом Ты повей на нас; У Твоих все мы ног. Песню нам в уста вдохни, Души воспламени! И рукой любви и мира В нас сердца осени!»',
      '3. Вот, настал молитвы час; Тих и скромен наш дом, И душа к душе меж нас Льнет в общенье святом. «Мир разлей по всем сердцам, Мир пошли с неба нам! И теперь подобье неба, Боже, сделай в них Сам!»',
    ],
  },
];

const renderOption = (item, props) => (
  <TouchableOpacity
    style={styles.optionContainer}
    id={item.id}
    onPress={() => props.uploadToDbStart('Песть возрождения', songs)}
    title={item.title}
    activeOpacity={0.8}>
    <Text style={styles.optionTitle}>{item.name}</Text>
    <View style={styles.detailContainer}>
      <Text style={styles.optionInfo}>
        {item.songsCount} / {item.author}
      </Text>
    </View>
  </TouchableOpacity>
);

const CollectionList = (props: CollectionListProps) => {
  useEffect(() => {
    props.getCollectionsStart();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={props.collections}
        renderItem={({item}) => renderOption(item, props)}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity
        style={{width: 200, height: 100, backgroundColor: 'red'}}
        onPress={() => props.uploadToDbStart('Песть возрождения', songs)}
        activeOpacity={0.8}>
        <Text style={styles.optionTitle}>write</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{width: 200, height: 100, backgroundColor: 'blue'}}
        onPress={() => props.getCollectionsStart()}
        activeOpacity={0.8}>
        <Text style={styles.optionTitle}>read</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: IAppState): CollectionListProps =>
  ({
    collections: state.collections.collections,
  } as CollectionListProps);

export default connect(mapStateToProps, {
  ...collectionActions,
})(CollectionList);

const styles = StyleSheet.create({
  container: {backgroundColor: '#f2f2f2', flex: 1},
  optionContainer: {
    backgroundColor: 'white',
    padding: 15,
    margin: 5,
    elevation: 2,
  },
  optionTitle: {
    fontSize: 25,
    color: '#666666',
  },
  detailContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  optionInfo: {
    margin: 5,
    fontSize: 11,
    color: '#666666',
  },
});
