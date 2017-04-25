import React from 'react';
import { Linking, Button, ScrollView } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator, DrawerView,TabView,TabBarTop } from 'react-navigation';
import { Icon, Tile } from 'react-native-elements';

import MainPage from './components/MainPage';
import Theme from './components/Theme';
import Sort from './components/Sort';
import Collection from './components/Collection';
import Topic from './components/Topic';
import Law from './components/Law';
import Comments from './components/Comment';
import QA from './components/QA';
import Category from './components/Category';



export const MainPageStack = StackNavigator({
  Main: {
    screen: MainPage,
    navigationOptions: {
      header:({state})=>({
        title: 'FollowMe',
        
        titleStyle:{ color:'white' },
        style:{backgroundColor:'#73B9C3'}
      })
    },
  },
  Theme: {
    screen: Theme,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.title.toUpperCase()}`,
        tintColor:'white',
        titleStyle:{ color:'white' },
        style:{backgroundColor:'#73B9C3'},
        right:(
          <Icon 
            name='favorite-border'
            color='white'
          />
        ),
      })
    },
  },
});

export const SortStack = StackNavigator({
  Sort: {
    screen: Sort,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: 'Sorts',
        titleStyle:{ color:'white' },
         right: (
          <Icon         
            name='search'
            color='white'
            iconStyle={{ marginRight: 20 }}
          />
        ),
        style:{backgroundColor:'#73B9C3'}
      })
    },
  },
  Category:{
    screen:Category,
    navigationOptions:{
      header: ({ state }) => ({
        title: `${state.params.title.toUpperCase()}`,
        titleStyle:{ color:'white' },
        style:{backgroundColor:'#73B9C3'},
      })
    },
  },
},
{
  // headerMode: 'none',
}
);

export const CollectionStack = StackNavigator({
  Collection: {
    screen: Collection,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: 'Collection',
        titleStyle:{ color:'white' },
        style:{backgroundColor:'#73B9C3'},
         right: (
          <Icon
            name='search'
            color='white'
            iconStyle={{ marginRight: 10 }}
          />
        ),
        left: (
          <Button
            title='Edit'
            color='white'
            onPress={() =>debug.log('zzz') }
          />
        ),
      })
    },
  },
   Theme: {
    screen: Theme,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.title.toUpperCase()}`,
        tintColor:'white',
        titleStyle:{ color:'white' },
        style:{backgroundColor:'#73B9C3'},
        right:(
          <Icon 
            name='favorite-border'
            color='white'
          />
        ),
      })
    },
  },
});


export const ThemeTabRouter = TabNavigator({
  主題:{
    screen:Topic,
  },
  法律:{
    screen:Law,
  },

  'Q&A':{
    screen:QA,
  
  },

  評論:{
    screen: Comments , 
  }

},
{
  tabBarPosition:'top',
  swipeEnable:'true',
 tabBarComponent:TabView.TabBarTop,
  tabBarOptions:{
    inactiveBackgroundColor:'#575F72',
    pressColor:'white'
  }
});

export const TabRouter = TabNavigator({
    MainPage: {
      screen: MainPageStack,
      
      navigationOptions: {
        tabBar: {
          label: '首頁',
          icon: () => <Icon name="home" size={35} color={'white'} />
        },
      },
    },
    Sort: {
      screen: SortStack,
      navigationOptions: {
        tabBar: {
          label: '分類',
          icon: () => <Icon name="explore" size={35} color={'white'} />
        },
      },
    },
    Collection: {
      screen: CollectionStack,
      navigationOptions: {
        tabBar: {
          label: '收藏',
          icon: () => <Icon name="favorite-border" size={35} color={'white'} />
        },
      },
    },
  },
  {
    tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor:'white',
    inactiveBackgroundColor: '#73B9C3',
    activeBackgroundColor:'#575F72'
   },
    animationEnabled: 'true',
    swipeEnable:'true',
  },
);

